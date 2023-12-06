const express = require('express');
const router = express.Router();
const User = require('../public/models/user');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();
    console.log(`User registered with ID: ${newUser._id}`);
  } catch (error) {
    console.error('Registration failed:', error.message);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).send('Validation error: ' + error.message);
    }

    res.status(500).send('Registration failed');
  }
});

module.exports = router;
