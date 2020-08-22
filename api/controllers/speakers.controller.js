const speakerController = {};

const SpeackerModel = require('../lib/models/speaker');

speakerController.getSpeakers = async(req, res) => {
    try {
        const speakers = await SpeackerModel.find();
        res.json({ speakers });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

speakerController.getSpeaker = async(req, res) => {
    const { id } = req.params
    try {
        const speaker = await SpeackerModel.findOne({ _id: id });
        res.json({ speaker });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

speakerController.createSpeaker = async(req, res) => {
    const { name, bio, rol, twitter, img_url } = req.body;
    const newSpeaker = new SpeackerModel({ name, bio, rol, twitter, img_url });
    try {
        await newSpeaker.save();
        res.json({ speaker: newSpeaker.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

speakerController.updateSpeaker = async(req, res) => {
    const { name, bio, rol, twitter, img_url } = req.body;
    try {
        await SpeackerModel.findByIdAndUpdate(req.params.id, { name, bio, rol, twitter, img_url });
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

speakerController.deleteSpeaker = async(req, res) => {
    try {
        await SpeackerModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = speakerController;