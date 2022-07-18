

const {Product,ipaddress} = require('../database/productsData');


async function getmeip (req,res,next){
    
        return res.send(
            "192.168.1.0")
    

   
}

async function postProductData(req,res,next){
    const {product:Data} = req.body;

    let product = new Product(Data)

    await product.save();

    return res.send({
        message: "product has been added"
    })
}
async function getallProducts(req, res, next) {
    const product = await Product.find();

    return res.send({
        data: product
    });
}
async function updateProduct(req, res, next) {
    const { product: data } = req.body;
    const { id: productId } = req.params;

    let products= await Product.findById(productId)

    for(const [key,value] of Object.entries(data)){
        products[key] = value;
    }

    await products.save();

    return res.send({
        message: "Product has been updated",
        data: products,
    });
};


async function deleteProduct(req, res, next) {
    const { id: productId } = req.params;

    await Product.findByIdAndDelete(productId);

    return res.send({
        message: "Product has been deleted."
    })
}


module.exports ={
    getmeip,
    postProductData,
    getallProducts,
    updateProduct,
    deleteProduct,

}