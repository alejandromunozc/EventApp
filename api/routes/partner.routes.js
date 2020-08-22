const { Router } = require("express");
const authVerifyToken = require('../controllers/authVerifyToken');
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
router.post('/api/partners', authVerifyToken, createPartner);
router.put('/api/partners/:id', authVerifyToken, updatePartner);
router.delete('/api/partners/:id', authVerifyToken, deletePartner);

module.exports = router;