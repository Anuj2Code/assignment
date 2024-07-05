const mongoose = require('mongoose');

require('dotenv').config();

const connectToMongo = async()=>{
 await mongoose.connect(process.env.MONGO_URL).then(()=>{
     console.log('hello connect ho gaya');
 }).catch((err)=>{
   console.log(err);
 })
}

module.exports = connectToMongo;