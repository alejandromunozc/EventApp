const speakerController = {};

const SpeackerModel = require('../lib/models/speaker');
const eventModel = require('../lib/models/event')

speakerController.getSpeakers = async(req, res) => {

    try {
        const eventSpeakers = await eventModel.findOne({ _id: req.body.idEvent });
        const speakers = await SpeackerModel.find({ _id: { $in: eventSpeakers.speakers } });
        res.json({ speakers })

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
        const eventSpeakers = await eventModel.findOne({ _id: req.body.idEvent });
        const speaker = eventSpeakers.speakers;
        speaker[speaker.length] = newSpeaker.id;
        await eventModel.findByIdAndUpdate(req.body.idEvent, { $set: { speakers: speaker } });
        res.json({ speaker: newSpeaker });
    } catch (error) {
        res.json({ message: 'Error' });
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