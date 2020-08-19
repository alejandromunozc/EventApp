const speakerController = {};

const SpeackerModel = require('../lib/models/speaker');

speakerController.getSpeakers = async(req, res) => {
    const speakers = await SpeackerModel.find();
    res.json({ speakers });
}

speakerController.getSpeaker = async(req, res) => {
    const { id } = req.params
    const speaker = await SpeackerModel.findOne({ _id: id });
    res.json({ speaker });
}

speakerController.createSpeaker = async(req, res) => {
    const { name, bio, rol, twitter, img_url } = req.body;
    const newSpeaker = new SpeackerModel({ name, bio, rol, twitter, img_url });
    await newSpeaker.save();
    res.send('Speaker created');
}

speakerController.updateSpeaker = async(req, res) => {
    const { name, bio, rol, twitter, img_url } = req.body;
    await SpeackerModel.findByIdAndUpdate(req.params.id, { name, bio, rol, twitter, img_url });
    res.send('Speaker updated');
}

speakerController.deleteSpeaker = async(req, res) => {
    await SpeackerModel.findByIdAndDelete(req.params.id);
    res.send('Speaker deleted');
}

module.exports = speakerController;