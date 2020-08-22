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
    signupUser
} = require('../controllers/user.controller');

router.get('/api/users', authVerifyToken, getUsers);
router.get('/api/users/:id', authVerifyToken, getUser);
router.post('/api/users', createUser);
router.put('/api/users/:id', authVerifyToken, updateUser);
router.delete('/api/users/:id', authVerifyToken, deleteUser);
router.post('/api/login', loginUser);
router.post('/api/signup', signupUser);

module.exports = router;