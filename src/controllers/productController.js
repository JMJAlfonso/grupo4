const fs = require("fs");
const path = require('path');

const productFilePath = path.join(__dirname, '../../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
let products = JSON.parse(productsJson);

const productController = {

    createProduct: function (req, res){
        //console.log(products);

       res.render('createProduct'); 
    },
    editProduct: function (req, res){
        const idProductEdit = req.params.id;
        let productEdit = products.find((product)=> product.id ==idProductEdit);
        console.log(productEdit);
       res.render('editProduct',{product:productEdit}); 
    },
    saveEditProduct: function(req,res){
        let productEdited = req.body;        
        products.forEach(function(product){
            if(product.id == productEdited.id){
                product.name = productEdited.name;
                product.description = productEdited.description;
            }
                
                    
                
        });
                        
        let productsJson = JSON.stringify(products);
        fs.writeFileSync(productFilePath,productsJson);
        res.redirect('/');
    }
}

module.exports = productController;

