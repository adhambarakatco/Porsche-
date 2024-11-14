const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js');

module.exports = async function authenticationMiddleware(req, res, next) {
    // Get the authorization header
    const authHeader = req.headers['authorization'];

    // Check if the authorization header is provided
    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Split the authorization header to get the token
    const parts = authHeader.split(' ');

    // Check if the authorization header is in the correct format
    if (!parts.length === 2) {
        return res.status(403).json({ message: 'Token error' });
    }

    const [ scheme, token ] = parts;

    // Check if the authorization header starts with 'Bearer'
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(403).json({ message: 'Token malformatted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.user._id);
        if (!user) {
            return res.status(403).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
}