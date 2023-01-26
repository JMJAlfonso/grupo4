const path = require('path');
const fs = require('fs');

const productFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('index', {products: products});
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
};

module.exports = controller;
