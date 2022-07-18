const express = require('express');

const { 
    getmeip,
    postProductData,
    getallProducts,
    updateProduct,
    deleteProduct,} = require('../handlers/products');

const productRouter = express.Router();
productRouter.post(`/getmeip`,getmeip);
productRouter.post(`/products/create`,postProductData);
productRouter.get(`/products`,getallProducts);
productRouter.patch(`/products/:id`,updateProduct);
productRouter.delete(`/products/:id`,deleteProduct);



module.exports= productRouter;