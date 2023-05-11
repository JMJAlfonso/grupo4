const db = require('../../../database/models');

const controller = {
    list: async (req, res) => {
        try {
            const products = await db.Dificulties.findAll();

            const response = {
                meta: {
                    count: products.length
                },
                data: products
            }
            return res.json(response);
        } catch (error) {
            return res.send(error);
        }
    },
    getById: async (req, res) => {
        try {
            let product = await db.Dificulties.findAll();
         
            return res.json(product);
        } catch (error) {
            return res.send(error);
        }
    }

}

module.exports = controller;