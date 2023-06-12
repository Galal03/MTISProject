const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String 
    },
    dob:{
        type: Date
    }, 
    MAJORS:{
        type: String
    },
    
    
    GPA:{
        type: Number
    }, 
    email:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: Number
    }, 
    snphone:{
        type: Number
    }, 

})

const User = mongoose.model('User',userSchema)

module.exports = User