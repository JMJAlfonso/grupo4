const fs = require("fs");
const path = require('path');
const { validationResult } = require("express-validator");
const Product = require("../services/Product");
const productFilePath = path.join(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
//let products = JSON.parse(productsJson);
const db = require('../../database/models');


function writeFileJson(data) {
    const dataString = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), dataString)
}

const productController = {

    listDetail: async function (req, res) {
        //console.log(products);
        //res.render('listDetail', { products: products });
        try {
            const products = await db.Activity.findAll();            
            res.render('listDetail', { products })
        } catch (error) {
            res.send(error);
        }
    },

    createProduct: function (req, res) {

        res.render('createProduct');
    },

    createProcess: async function (req, res) {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            console.log(resultValidation.mapped());
            return res.render("createProduct", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        try {
            const productInDB = await db.Activity.findOne({ where: { name: 'req.body.name' } });

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
            const newDificulty = {
                name: req.body.dificulty
            }

            const newD = await db.Dificulty.create(newDificulty);

            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                dateStart: req.body.dateStart,
                dateFinish: req.body.dateFinish,
                dificulties_id: newD.id,
            };
            const newProd = await db.Activity.create(newProduct);

            const newImage = {
                name: upload.single('image'),
                activities_id: newProd.id
            }
            console.log(req.body.image);
            const newImg = await db.Activity_image.create(newImage);
            return res.redirect("/admin/listDetail");
        } catch (error) {
            res.send(error);
        }

        //let productInDB = Product.findByField("name", req.body.name);


        // products.push(newProduct);

        // writeFileJson(products,null, ' ');



    },
    productDetail: async function (req, res) {
        //let product = products.find((product) => product.id == req.params.id);
        //res.render('productDetail', { product });
        try {
            const product = await db.Activity.findByPk(req.params.id);
            res.render('productDetail', { product })
        } catch (error) {
            res.send(error);
        }

    },
    editProduct: async function (req, res) {
        //let productEdit = products.find((product) => product.id == req.params.id);
        try {
            const productToEdit = await db.Activity.findByPk(req.params.id);
            res.render('editProduct', { product: productToEdit })
        } catch (error) {
            res.send(error);
        }

        //res.render('editProduct', { product: productEdit });
    },
    update: async function (req, res) {
        try {
            const productToEdit = await db.Activity.findByPk(req.params.id);
            productToEdit = await db.Activity.update({
                ...productToEdit,
                name: req.body.name ? req.body.name : productToEdit.name,
                description: req.body.description ? req.body.description : productToEdit.description,
                image: req.body.image ? req.body.image : productToEdit.image,
                dificulty: req.body.dificulty ? req.body.dificulty : productToEdit.dificulty,
                price: req.body.price ? req.body.price : productToEdit.price,
                dateStart: req.body.dateStart ? req.body.dateStart : productToEdit.dateStart,
                dateFinish: req.body.dateFinish ? req.body.dateFinish : productToEdit.dateFinish,
            }, { where: { id: 'req.params.id' } });
            return res.redirect('/');
        } catch (error) {
            res.send(error);
        }

        // let indexToEdit;
        // let productToEdit = products.find((product, index) => {
        //     if (product.id == req.params.id) {
        //         indexToEdit = index;
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });

        // productToEdit = {
        //     ...productToEdit,
        //     name: req.body.name ? req.body.name : productToEdit.name,
        //     description: req.body.description ? req.body.description : productToEdit.description,
        //     image: req.body.image ? req.body.image : productToEdit.image,
        //     dificulty: req.body.dificulty ? req.body.dificulty : productToEdit.dificulty,
        //     price: req.body.price ? req.body.price : productToEdit.price,
        //     dateStart: req.body.dateStart ? req.body.dateStart : productToEdit.dateStart,
        //     dateFinish: req.body.dateFinish ? req.body.dateFinish : productToEdit.dateFinish,
        // }
        // products[indexToEdit] = productToEdit;
        // console.log(products[indexToEdit])
        // fs.writeFileSync(productFilePath, JSON.stringify(products, null, ' '));
        // res.redirect('/');
    },
    delete: async function (req, res) {
        try {
            const product = await db.Activity.findByPk(req.params.id);
            res.render('deleteProduct', { product })
        } catch (error) {
            res.send(error);
        }
        // let productEdit = products.find((product) => product.id == req.params.id);
        // res.render('deleteProduct', { product: productEdit });
    },
    destroy: async function (req, res) {
        try {
            await db.Activity.destroy({ where: { id: req.params.id } });

            res.redirect('/admin/listDetail')
        } catch (error) {
            res.send(error);
        }

        //  const productsFiltered = products.filter((product) => product.id != req.params.id)
        // fs.writeFileSync(productFilePath, JSON.stringify(productsFiltered, null, ' '));
        // res.redirect('/');
    },
}

module.exports = productController;

