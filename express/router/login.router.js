const express = require('express');
const router = express.Router();
const User = require('../public/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Assuming you have a MongoDB connection somewhere in your code

router.post('/', function (req, res) {
    let body = req.body;

    User.findOne({ email: body.email }, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            });
        }

        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            });
        }

        // Replace process.env.SEED_AUTENTICACION with a hardcoded secret for testing
        const secretKey = process.env.JWT_SECRET || 'yourSecretKeyForTesting';

        let token = jwt.sign({
            user: userDB,
        }, secretKey, {
            expiresIn: process.env.CADUCIDAD_TOKEN || '1h' // Set a default expiration if not provided
        });

        res.json({
            ok: true,
            user: userDB,
            token,
        });
    });
});

module.exports = router;
