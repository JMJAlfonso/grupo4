const express = require ('express');

const mainController = require('../controllers/mainController')

const router = express.Router();

router.get('/', mainController.index);
router.get('/register', mainController.register);
router.get('/productDetail', mainController.productDetail);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);


module.exports = router;
