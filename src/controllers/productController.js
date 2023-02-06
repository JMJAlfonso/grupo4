const fs = require("fs");
const path = require('path');

const productsJson = fs.readFileSync(path.join(__dirname, '../../data/products.json'), "utf-8");

const products = JSON.parse(productsJson);


const productController = {
    createProduct: function (req, res){
     res.render('createProduct', {products: products}); 
    },


}

module.exports = productController;

