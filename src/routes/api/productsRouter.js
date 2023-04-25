const express = require ('express');

const productsController = require ('../../controllers/api/productsController');

const router = express.Router();

router.get('/',productsController.products);
router.get('/:id',productsController.product);


module.exports = router;