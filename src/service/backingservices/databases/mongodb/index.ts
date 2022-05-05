import mongoose from 'mongoose';


const {
  CREDENTIALS_BACKING_DB_MONGO_URI = 'mongodb://localhost:27017/test',
} = process.env;


const videoDB = mongoose.createConnection(CREDENTIALS_BACKING_DB_MONGO_URI);


export {
  videoDB,
};
