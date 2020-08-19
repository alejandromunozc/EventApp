const { Router } = require("express");
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
router.post('/api/speakers', createSpeaker);
router.put('/api/speakers/:id', updateSpeaker);
router.delete('/api/speakers/:id', deleteSpeaker);

module.exports = router;