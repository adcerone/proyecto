const router = require('express').Router();
const Product = require('../public/models/product');

/*
router.get('/api/', (req, res, next) => {
    try {
        res.json({ home });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/contact', (req, res, next) => {
    try {
        res.json({ contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/aboutUs', (req, res, next) => {
    try {
        res.json({ aboutUs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/misc', async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/api/addProduct', async (req, res) => {
    try {
        const addProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            isVegan: req.body.isVegan === 'on',
            isVeggie: req.body.isVeggie === 'on',
            isTaccFree: req.body.isTaccFree === 'on',
        });

        const productSave = await addProduct.save();
        console.log('Product saved:', productSave);
        res.status(201).json(productSave);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/login', async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ login });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/api/login', function (req, res, next) {
    const username = req.body.username;
    let loginResult = login(username, req.body.password);
    if (loginResult) {

    } else {
        res.render('index', { error: true });
    }
});
*/

router.get('/api/menu', async (req, res) => {
    try {
        console.log('Request to /api/menu received');
        const products = await Product.find();
        res.json({ products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
