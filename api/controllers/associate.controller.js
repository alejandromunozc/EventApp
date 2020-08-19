const associateController = {};

const AssociateModel = require('../lib/models/associate');

associateController.getAssociates = async(req, res) => {
    const associates = await AssociateModel.find();
    res.json({ associates });
}

associateController.getAssociate = async(req, res) => {
    const { id } = req.params
    const associate = await AssociateModel.findOne({ _id: id });
    res.json({ associate });
}

associateController.createAssociate = async(req, res) => {
    const { name, url, img_url } = req.body;
    const newAssociate = new AssociateModel({ name, url, img_url });
    await newAssociate.save();
    res.send('associate created');
}

associateController.updateAssociate = async(req, res) => {
    const { name, url, img_url } = req.body;
    await AssociateModel.findByIdAndUpdate(req.params.id, { name, url, img_url });
    res.send('associate updated');
}

associateController.deleteAssociate = async(req, res) => {
    await AssociateModel.findByIdAndDelete(req.params.id);
    res.send('associate deleted');
}

module.exports = associateController;