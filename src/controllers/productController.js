const fs = require("fs");
const path = require('path');
const { validationResult } = require("express-validator");
const Product = require("../services/Product");
const productFilePath = path.join(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
let products = JSON.parse(productsJson);
const db = require('../../database/models');

function writeFileJson(data) {
    const dataString = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), dataString)
}

const productController = {

    listDetail: function (req, res) {
        //console.log(products);
        res.render('listDetail', { products: products });
    },

    createProduct: function (req, res) {
        
        res.render('createProduct');
    },

    createProcess: function (req, res) {
        console.log(req.body);
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            console.log(resultValidation.mapped());
            return res.render("createProduct", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        let productInDB = Product.findByField("name", req.body.name);


        if (productInDB) {
            return res.render("createProduct", {
                errors: {
                    email: {
                        msg: "este producto ya esta registrado"
                    }
                },
                oldData: req.body
            });
        }

        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            description: req.body.description,
            //image: req.body.image,
            dificulty: req.body.dificulty,
            price: req.body.price,
            dateStart: req.body.dateStart,
            dateFinish: req.body.dateFinish,
        };

        products.push(newProduct);

        writeFileJson(products,null, ' ');

        res.redirect("/admin/listDetail");

    },
    productDetail: function (req, res) {
        let product = products.find((product) => product.id == req.params.id);
        res.render('productDetail', { product });
        /* if(product){
             res.render('productDetail', { product });
         }else{
             res.send("error 404");
         }*/
    },
    editProduct: function (req, res) {
        let productEdit = products.find((product) => product.id == req.params.id);

        res.render('editProduct', { product: productEdit });
    },
    update: function (req, res) {
        let indexToEdit;
        let productToEdit = products.find((product, index) => {
            if (product.id == req.params.id) {
                indexToEdit = index;
                return true;
            } else {
                return false;
            }
        });
        productToEdit = {
            ...productToEdit,
            name: req.body.name ? req.body.name : productToEdit.name,
            description: req.body.description ? req.body.description : productToEdit.description,
            image: req.body.image ? req.body.image : productToEdit.image,
            dificulty: req.body.dificulty ? req.body.dificulty : productToEdit.dificulty,
            price: req.body.price ? req.body.price : productToEdit.price,
            dateStart: req.body.dateStart ? req.body.dateStart : productToEdit.dateStart,
            dateFinish: req.body.dateFinish ? req.body.dateFinish : productToEdit.dateFinish,
        }
        products[indexToEdit] = productToEdit;
        console.log(products[indexToEdit])
        fs.writeFileSync(productFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },
    deleteProduct: function (req, res) {
        let productEdit = products.find((product) => product.id == req.params.id);
        res.render('deleteProduct', { product: productEdit });
    },
    delete: function (req, res) {
        const productsFiltered = products.filter((product) => product.id != req.params.id)
        fs.writeFileSync(productFilePath, JSON.stringify(productsFiltered, null, ' '));
    },
}

module.exports = productController;

