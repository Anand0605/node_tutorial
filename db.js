const mongoose = require('mongoose')
require('dotenv').config();


// define mongodb connection url
// const mongoURL = 'mongodb://localhost:27017/hotels'   //replace database name
// const mongoURL = process.env.MONGO_URL_LOCAL
const mongoURL = process.env.MONGO_URL
// console.log(mongoURL)

// set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the default connetion
// mongoose maintain a default connetion object represent the mongoDb connection 
const db = mongoose.connection;
// defined event listener database connetion
db.on('connected',()=>{
console.log("connected to mongodb server")
})
db.on('error',(err)=>{
console.log("connection to mongodb server error".err)
})
db.on('disconnected',()=>{
console.log("disconnected to mongodb server")
})

// export the database connection
module.exports = db;