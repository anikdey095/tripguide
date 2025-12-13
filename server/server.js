require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const path = require('path');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/ecom')
  .then(() => {
    app.use('/api/auth', authRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/orders', orderRoutes);

    // Serve client in production (expects client build at ../client/dist)
    if (process.env.NODE_ENV === 'production') {
      const clientDist = path.join(__dirname, '..', 'client', 'dist');
      app.use(express.static(clientDist));
      app.get('*', (req, res) => {
        res.sendFile(path.join(clientDist, 'index.html'));
      });
    }

    app.get('/', (req, res) => res.send('E‑commerce API running'));

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err.message);
    process.exit(1);
  });
