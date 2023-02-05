const fs = require("fs");
const path = require('path');

const productsJson = fs.readFileSync(path.join(__dirname, '..data/products.json'), "utf-8");

const products = JSON.parse(productsJson);


const productController = {
    list: function (req, res){
        console.log(products);

       res.render('listDetail'); 
    }
}

module.exports = productController;


