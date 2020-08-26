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
    const { name, bio, role, twitter, img_url } = req.body;
    const newSpeaker = new SpeackerModel({ name, bio, role, twitter, img_url });
    try {
        await newSpeaker.save();
        res.json({ speaker: newSpeaker });
    } catch (error) {
        res.json({ message: error });
    }
}

speakerController.updateSpeaker = async(req, res) => {
    const { id } = req.params
    const speaker = await SpeackerModel.findOne({ _id: id });
    const newData = {
        id: req.params.id,
        name: req.body.name || speaker.name,
        bio: req.body.bio || speaker.bio,
        role: req.body.role || speaker.role,
        twitter: req.body.twitter || speaker.twitter,
        img_url: req.body.img_url || speaker.img_url
    }

    try {
        await SpeackerModel.findByIdAndUpdate(req.params.id, { $set: newData });
        res.json({ speaker: newData });
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