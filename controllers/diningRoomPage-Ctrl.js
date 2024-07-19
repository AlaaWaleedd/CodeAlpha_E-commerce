const Product = require('../models/productsSchema');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ category: 'Dining Room' });
        res.render('diningRooms', { products });
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

module.exports = {
    getProducts
};
