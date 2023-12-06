const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const user = require('../public/models/user');

const uri = 'mongodb://localhost:27017/proyecto';


//---------------GET------------------------//


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


router.get('/', ensureAuthenticated, async (req, res) => {
    let client;
  
    try {
      client = new MongoClient(uri);
      await client.connect();
  
      const database = client.db('proyecto');
      const collection = database.collection('users');

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        if (client) {
          try {
            await client.close();
          } catch (closeError) {
            console.error('Error closing MongoDB client:', closeError);
          }
        }
      }
      res.send('Dashboard Page');
});


//-----------------POST-----------------------//


router.post('/', async (req, res) => {

});


//------------------Patch-----------------------//

router.patch('/:id', async (req, res) => {


});


//-------------------DELETE--------------------//

router.delete('/:id', async (req, res) => {


});


module.exports = router