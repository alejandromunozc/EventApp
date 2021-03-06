const { config } = require('../config');
const jwt = require('jsonwebtoken');

function authVerifyToken(req, res, next) {
    const token = req.headers.accept;
    if (!token) {
        return res.json({ message: 'Invalid token' });
    }

    try {
        const decodedToken = jwt.verify(token, config.secret);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        req.tokenError = true;
        next();
    }

}

module.exports = authVerifyToken;