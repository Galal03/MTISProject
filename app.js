const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./routes/mainroutes')
const mongoose= require("mongoose")
const User = require("./models/person")

app.set('view engine','ejs')

app.use(express.static(path.join('public')))
app.use(express.urlencoded({extended:true}))


const uri='mongodb+srv://mtisacc12:mtis12345678@mtisdb.dyciyln.mongodb.net/MTISDB';

async function connect() {
try{
    await mongoose.connect(uri)
    console.log("connected to MongoDb");
} catch (error) {
    console.error(error)
}

}
connect();





app.use(router)







app.listen(3000,()=>{
    console.log('server is running...')
})




