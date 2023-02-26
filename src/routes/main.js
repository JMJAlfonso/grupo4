const express = require ('express');
const mainController = require ('../controllers/mainController')
const router = express.Router();
const path = require ('path');




router.get('/', mainController.index);
router.post('/userMessage', mainController.indexForm);
router.get('/productDetail', mainController.productDetail);
router.get('/productDescription/:id', mainController.productDescription);
router.get('/productCart', mainController.productCart);
router.get('/us', mainController.us);
// router.get('/listDetail' , mainController.listDetail);

module.exports = router;
