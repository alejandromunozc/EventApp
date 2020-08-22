const { Router } = require("express");
const authVerifyToken = require('../controllers/authVerifyToken');
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
router.post('/api/events', authVerifyToken, createEvent);
router.put('/api/events/:id', authVerifyToken, updateEvent);
router.delete('/api/events/:id', authVerifyToken, deleteEvent);

module.exports = router;