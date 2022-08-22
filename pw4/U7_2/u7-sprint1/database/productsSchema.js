const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        
    },
    price:{
        type:String,
        
    },
    image:{
        type:String,
        
    }
})

const my_net = new mongoose.Schema({
    name:{
        type:String,
        
    }
 });

//Model creating;


const Product = mongoose.model("product",productSchema);
const ipaddress = mongoose.model("ip",my_net);
//add midle wares if you want;

module.exports = {
    Product,
    ipaddress
};


