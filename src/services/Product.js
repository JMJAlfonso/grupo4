const fs = require("fs");
const path = require("path");
const db = require('../../database/models');

const Product = {
    activity_images: function(id){
       const images =  db.activity_images.findAll({ where: { activities_id: id } })
        return images;
    },
    filename: function(){
        productFilePath = path.join(__dirname, '../data/products.json')
        return productFilePath;
    },
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename(), "utf-8"));
    },

    generateId: function (){
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneUser => oneUser.id === id);
        return productFound;
    },

    findByField: function (field, text) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneUser => oneUser[field] === text);
        return productFound;
    },

    create: function (productData) {
        let allProducts = this.findAll();
        let newUser = {
          id: this.generateId(),
          ...productData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.filename(), JSON.stringify(allProducts, null, " "));
        return newProduct;
    },

    delete: function (id) {
        let allProducts = this.findAll();
        let finalProduct = allProducts.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalProduct, null, " "));
        return true;
    }

}

module.exports = Product;