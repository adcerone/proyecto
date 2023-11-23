const mongodb = require('./mongodb');
const Product = require('../models/product');



async function main() {
    const addProduct = new Product({
        name: 'plato01',
        description: 'descripcion del plato01',
        price: 1,
        image: '...',
        isVegan: false,
        isVeggie: false,
        isTaccFree: false,
    });

    try {
        const productSave = await addProduct.save();
        console.log(productSave);
    } catch (err) {
        console.error(err);
    }
}

main();
