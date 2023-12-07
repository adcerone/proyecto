const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin1:155525449@01.simycuz.mongodb.net/';

async function connectToDatabase() {
  try {

    await mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

module.exports = connectToDatabase;
