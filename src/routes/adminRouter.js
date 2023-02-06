const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');

//list es el nombre de la lista de productos
router.get('/create', productController.createProduct);



module.exports = router;

