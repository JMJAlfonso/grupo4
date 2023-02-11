const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');

//list es el nombre de la lista de productos
router.get('/listDetail', productController.listDetail);


router.get('/createProduct', productController.createProduct);

router.get('/products/:id',productController.productDetail);

router.get('/products/:id/edit',productController.editProduct);
router.put('/products/:id',productController.update);
router.get('/products/:id/delete',productController.deleteProduct);
router.delete('/products/:id',productController.delete)



module.exports = router;

