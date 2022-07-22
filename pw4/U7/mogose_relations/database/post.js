
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    user:{ // Normalized Approach
    type:mongoose.Types.ObjectId,
    ref:'User'
    }
},{
    timestamp:true
})

const Post = mongoose.model("Post",postSchema);

module.exports = Post;