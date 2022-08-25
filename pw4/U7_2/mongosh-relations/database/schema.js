const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    posttitle:{
        type:String,
        
    },
    comments:{
        type:String,
        
    },
    body:{
        type:String,
        
    },
    id:{
        type:Number,
    }
});

const users = new mongoose.Schema({
    username:{
        type:String,
    },
    postname:{
        type:String,
    },
    comments:{
        type:String,
    },
})

const category = new mongoose.Schema({

})

const comments = new mongoose.Schema({
    postname:{
        type:String,
    },
    discription:{
        type:String,
    },
})

const likes = new mongoose.Schema({
    postname:{
        type:String,
    },
    numberofLikes:{
        type:Number
    }
})
//Model creating;


const Blog = mongoose.model("blog",blogSchema);
const User = mongoose.model("user",users);
const Category = mongoose.model("category",category);
const Comments = mongoose.model("comment",comments);
const Likes = mongoose.model("like",likes);

//add midle wares if you want;

module.exports = {
Blog,
User,
Category,
Comments,
Likes,
    
};


