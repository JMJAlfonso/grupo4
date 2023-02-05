const path = require('path');
const fs = require('fs');

const productFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));
const messageFilePath = path.join(__dirname, '../../data/messageUsers.json');
let messagesUsersJSON = fs.readFileSync(messageFilePath,'utf-8');
let messagesUsers = JSON.parse(messagesUsersJSON);




const controller = {
    index: (req, res) => {
        res.render('index', {products: products});
    },
    indexForm: (req, res) => {
        let newMessage = req.body;        
        messagesUsers.push(newMessage);
                
        let messagesUsersJson = JSON.stringify(messagesUsers);
        fs.writeFileSync(messageFilePath,messagesUsersJson);
        res.redirect('/');
    },
    login: (req, res) => {
        res.render('login');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {

        res.render('productDetail');
    },
    register: (req, res) => {
        res.render('register');
    },
    loadAndEdit: (req, res) => {
        res.render('loadAndEdit');
    },
    us: (req, res) => {
        res.render('us');
    },
    listDetail: (req, res) => {
        res.render('listDetail');
    },
};

module.exports = controller;
