const express = require('express');
const router = express.Router();
const Cart = require('../public/models/cart');
const Product = require('../public/models/product');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authenticateUser = require('../public/components/authenticate/authenticateUser');


// Get user's cart
router.get('/', authenticateUser, async (req, res) => {
  try {
    const userCart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    res.json(userCart);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add item to the cart
router.post('/add', authenticateUser, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cart = await Cart.findOne({ user: req.user._id });

    // Check if the product is already in the cart
    const existingItem = cart.items.find(item => item.product.equals(productId));

    if (existingItem) {
      // If the product already exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product is not in the cart, add a new item
      cart.items.push({
        product: productId,
        quantity: quantity,
        price: product.price * quantity,
      });
    }

    // Update the total price in the cart
    cart.totalPrice = cart.items.reduce((total, item) => total + item.price, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Remove item from the cart
router.post('/remove', authenticateUser, async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });

    // Filter out the item to be removed
    cart.items = cart.items.filter(item => !item.product.equals(productId));

    // Update the total price in the cart
    cart.totalPrice = cart.items.reduce((total, item) => total + item.price, 0);

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Clear the entire cart
router.post('/clear', authenticateUser, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
