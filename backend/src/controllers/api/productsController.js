const db = require('../../../database/models');

const controller = {
    products: async (req, res) => {
        try {
            const Products = await db.Activities.findAll({ attributes: ['id', 'name', 'description'], include: ['activity_images'] });

           const productsData =  Products.map((product) => {
               return {
                    id: product.id,
                    name: product.name,
                    image: `http://localhost:3001/images/products/${product.activity_images[0].name}`,
                    description: product.description,
                    detail: `api/products/${product.id}`
                }
            })          
            const response = {
                meta: {
                    count: Products.length
                },
                data: productsData
            }
            return res.json(response);
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