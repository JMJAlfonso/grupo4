const express = require ('express');

const dificultiesController = require ('../../controllers/api/dificultiesController');

const router = express.Router();

router.get('/',dificultiesController.list);
router.get('/:id',dificultiesController.getById);


module.exports = router;