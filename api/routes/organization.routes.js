const { Router } = require("express");
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
router.post('/api/organizations', createOrganization);
router.put('/api/organizations/:id', updateOrganization);
router.delete('/api/organizations/:id', deleteOrganization);

module.exports = router;