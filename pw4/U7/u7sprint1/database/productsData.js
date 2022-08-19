const mongoose = require('mongoose');

const prductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    }

}) 

const my_net = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
 });

const Product = mongoose.model("product",prductSchema);
const ipaddress = mongoose.model("ip",my_net);
module.exports = {
    Product,
    ipaddress
};

