const fs = require("fs");
const path = require('path');

const productFilePath = path.join(__dirname, '../../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
let products = JSON.parse(productsJson);

const productController = {

    createProduct: function (req, res){
     res.render('createProduct', {products: products}); 
    },
        
    productDetail: function (req, res){        
       let product = products.find((product)=> product.id ==req.params.id);        
       res.render('productDetail',{product}); 
    },
    editProduct: function (req, res){        
       let productEdit = products.find((product)=> product.id ==req.params.id);        
       res.render('editProduct',{product:productEdit}); 
    },
    update: function(req,res){
       let indexToEdit;
       let productToEdit = products.find((product,index) => {
        if (product.id == req.params.id){
            indexToEdit =index;
            return true;
        }else{
            return false;
        }
         });       
       productToEdit = {
        ...productToEdit,
        ...req.body
       }              
        products[indexToEdit] = productToEdit;  
        console.log(products[indexToEdit])       
        fs.writeFileSync(productFilePath,JSON.stringify(products,null,' '));
        res.redirect('/');
    },
    deleteProduct: function (req, res){        
        let productEdit = products.find((product)=> product.id ==req.params.id);        
        res.render('deleteProduct',{product:productEdit}); 
     },
    delete:function(req,res){
        const productsFiltered = products.filter((product)=>product.id != req.params.id) 
        fs.writeFileSync(productFilePath,JSON.stringify(productsFiltered,null,' '));
    },
}

module.exports = productController;

