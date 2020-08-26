const organizationController = {};

const organizationModel = require('../lib/models/organization');

organizationController.getOrganizations = async(req, res) => {
    try {
        const organizations = await organizationModel.find();
        res.json({ organizations });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

organizationController.getOrganization = async(req, res) => {
    const { id } = req.params
    try {
        const organization = await organizationModel.findOne({ _id: id });
        res.json({ organization });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

organizationController.createOrganization = async(req, res) => {
    const { name, members } = req.body;
    const newOrganization = new organizationModel({ name, members });
    try {
        await newOrganization.save();
        res.json({ organization: newOrganization });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

organizationController.updateOrganization = async(req, res) => {
    const { id } = req.params;
    const organization = await organizationModel.findOne({ _id: id });
    const newData = {
        id: req.params.id,
        name: req.body.name || organization.name,
        members: []
    }

    if (req.body.members) {
        newData.members = organization.members;
        newData.members[newData.members.length] = req.body.members;
    }

    try {
        await organizationModel.findByIdAndUpdate(req.params.id, { $set: newData });
        res.json({ organization: newData });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

organizationController.deleteOrganization = async(req, res) => {
    try {
        await organizationModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = organizationController;