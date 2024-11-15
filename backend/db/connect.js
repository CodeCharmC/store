const mongoose = require('mongoose')

const connectDB = async(url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB


/**MONGO_URL=mongodb+srv://moni:moni@store-manager.asthq.mongodb.net/?retryWrites=true&w=majority&appName=store-manager */