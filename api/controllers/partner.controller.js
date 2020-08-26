const partnerController = {};

const partnerModel = require('../lib/models/partner');

partnerController.getPartners = async(req, res) => {
    try {
        const partners = await partnerModel.find();
        res.json({ partners });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

partnerController.getPartner = async(req, res) => {
    const { id } = req.params;
    try {
        const partner = await partnerModel.findOne({ _id: id });
        res.json({ partner });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

partnerController.createPartner = async(req, res) => {
    const { name, url, img_url } = req.body;
    const newPartner = new partnerModel({ name, url, img_url });
    try {
        await newPartner.save();
        res.json({ partner: newPartner });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

partnerController.updatePartner = async(req, res) => {
    const { id } = req.params;
    const partner = await partnerModel.findOne({ _id: id });
    const newData = {
        id: req.params.id,
        name: req.body.name || partner.name,
        url: req.body.url || partner.url,
        img_url: req.body.img_url || partner.img_url
    }

    try {
        await partnerModel.findByIdAndUpdate(req.params.id, { $set: newData });
        res.json({ partner: newData });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

partnerController.deletePartner = async(req, res) => {
    try {
        await partnerModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = partnerController;