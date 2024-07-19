const Product = require('../models/productsSchema');

const getProducts = async (req, res) => {
    try {
        // Fetch products with the category 'living rooms'
        const products = await Product.find({ category: 'Living Room' });
        res.render('livingRooms', { products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

module.exports = {
    getProducts
};
