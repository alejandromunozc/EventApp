const { Router } = require("express");
//const authVerifyToken = require('../middlewares/authVerifyToken');
const bufferImg = require('../middlewares/bufferImg');
const s3Upload = require('../middlewares/s3Upload');
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

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/users', bufferImg, s3Upload, createUser);
router.put('/api/users/:id', bufferImg, s3Upload, updateUser);
router.delete('/api/users/:id', deleteUser);
router.post('/api/login', loginUser);
router.post('/api/signup', bufferImg, s3Upload, signupUser);

module.exports = router;