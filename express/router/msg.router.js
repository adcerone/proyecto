const express = require('express');
const router = express.Router();
const notifyOwner = require('../public/js/notifyFunction')


router.post('/api/send-message', (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  

    const newMessage = { name, email, message };
    messages.push(newMessage);
  
    notifyOwner(newMessage);
  
    res.status(200).json({ success: true });
  });


module.exports = router;
