const express = require ('express');
const mainController = require ('../controllers/mainController')
const router = express.Router();
const path = require ('path');




router.get('/', mainController.index);
router.post('/',mainController.logged);
router.post('/userMessage', mainController.indexForm);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/productDescription/:id', mainController.productDescription);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/createProduct', mainController.createProduct);
router.get('/editProduct', mainController.editProduct);
router.get('/us', mainController.us);
// router.get('/listDetail' , mainController.listDetail);

module.exports = router;
