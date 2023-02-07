const fs = require("fs");
const path = require('path');
const moment = require('moment');

const productFilePath = path.join(__dirname, '../../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
let products = JSON.parse(productsJson);

const productController = {

    listDetail: function (req, res) {

        res.render('listDetail', { products })
    },

    createProduct: function (req, res) {
        res.render('createProduct', { products: products });
    },

    productDetail: function (req, res) {
        let product = products.find((product) => product.id == req.params.id);
        res.render('productDetail', { product });
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
            category: req.body.category ? req.body.category : productToEdit.category,
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

