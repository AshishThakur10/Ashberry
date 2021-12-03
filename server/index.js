const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.port || 4000
app.use(cors())
app.use(express.json())
const authRoute = require("./routes/auth")

//Available Routes
app.use('/api/auth', authRoute) 

app.get('/',function(req,res){res.send('welcome to the server')})

app.post('/login',(req,res)=>{
    res.send('it working')
})







app.listen(port, () => {
  console.log(`ashberry backend listening at http://localhost:${port}`)
})
