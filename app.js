require('dotenv').config(); 
const connectDB = require('./backend/db/connect');

//2nd: require express and create app
const express = require('express');
const app = express(); 

//4th: import middleware for error handling and not found
const notFound = require('./backend/middleware/not-found');
const errorHandlerMiddleware = require('./backend/middleware/error-handler');

//3rd: use middleware to handle json data
app.use(express.json());

const port = process.env.PORT || 3000;
const start = async () => {
   try {
      //1th: connect to the database
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => {
         console.log(`Server is listening on port ${port}...`);
      });
   } catch (error) {
      console.log(error);
   }
};

start();