//we will create a schema for our database

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username :{
        type:String,
        unique:[true,"username already taken"],
        required:true,
    },

    email :{
        type:String,
        unique:[true,"Account already exists with this email address"],
        require:true,
    },
    password:{
        type:String,
        required:true
    }
})

//mogoose pacakge that check where my user data saved in which collections
//method name is mongoose.model("users")

const userModel = mongoose.model("users",userSchema);

module.exports = userModel


// 20:15