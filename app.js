//1st: connect to the database
require('dotenv').config(); 
const connectDB = require('./backend/db/connect');

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