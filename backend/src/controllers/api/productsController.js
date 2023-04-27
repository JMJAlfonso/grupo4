const db = require('../../../database/models');

const controller = {
    products: async (req, res) => {
        try {
            const Products = await db.Activities.findAll({ attributes: ['id', 'name', 'description'] } );
                        
            Products.map((product, index) => {
                Products[index] = {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    detail: `api/products/${product.id}`
                }
            })
            const cantidad = {
                count: Products.length
            }
            Products.unshift(cantidad);
            return res.json(Products);
        } catch (error) {
            return res.send(error);
        }
    },
    product: async (req, res) => {
        try {
            let Activity = await db.Activities.findOne({ include: ['dificulties', 'activity_images'] }, { where: { id: req.params.id } });
            Activity = {
                id: Activity.id,
                name: Activity.name,
                description: Activity.description,
                price: Activity.price,
                dateStart: Activity.dateStart,
                dateFinish: Activity.dateFinish,
                dificulty: Activity.dificulties.name,
                image: Activity.activity_images.name
            }
            return res.json(Activity);
        } catch (error) {
            return res.send(error);
        }
    }

}

module.exports = controller;