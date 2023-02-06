const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');

//list es el nombre de la lista de productos
router.get('/createProduct', productController.createProduct);

router.get('/:id/edit',productController.editProduct);
router.put('/edit',productController.saveEditProduct)

module.exports = router;

