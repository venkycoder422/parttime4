const Post = require('../database/post');

const Comment = require('../database/comment');

async function getAllPost (req,res,next){
    const {skip,limit} = req.query;

    const posts = await Post.find().skip(skip).limit(limit);

    return res.send({
        data:posts
    })
}

async function getSinglePost(req,res,next){
    const {id} = res.params;

    const post = await Post.findById(id);

    const comment = await Comment.find({
        post:{
            id:post._id
        }

        
    });
    post.comments= comments;

    return res.send({
        data:post
    })


}
async function createPost(res,req,next){
    const {post} = req.body;

    post = await Post.create(post);

    return res.send({
        data:post
    })


}


async function updatePost(res,req,next){
let {id} = req.params;
let {post : postData} = req.body;

let post = await Post.findById(id);

for(const [key, value] of Object.entries(postData)){
    post[key] = value;
}
await post.save();
return res.send({
    data:post
})
}

async function deletePost (res,req,next){
    const id = req.params;

    await Post.deleteById(id);

    return res.send({
        message:"Post has been Deletes"
    })


}

module.exports ={
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
}