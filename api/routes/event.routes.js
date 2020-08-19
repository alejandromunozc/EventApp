const { Router } = require("express");
const router = Router();
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/event.controller');

router.get('/api/events', getEvents);
router.get('/api/events/:id', getEvent);
router.post('/api/events', createEvent);
router.put('/api/events/:id', updateEvent);
router.delete('/api/events/:id', deleteEvent);

module.exports = router;