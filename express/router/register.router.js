const express = require('express');
const router = express.Router();
const UserController = require('../public/components/controllers/userController.js'); 
const { MongoClient } = require('mongodb');
const User = require('../public/models/user.js');

const uri = 'mongodb://localhost:27017/proyecto';

router.post('/',  async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    let client;
  
    try {
      client = new MongoClient(uri);
      await client.connect();
  
      const database = client.db('proyecto');
      const collection = database.collection('users');
      const existingUser = await UserController.getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }

        const newUserInstance = new User({ email, password });
        const newUser = await UserController.createUser(newUserInstance);
        res.status(201).json({ message: 'User registered successfully', user: newUser });

    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        if (client) {
            await client.close();
        }
    }
});

module.exports = router;
