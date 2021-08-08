const mongoose = require("mongoose");
const employeeSchema=  new mongoose.Schema({

    fullname :{
        type : String,
    },

    username: {
        type : String,
    },

    email: {
    type : String,
    
    },

    password: {
        type : String,
    },

    cpassword: {
        type : String,
    },

    phoneno: {
        type : Number,
    }
})

const database = new mongoose.model("registration data", employeeSchema );

module.exports= database;