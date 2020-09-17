const { Router } = require("express");
const authVerifyToken = require('../middlewares/authVerifyToken');
const bufferImg = require('../middlewares/bufferImg');
const s3Upload = require('../middlewares/s3Upload');
const router = Router();
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/event.controller');

router.get('/api/events/org/:id', getEvents);
router.get('/api/events/:id', getEvent);
router.post('/api/events', authVerifyToken, createEvent);
router.put('/api/events/:id', authVerifyToken, bufferImg, s3Upload, updateEvent);
router.delete('/api/events/:id', authVerifyToken, deleteEvent);

module.exports = router;