const express = require ('express');
const mainController = require ('../controllers/mainController')
const router = express.Router();


router.get('/', mainController.index);
router.post('/userMessage', mainController.indexForm);
router.get('/productsDetail', mainController.productsDetail);
router.get('/productDetail/:id', mainController.productDetail);
router.get('/us', mainController.us);
// router.get('/listDetail' , mainController.listDetail);

module.exports = router;
