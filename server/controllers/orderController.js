const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { items, customer, total } = req.body;
    const order = await Order.create({ items, customer, total });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().limit(100);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
