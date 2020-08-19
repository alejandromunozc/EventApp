const organizationController = {};

const organizationModel = require('../lib/models/organization');

organizationController.getOrganizations = async(req, res) => {
    const organizations = await organizationModel.find();
    res.json({ organizations });
}

organizationController.getOrganization = async(req, res) => {
    const { id } = req.params
    const organization = await organizationModel.findOne({ _id: id });
    res.json({ organization });
}

organizationController.createOrganization = async(req, res) => {
    const { name, members } = req.body;
    const newOrganization = new organizationModel({ name, members });
    await newOrganization.save();
    res.send('organization created');
}

organizationController.updateOrganization = async(req, res) => {
    const { name, members } = req.body;
    await organizationModel.findByIdAndUpdate(req.params.id, { name, members });
    res.send('organization updated');
}

organizationController.deleteOrganization = async(req, res) => {
    await organizationModel.findByIdAndDelete(req.params.id);
    res.send('organization deleted');
}

module.exports = organizationController;