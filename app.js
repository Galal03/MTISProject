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
const PORT = 4001;
const fallbackPort = 4002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use. Falling back to port ${fallbackPort}`);
    app.listen(fallbackPort, () => {
      console.log(`Server is running on port ${fallbackPort}`);
    });
  } else {
    console.error('Error starting server:', err);
    process.exit(1);
  }
});





