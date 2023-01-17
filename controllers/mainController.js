const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/index.ejs'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/login.ejs'));
    },
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/productCart.ejs'));
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/productDetail.ejs'));
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname,'../views/register.ejs'));
    },
};

module.exports = controller
