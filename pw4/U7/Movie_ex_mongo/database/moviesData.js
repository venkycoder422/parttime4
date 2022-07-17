const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    year:{
        type:String,
        required:true,
    },
})

//Model creating;


const Movie = mongoose.model("movies",movieSchema);

//add midle wares if you want;

module.exports = Movie;


