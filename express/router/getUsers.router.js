const express = require('express');
const router = express.Router();
const UserController = require('../public/components/controllers/userController.js'); 
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/proyecto';

router.get('/', async (req, res) => {
    let client;
  
    try {
      client = new MongoClient(uri);
      await client.connect();
  
      const database = client.db('proyecto');
      const collection = database.collection('users');
      const users = await UserController.getAllUsers();
  
      res.status(200).json({ users });
  
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
