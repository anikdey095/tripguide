const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: { type: Number },
  status: { type: String, default: 'pending' },
  customer: {
    name: String,
    email: String,
    address: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
