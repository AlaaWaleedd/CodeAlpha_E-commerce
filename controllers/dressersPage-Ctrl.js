const Product = require('../models/productsSchema');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: 'Dresser' });
        res.render('dressersPage', { products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

module.exports = {
    getProducts
};
