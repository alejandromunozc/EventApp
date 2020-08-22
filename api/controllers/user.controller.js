const userController = {};

const userModel = require('../lib/models/user');
const { config } = require('../config');
const jwt = require('jsonwebtoken');
const user = require('../lib/models/user');


userController.getUsers = async(req, res) => {
    try {
        const users = await userModel.find();
        res.json({ users });
    } catch (error) {
        res.json({ message: 'Error' });
    }

}

userController.getUser = async(req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findOne({ _id: id });
        res.json({ user });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.createUser = async(req, res) => {
    const {
        name,
        password,
        email,
        role,
        img_url,
        organization
    } = req.body;
    const newUser = new userModel({
        name,
        password,
        email,
        role,
        img_url,
        organization
    });
    newUser.password = await newUser.encryptPass(newUser.password);
    try {
        await newUser.save();
        res.json({ id: user.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }

}

userController.updateUser = async(req, res) => {
    const {
        name,
        password,
        email,
        role,
        img_url,
        organization
    } = req.body;
    try {
        await userModel.findByIdAndUpdate(req.params.id, {
            name,
            password,
            email,
            role,
            img_url,
            organization
        });
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.deleteUser = async(req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.loginUser = async(req, res) => {
    const { email, password } = req.body;
    try {
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
        res.header('x-access-token', token);
        res.json({ auth: true, id: user.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
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
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    try {
        user.save();
        res.header('x-access-token', token);
        res.json({ auth: true, id: user.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = userController;