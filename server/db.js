const mongoose = require('mongoose');

const mongoAt = "mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoURI = "mongodb://localhost:27017/ashberry?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(mongoAt,()=>{
        console.log("connnected to Mongo Successfully")
    })

}

module.exports = connectToMongo;
