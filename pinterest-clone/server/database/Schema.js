const mongoose = require('mongoose');

const pinSchema = new mongoose.Schema({
 
    title:{
        type:String,
    
    },
    video:{
        type:String
    },
    image:{
        type:String
    }
    
})

//Model creating;


const Pin = mongoose.model("pin",pinSchema);



module.exports = Pin;

