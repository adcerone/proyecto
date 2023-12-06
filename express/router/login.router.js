const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const user = require('../public/models/user');
const passport = require('passport');

const uri = 'mongodb://localhost:27017/proyecto';

router.get('/', (req, res) => {
    res.send('Login Page');
});
/*----------------------login----------------------------------------- */
router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
}));

/*----------------------logout--------------------------------------- */

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

/*----------------------loged in user--------------------------------*/

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        // User is logged in
        res.json({ user: req.user });
    } else {
        // User is not logged in
        res.json({ user: null });
    }
});





module.exports = router