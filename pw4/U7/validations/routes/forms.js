const express = require('express');
const { userForm } = require('../handler/userform');



const userRouter = express.Router();

userRouter.post(`/users`,userForm);


module.exports = userRouter;
