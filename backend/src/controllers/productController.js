const fs = require("fs");
const path = require('path');
const { validationResult } = require("express-validator");
const Product = require("../services/Product");
const productFilePath = path.join(__dirname, '../data/products.json');
const productsJson = fs.readFileSync(productFilePath, "utf-8");
//let products = JSON.parse(productsJson);
const db = require('../../database/models');
const { where } = require("sequelize");



function writeFileJson(data) {
    const dataString = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, '../data/products.json'), dataString)
}

const productController = {

    listDetail: async function (req, res) {
        try {
            const products = await db.Activities.findAll({ include: ['dificulties', 'activity_images'] });
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
            return res.render("createProduct", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        try {
            const productInDB = await db.Activities.findOne({ where: { name: 'req.body.name' } });

            if (productInDB) {
                return res.render("createProduct", {
                    errors: {
                        name: {
                            msg: "este producto ya esta registrado"
                        }
                    },
                    oldData: req.body
                });
            }
            const newDificulty = {
                name: req.body.dificulty
            }

            const newD = await db.Dificulties.findOne(newDificulty);

            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                dateStart: req.body.dateStart,
                dateFinish: req.body.dateFinish,
                dificulties_id: newD.id,
            };

            const newActivity = await db.Activities.create(newProduct);
            await db.Activity_images.create({
                name: req.file.filename,
                activities_id: newActivity.id
            }
            )
            return res.redirect("/admin/listDetail");
        } catch (error) {
            res.send(error);
        }

    },
    productDetail: async function (req, res) {

        try {
            const product = await db.Activities.findByPk(req.params.id);
            res.render('productDetail', { product })
        } catch (error) {
            res.send(error);
        }

    },
    editProduct: async function (req, res) {

        try {
            const productToEdit = await db.Activities.findByPk(req.params.id, { include: ['activity_images', 'dificulties'] });
            res.render('editProduct', { product: productToEdit })
        } catch (error) {
            res.send(error);
        }


    },
    update: async function (req, res) {
        try {
            const productToEdit = await db.Activities.findByPk(req.params.id, { include: ['activity_images', 'dificulties'] });

            await db.Dificulties.update({
                name: req.body.dificulties ? req.body.dificulties : productToEdit.dificulties.name
            }, { where: { id: req.params.id } })

            await db.Activity_images.update({
                name: req.file?.filename ? req.file.filename : productToEdit.activity_images[0].name,
            }, { where: { id: req.params.id } })

            await db.Activities.update({
                name: req.body.name ? req.body.name : productToEdit.name,
                description: req.body.description ? req.body.description : productToEdit.description,
                price: req.body.price ? req.body.price : productToEdit.price,
                dateStart: req.body.dateStart ? req.body.dateStart : productToEdit.dateStart,
                dateFinish: req.body.dateFinish ? req.body.dateFinish : productToEdit.dateFinish,

            }, { where: { id: req.params.id } });
            return res.redirect('/');
        } catch (error) {
            res.send(error);
        }


    },
    delete: async function (req, res) {
        try {
            const product = await db.Activities.findByPk(req.params.id, { include: ['activity_images', 'dificulties'] });
            res.render('deleteProduct', { product })
        } catch (error) {
            res.send(error);
        }

    },
    destroy: async function (req, res) {
        try {
            //const productImage = await db.Activity_images.findAll({ where: { activities_id: 'req.params.id' } });


            // console.log(productImage);
            // const path = './images/products/'+productImage.name;           

            // fs.unlink(path, (err) => {
            //     if (err) {
            //         console.error(err)
            //         return
            //     }

            //     //file removed
            //})
            await db.Activities.destroy({ where: { id: req.params.id } });

            res.redirect('/admin/listDetail')
        } catch (error) {
            res.send(error);
        }

    },
}

module.exports = productController;

