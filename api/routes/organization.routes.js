const { Router } = require("express");
const authVerifyToken = require('../controllers/authVerifyToken');
const router = Router();
const {
    getOrganizations,
    getOrganization,
    createOrganization,
    updateOrganization,
    deleteOrganization
} = require('../controllers/organization.controller');

router.get('/api/organizations', getOrganizations);
router.get('/api/organizations/:id', getOrganization);
router.post('/api/organizations', authVerifyToken, createOrganization);
router.put('/api/organizations/:id', authVerifyToken, updateOrganization);
router.delete('/api/organizations/:id', authVerifyToken, deleteOrganization);

module.exports = router;