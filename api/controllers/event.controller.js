const eventController = {};

const eventModel = require('../lib/models/event');

eventController.getEvents = async(req, res) => {
    try {
        const events = await eventModel.find();
        res.json({ events });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

eventController.getEvent = async(req, res) => {
    const { id } = req.params;
    try {
        const event = await eventModel.findOne({ _id: id });
        res.json({ event });
    } catch (error) {
        res.json({ message: 'Error' });
    }
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
    try {
        await newEvent.save();
        res.json({ id: newEvent.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
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
    try {
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
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

eventController.deleteEvent = async(req, res) => {
    try {
        await eventModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = eventController;