const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    note:{
        type:String,
        required:true,
    },
    label:{
        type:String,
        required:false,
    }
})

//Model creating;


const Note = mongoose.model("note",NotesSchema);

//add midle wares if you want;

module.exports = Note;


