require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/Product');

const data = [
  { name: 'Handwoven Shawl', description: 'Soft local shawl', price: 1200, stock: 10, image: '' },
  { name: 'Tea Garden Tour', description: 'Guided tour package', price: 3000, stock: 20, image: '' },
  { name: 'Sylhet Spice Mix', description: 'Local spices pack', price: 450, stock: 50, image: '' }
];

const seed = async () => {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/ecom');
  await Product.deleteMany();
  await Product.insertMany(data);
  console.log('Seed complete');
  process.exit(0);
};

seed().catch((err) => { console.error(err); process.exit(1); });
