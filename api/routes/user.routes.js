const { Router } = require("express");
const authVerifyToken = require('../controllers/authVerifyToken');
const router = Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    signupUser,
    dashboard
} = require('../controllers/user.controller');

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/users', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);
router.post('/api/login', loginUser);
router.post('/api/signup', signupUser);
router.get('/api/dashboard', authVerifyToken, dashboard);

module.exports = router;