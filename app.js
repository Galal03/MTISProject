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

let asyncHooks;
try {
  asyncHooks = require('async_hooks');
} catch (e) {
  asyncHooks = null;
}



app.use(router)
const PORTS = [4001, 4002, 4003, 4004, 4005];
let currentPortIndex = 0;

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (currentPortIndex < PORTS.length - 1) {
        currentPortIndex++;
        console.log(`Port ${port} is in use. Falling back to port ${PORTS[currentPortIndex]}`);
        startServer(PORTS[currentPortIndex]);
      } else {
        console.error('All specified ports are in use. Cannot start server.');
        process.exit(1);
      }
    } else {
      console.error('Error starting server:', err);
      process.exit(1);
    }
  });
};

startServer(PORTS[currentPortIndex]);




