const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const Product = require('../public/models/product');

const uri = 'mongodb://localhost:27017/proyecto';

//--------------get-----------//
router.get('/', async (req, res) => {
    let client;
  
    try {
      client = new MongoClient(uri);
      await client.connect();
  
      const database = client.db('proyecto');
      const collection = database.collection('products');
  
      const products = await collection.find({}).toArray();
  
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
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
  });
//-------------------post-------------------//
  router.post('/', async (req, res) => {
    try {
      const { name, description, price, image, isVegan, isVeggie, isTaccFree } = req.body;
  
      const newProduct = new Product({
        name,
        description,
        price,
        image,
        isVegan,
        isVeggie,
        isTaccFree,
      });
  
      await newProduct.save();
  
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //--------------------------patch--------------------------//

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProductData = req.body;
  
      const updatedProduct = await Product.findByIdAndUpdate(id, updatedProductData, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //--------------------------delete--------------------//

  
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(deletedProduct);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router


