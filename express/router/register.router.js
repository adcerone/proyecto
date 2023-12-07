const express = require('express');
const router = express.Router();
const User = require('../public/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', function (req, res) {
  let body = req.body;
  let { nombre, email, password, role } = body;
  let user = new User({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  });
user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
         ok: false,
         err,
      });
    }
    res.json({
          ok: true,
          user: userDB
       });
    })
});

module.exports = router;
