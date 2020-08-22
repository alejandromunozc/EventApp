const { Router } = require("express");
const authVerifyToken = require('../controllers/authVerifyToken');
const router = Router();
const {
    getSpeakers,
    getSpeaker,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker
} = require('../controllers/speakers.controller');

router.get('/api/speakers', getSpeakers);
router.get('/api/speakers/:id', getSpeaker);
router.post('/api/speakers', authVerifyToken, createSpeaker);
router.put('/api/speakers/:id', authVerifyToken, updateSpeaker);
router.delete('/api/speakers/:id', authVerifyToken, deleteSpeaker);

module.exports = router;