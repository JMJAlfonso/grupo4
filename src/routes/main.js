const express = require ('express');
const mainController = require('../controllers/mainController')

const router = express.Router();

router.get('/', mainController.index);
router.post('/', mainController.indexForm);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/loadAndEdit', mainController.loadAndEdit);
router.get('/us', mainController.us);
router.get('/listDetail' , mainController.listDetail);

module.exports = router;
