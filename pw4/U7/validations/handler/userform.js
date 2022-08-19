
const User = require('../database/form');

function userForm(res,req,next){
const {data} = req.body;
    const result= await User.create(data);

    return res.send({
            data:result
    })

}

module.exports={
    userForm
}