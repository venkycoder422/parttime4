const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    image:String,
    password:String,

},{
    timestamp:true
})

const User = mongoose.model("User",userSchema)

module.exports = User
