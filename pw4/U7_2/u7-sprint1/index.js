const express = require('express');
const connectDataBase = require('./database/index');
const {Product,ipaddress} = require('./database/productsSchema');
const app = express();
// const dns = require('node:dns');


app.use(express.json());

function logger(req, res, next) {
    console.log(new Date(), req.method, req.path);
    next();
}

app.use(logger);

async function getmeip (req,res,next){
    const {data} = req.body;
    let address = new ipaddress(data);



        return res.send(
            "192.168.1.0",
        )
    

   
}

app.post(`/getmeip`,getmeip);




async function getData(req, res, next) {

    try {
        const products = await Product.find();
        res.send({
            products
        })

    } catch (error) {
        console.log(error)
    }


}
// getData();
app.get(`/products`, getData);

async function createData(req, res, next) {

    const { product: Data } = req.body;
    //console.log(Data);
    let product = new Product(Data)

    await product.save();

    return res.send({
        message: "Product has been added",
        product
    })
}

app.post(`/products/create`, createData);

async function updateProduct(req, res) {

    const { id } = req.params;
    const { product: Data } = req.body;
    const products = await Product.find();

    let index = 0;
    products.forEach((product, i) => {
        if (product._id == id) {
            index = i;
        }

    })
    
    products[index] = Data;
    

    return res.send({
        message: "Product Updated",
        products
    })


    

}

app.patch(`/products/:id`, updateProduct);



async function deleteProduct(req, res, next) {
    const { id: productId } = req.params;

    await Product.findByIdAndDelete(productId);

    return res.send({
        message: "Product has been deleted."
    })
}

app.delete(`/products/:id`, deleteProduct);

connectDataBase().then(() => {
    app.listen(7000, () => {
        console.log("Server running at http://localhost:3001")
    })
});




