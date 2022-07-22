
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    
    content:String,
    user:{ // Normalized Approach
        type:mongoose.Types.ObjectId,
        ref:'User'
        },
    post:{ //De-Normalized
        title : String,
        id:mongoose.Types.ObjectId
    }
},{
    timestamp:true
})

const Comment = mongoose.model("Comment",commentSchema)

module.exports = Comment;