const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../public/models/user');

// Middleware to check authentication
const authenticateToken = async (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            ok: false,
            isAuthenticated: false,
            err: {
                message: 'Authorization token not provided or in invalid format',
            },
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        if (!token) {
            throw new Error('Authorization token not provided');
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourSecretKeyForTesting');

        const user = await User.findById(decoded.user._id);

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user; // Attach the user to the request for future use
        next();
    } catch (error) {
        console.error('Error checking authentication:', error);
        res.status(401).json({
            ok: false,
            isAuthenticated: false,
            err: {
                message: error.message || 'Invalid token',
            },
        });
    }
};

// Protected route that requires authentication
router.get('/', authenticateToken, (req, res) => {
    res.json({
        ok: true,
        isAuthenticated: true,
        user: req.user, // Access the user from the request
    });
});

module.exports = router;
