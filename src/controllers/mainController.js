const path = require('path');
const fs = require('fs');
const productFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));
const messageFilePath = path.join(__dirname, '../data/messageUsers.json');
let messagesUsersJSON = fs.readFileSync(messageFilePath,'utf-8');
let messagesUsers = JSON.parse(messagesUsersJSON);
const db = require('../../database/models');
const productMethods = require('../services/Product')

//Se deja listo index como ejemplo para trabajar con la base de datos

const controller = {
    index: async (req, res) => {        
        //res.render('index', {products: products});
        try {  
            const products = await db.Activity.findAll(); 
            const images = await db.Activity_image.findAll();   
            res.render('index',{products,images})
        } catch (error) {
            res.send(error);
        } 
    },
    indexForm: (req, res) => {
        let newMessage = req.body;        
        messagesUsers.push(newMessage);
                
        let messagesUsersJson = JSON.stringify(messagesUsers,null,' ');
        fs.writeFileSync(messageFilePath,messagesUsersJson);
        res.redirect('/');
    },    
    productsDetail: /* async */ (req, res) => {
        res.render('productsDetail', { products: products });
         /*try {  
            const products = await db.mydb.findAll();   
            res.render('index',{products})
        } catch (error) {
            res.send(error);
        } */
    },
    productDetail: /* async */ (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render('productDetail', { product });
        /*try {  
            const product = await db.mydb.findByPK(req.params.id);   
            res.render('index',{product})
        } catch (error) {
            res.send(error);
        } */
    },    
    createProduct: (req, res) => {
        res.render('createProduct');
    },
    editProduct: (req, res) => {
        res.render('editProduct');
    },
    us: (req, res) => {
        res.render('us');
    },
    listDetail: (req, res) => {
        res.render('listDetail');
    },
};

module.exports = controller;
