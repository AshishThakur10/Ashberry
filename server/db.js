const mongoose = require('mongoose');


const mongoAt = "mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoURI = "mongodb://localhost:27017/ashberry?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoAT1 = "mongodb+srv://aman:Kumar@321@cluster0.veuzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoAt,{
        dbName: 'Ashberry',
        userNewUrlParse : true,
        useUnifiedTopology: true
    }).then(()=> {
        console.log("connnected to MongoDB Successfully")
    });

}

module.exports = connectToMongo;




