const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/proyecto';

async function connectToDatabase() {
  try {

    await mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

module.exports = connectToDatabase;
