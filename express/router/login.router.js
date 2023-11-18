const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const Product = require('../public/models/user');

const uri = 'mongodb://localhost:27017/proyecto';


router.post('/', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true,
  }));