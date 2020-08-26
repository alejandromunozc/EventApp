const { Router } = require("express");
const authVerifyToken = require('../middlewares/authVerifyToken');
const bufferImg = require('../middlewares/bufferImg');
const s3Upload = require('../middlewares/s3Upload');
const router = Router();
const {
    getPartners,
    getPartner,
    createPartner,
    updatePartner,
    deletePartner
} = require('../controllers/partner.controller');

router.get('/api/partners', getPartners);
router.get('/api/partners/:id', getPartner);
router.post('/api/partners', authVerifyToken, bufferImg, s3Upload, createPartner);
router.put('/api/partners/:id', authVerifyToken, bufferImg, s3Upload, updatePartner);
router.delete('/api/partners/:id', authVerifyToken, deletePartner);

module.exports = router;