const userController = {};

const userModel = require('../lib/models/user');
const { config } = require('../config');
const jwt = require('jsonwebtoken');


userController.getUsers = async(req, res) => {
    const users = await userModel.find();
    res.json({ users });
}

userController.getUser = async(req, res) => {
    const { id } = req.params
    const user = await userModel.findOne({ _id: id });
    res.json({ user });
}

userController.createUser = async(req, res) => {
    const {
        name,
        username,
        password,
        email,
        rol,
        img_url,
        organization
    } = req.body;
    const newUser = new userModel({
        name,
        username,
        password,
        email,
        rol,
        img_url,
        organization
    });
    await newUser.save();
    res.send('user created');
}

userController.updateUser = async(req, res) => {
    const {
        name,
        username,
        password,
        email,
        rol,
        img_url,
        organization
    } = req.body;
    await userModel.findByIdAndUpdate(req.params.id, {
        name,
        username,
        password,
        email,
        rol,
        img_url,
        organization
    });
    res.send('user updated');
}

userController.deleteUser = async(req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    res.send('user deleted');
}

userController.loginUser = async(req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.json('User does not exist');
    }

    const isValid = await user.matchPass(password);
    if (!isValid) {
        return res.json({ auth: false, token: null });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 60 * 60 * 24
    })

    res.json({ auth: true, token, user });
}

userController.signupUser = async(req, res) => {
    const {
        name,
        username,
        password,
        email
    } = req.body;
    const user = new userModel({
        name,
        username,
        password,
        email
    });

    user.password = await user.encryptPass(user.password);
    user.save();
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.json({ auth: true, token })
}

userController.dashboard = async(req, res) => {
    const user = await userModel.findById(req.userId, { password: 0 });
    if (!user) {
        return res.send('no user found');
    }
    res.json(user);
}

module.exports = userController;