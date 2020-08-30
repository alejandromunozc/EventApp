const userController = {};

const userModel = require('../lib/models/user');
const organizationModel = require('../lib/models/organization');
const { config } = require('../config');
const jwt = require('jsonwebtoken');

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
    console.log('members');
    let members = await organizationModel.findOne({ name: req.body.organization });

    members.members[members.members.length] = req.body.email;
    console.log(members);
    await organizationModel.findByIdAndUpdate(members._id, { $set: members });
    try {

        await newUser.save();
        res.json({ user: newUser });
    } catch (error) {
        console.log('members 2');
        res.json({ message: error });
    }

}

userController.updateUser = async(req, res) => {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    const newData = {
        id: req.params.id,
        name: req.body.name || user.name,
        password: req.body.password || user.password,
        email: req.body.email || user.email,
        role: req.body.role || user.role,
        organization: req.body.organization || user.organization,
        img_url: req.body.img_url || user.img_url
    }
    try {
        await userModel.findByIdAndUpdate(req.params.id, { $set: newData });
        res.json({ user: newData });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.deleteUser = async(req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id, message: 'User deleted' });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.loginUser = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.json({ message: 'Incorrect email or password' });
        }

        const isValid = await user.matchPass(password);
        if (!isValid) {
            return res.json({ message: 'Incorrect email or password' });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        res.header('X-ACCESS_TOKEN', token);
        res.json({ auth: true, user: user, token: token });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

userController.signupUser = async(req, res) => {
    const {
        name,
        role,
        password,
        email,
        organization,
        img_url
    } = req.body;
    const user = new userModel({
        name,
        role,
        password,
        email,
        organization,
        img_url
    });
    user.password = await user.encryptPass(user.password);
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    try {
        const newOrganization = await new organizationModel({ name: req.body.organization });
        await newOrganization.save();
        await user.save();
        res.header('X-ACCESS_TOKEN', token);
        res.json({ auth: true, user: user, token: token });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = userController;