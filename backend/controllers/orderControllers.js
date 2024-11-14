const Order = require('../models/orderModel');

module.exports.placeOrder = async (req, res) => {
    const { products,userId } = req.body; // products should be an array of product IDs


    try {
        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: 'No products provided' });
        }

        const orders = await Promise.all(products.map(async (productId) => {
            const newOrder = new Order({ user: userId, product: productId });
            return await newOrder.save();
        }));

        res.status(201).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports.getOrders = async (req, res) => {
    const { userId } = req.body;

    try {
        const orders = await Order.find({ user: userId }).populate('product');
        let products = [];
        if (orders && Array.isArray(orders)) {
            products = orders.map(order => order.product);
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

