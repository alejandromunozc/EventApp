const express = require('express');
const EventsService = require('../services/events');

function eventsApi(app) {
    const router = express.Router();
    app.use('/api/events', router);

    const eventsService = new EventsService();

    router.get('/', async function(req, res, next) {
        try {
            const events = await eventsService.getEvents();

            res.status(200).json({
                data: events,
                message: "Events listed"
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:eventId', async function(req, res, next) {
        const { eventId } = req.params;
        try {
            const event = await eventsService.getEvent({ eventId })

            res.status(200).json({
                data: event,
                message: "Event retrieved"
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body: event } = req;
        try {
            const createdEventId = await eventsService.createEvent({ event });

            res.status(201).json({
                data: createdEventId,
                message: "Event created"
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:eventId', async function(req, res, next) {
        const { eventId } = req.params;
        const { body: event } = req;
        try {
            const updatedEventId = await eventsService.updateEvent({ eventId, event });

            res.status(200).json({
                data: updatedEventId,
                message: "Event updated"
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:eventId', async function(req, res, next) {
        const { eventId } = req.params;
        try {
            const deletedEventId = await eventsService.deleteEvent({ eventId })

            res.status(200).json({
                data: deletedEventId,
                message: "Event deleted"
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = eventsApi;