const User = require ('../database/user');

async function createUser(req,res,next){
const user = req.body;
    const userDoc = await User.create(user);

    return res.send({
        data:userDoc

    })

}

async function getAllUsers(req,res,next){

    const users = await User.find();

    return res.send({
        data:users
    })

}

module.exports={
    createUser,
    getAllUsers
}