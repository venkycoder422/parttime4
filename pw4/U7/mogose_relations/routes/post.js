const express = require('express');
const { getAllPost, createPost, getSinglePost, updatePost, deletePost } = require('../handlers/post');


const postRouter = express.Router();

postRouter.get('/posts/all',getAllPost);
postRouter.post('/post/create',createPost);
postRouter.get('/posts/:id',getSinglePost);
postRouter.patch('/posts/:id',updatePost);
postRouter.delete('/posts/:id',deletePost);


module.exports = postRouter;