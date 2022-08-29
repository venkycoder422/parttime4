const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    taskname:{
        type:String,
    
    },
    status:{
        type:String
    },
    tag:{
        type:String
    }
    
})

//Model creating;


const Todo = mongoose.model("todo",todoSchema);



module.exports = Todo;


