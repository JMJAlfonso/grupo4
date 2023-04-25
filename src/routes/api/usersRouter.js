const express = require ('express');

const usersController = require ('../../controllers/api/usersController');

const router = express.Router();

router.get('/',usersController.users);
router.get('/:id',usersController.user);


module.exports = router;