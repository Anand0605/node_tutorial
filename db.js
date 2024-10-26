const mangoose = require('mangoose')
const { default: mongoose } = require('mongoose')

// define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'   //replace database name

// set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;