const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');
const accessAuthorized = require('../middlewares/adminAccessAuthorized');
//list es el nombre de la lista de productos
router.get('/listDetail', productController.listDetail);

//falta validar informacion de productos !!!
router.get('/createProduct', accessAuthorized,productController.createProduct); 
router.post('/createProcess',accessAuthorized,productController.createProcess);

router.get('/products/:id',accessAuthorized,productController.productDetail);

router.get('/products/:id/edit',accessAuthorized,productController.editProduct);
router.put('/products/:id',accessAuthorized,productController.update);
router.get('/products/:id/delete',accessAuthorized,productController.deleteProduct);
router.delete('/products/:id',accessAuthorized,productController.delete)



module.exports = router;

