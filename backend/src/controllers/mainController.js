const path = require('path');
const fs = require('fs');
const productFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
const messageFilePath = path.join(__dirname, '../data/messageUsers.json');
let messagesUsersJSON = fs.readFileSync(messageFilePath, 'utf-8');
let messagesUsers = JSON.parse(messagesUsersJSON);
const db = require('../../database/models');
const productMethods = require('../services/Product')

//Se deja listo index como ejemplo para trabajar con la base de datos

const controller = {
    index: async (req, res) => {
       
        try {
            const products = await db.Activities.findAll({ include: 'activity_images' });           
            res.render('index', { products })
        } catch (error) {
            res.send(error);
        }
    },
    indexForm: (req, res) => {
        let newMessage = req.body;
        messagesUsers.push(newMessage);

        let messagesUsersJson = JSON.stringify(messagesUsers, null, ' ');
        fs.writeFileSync(messageFilePath, messagesUsersJson);
        res.redirect('/');
    },
    productsDetail:  async  (req, res) => {       
        try {  
           const products = await db.Activities.findAll({ include: ['dificulties', 'activity_images'] });   
           res.render('productsDetail',{products})
       } catch (error) {
           res.send(error);
       } 
    },
    productDetail:  async  (req, res) => {        
        try {  
            const product = await db.Activities.findByPk(req.params.id,{ include: ['dificulties', 'activity_images'] });   
            res.render('productDetail',{product})
        } catch (error) {
            res.send(error);
        } 
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
