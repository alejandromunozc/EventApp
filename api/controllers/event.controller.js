const eventController = {};

const eventModel = require('../lib/models/event');

eventController.getEvents = async (req, res) => {
    const { id } = req.params;
    try {
        const events = await eventModel.find({ organization: id });
        console.log(events) // Eliminar console.log
        res.json({ events });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

eventController.getEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await eventModel.findOne({ _id: id });
        res.json({ event });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

eventController.createEvent = async (req, res) => {
    const {
        name,
        info,
        organization,
        event_url,
        location,
        country,
        city,
        date,
        start_hour
    } = req.body;
    const newEvent = new eventModel({
        name,
        info,
        organization,
        event_url,
        location,
        country,
        city,
        date,
        start_hour
    });
    try {
        await newEvent.save();
        res.json({ event: newEvent });
    } catch (error) {
        res.json({ message: error });
    }
}

eventController.updateEvent = async (req, res) => {
    const { id } = req.params;
    const event = await eventModel.findOne({ _id: id });
    const newData = {
        id: req.params.id,
        name: req.body.name || event.name,
        event_title: req.body.event_title || event.event_title,
        event_url: req.body.event_url || event.event_url,
        location: req.body.location || event.location,
        country: req.body.country || event.country,
        city: req.body.city || event.city,
        date: req.body.date || event.date,
        start_hour: req.body.start_hour || event.start_hour,
        info: req.body.info || event.info,
        organization: req.body.organization || event.organization,
        template: req.body.template || event.template,
        logo_url: req.body.logo_url || event.logo_url,
        banner_url: req.body.banner_url || event.banner_url,
        img_url: req.body.img_url || event.img_url,
        sendedMail: req.body.sendedMail || event.sendedMail
    }
    if (req.body.partners) {
        newData.partners = event.partners;
        newData.partners[newData.partners.length] = req.body.partners;
    }
    if (req.body.register) {
        newData.register = event.register;
        newData.register[newData.register.length] = req.body.register;
    }
    if (req.body.schedule) {
        newData.schedule = event.schedule;
        newData.schedule[newData.schedule.length] = req.body.schedule;
    }

    try {
        await eventModel.findByIdAndUpdate(req.params.id, { $set: newData });
        res.json({ event: newData });
    } catch (error) {
        res.json({ message: error });
    }
}

eventController.deleteEvent = async (req, res) => {
    try {
        await eventModel.findByIdAndDelete(req.params.id);
        res.json({ id: req.params.id });
    } catch (error) {
        res.json({ message: 'Error' });
    }
}

module.exports = eventController;