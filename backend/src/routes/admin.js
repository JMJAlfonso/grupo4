const express = require ('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');
const accessAuthorized = require('../middlewares/adminAccessAuthorized');

// validar informacion de productos !!!
const validation = require('../validation/productValidation');

//configuracion de multer para almacenar imaganes
const multer = require('multer');
const usersController = require('../controllers/usersController');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'product-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
const upload = multer({ storage });
router.get('/listDetail', accessAuthorized,productController.listDetail);
router.get('/createProduct', accessAuthorized,productController.createProduct); 
router.post('/createProcess',accessAuthorized,upload.single('image'),validation.newProduct,productController.createProcess);
router.get('/products/:id',accessAuthorized,productController.productDetail);
router.get('/products/:id/edit',accessAuthorized,productController.editProduct);
router.put('/products/:id',accessAuthorized,upload.single('image'),productController.update);
router.get('/products/:id/delete',accessAuthorized,productController.delete);
router.delete('/products/:id',accessAuthorized,productController.destroy);
router.get('/user', accessAuthorized, usersController.userList);
router.get('/:id', accessAuthorized, usersController.destroy);



module.exports = router;

