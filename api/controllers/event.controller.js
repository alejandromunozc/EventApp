const eventController = {};

const eventModel = require('../lib/models/event');

eventController.getEvents = async(req, res) => {
    const events = await eventModel.find();
    res.json({ events });
}

eventController.getEvent = async(req, res) => {
    const { id } = req.params
    const event = await eventModel.findOne({ _id: id });
    res.json({ event });
}

eventController.createEvent = async(req, res) => {
    const {
        name,
        info,
        event_url,
        date,
        template,
        logo_url,
        banner_url,
        associates,
        schedule
    } = req.body;
    const newEvent = new eventModel({
        name,
        info,
        event_url,
        date,
        template,
        logo_url,
        banner_url,
        associates,
        schedule
    });
    await newEvent.save();
    res.send('event created');
}

eventController.updateEvent = async(req, res) => {
    const {
        name,
        info,
        event_url,
        date,
        template,
        logo_url,
        banner_url,
        associates,
        schedule
    } = req.body;
    await eventModel.findByIdAndUpdate(req.params.id, {
        name,
        info,
        event_url,
        date,
        template,
        logo_url,
        banner_url,
        associates,
        schedule
    });
    res.send('event updated');
}

eventController.deleteEvent = async(req, res) => {
    await eventModel.findByIdAndDelete(req.params.id);
    res.send('event deleted');
}

module.exports = eventController;