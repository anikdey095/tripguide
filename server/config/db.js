const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async (uri) => {
  if (uri) {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected to', uri);
    return;
  }

  // Fallback: start an in-memory MongoDB for development/testing
  const mongod = await MongoMemoryServer.create();
  const memUri = mongod.getUri();
  await mongoose.connect(memUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB in-memory server started');
};

module.exports = connectDB;
