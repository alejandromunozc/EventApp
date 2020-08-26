const { Router } = require("express");
const authVerifyToken = require('../middlewares/authVerifyToken');
const bufferImg = require('../middlewares/bufferImg');
const s3Upload = require('../middlewares/s3Upload');
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
router.post('/api/speakers', authVerifyToken, bufferImg, s3Upload, createSpeaker);
router.put('/api/speakers/:id', authVerifyToken, bufferImg, s3Upload, updateSpeaker);
router.delete('/api/speakers/:id', authVerifyToken, deleteSpeaker);

module.exports = router;