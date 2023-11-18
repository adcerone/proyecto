const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: {
        type: String,
        default: '../public/images/placeholderimg.png' 
    },
    isVegan: Boolean,
    isVeggie: Boolean,
    isTaccFree: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
