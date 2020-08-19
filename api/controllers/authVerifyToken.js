const { config } = require('../config');
const jwt = require('jsonwebtoken');

function authVerifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.json({
            auth: false,
            message: 'No token provided'
        });
    }

    const decodedToken = jwt.verify(token, config.secret);
    req.userId = decodedToken.id;
    next();
}

module.exports = authVerifyToken;