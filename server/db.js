const mongoose = require('mongoose');


// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
 const mongoAT = "mongodb+srv://aman:Kumar@321@cluster0.veuzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoAT,()=>{
        console.log("connnected to Mongo Successfully")
    })

}

module.exports = connectToMongo;




