const { Router } = require("express");
const router = Router();
const {
    getAssociates,
    getAssociate,
    createAssociate,
    updateAssociate,
    deleteAssociate
} = require('../controllers/associate.controller');

router.get('/api/associates', getAssociates);
router.get('/api/associates/:id', getAssociate);
router.post('/api/associates', createAssociate);
router.put('/api/associates/:id', updateAssociate);
router.delete('/api/associates/:id', deleteAssociate);

module.exports = router;