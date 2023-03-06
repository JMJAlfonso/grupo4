const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productController');
const accessAuthorized = require('../middlewares/adminAccessAuthorized');
//list es el nombre de la lista de productos
router.get('/listDetail', productController.listDetail);

//falta validar informacion de productos !!!
const validation = require('../validation/productValidation');

//configuracion de multer para almacenar imaganes
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'product-'+ file.originalname + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
const upload = multer({ storage });
router.get('/listDetail', accessAuthorized,productController.listDetail);
router.get('/createProduct', accessAuthorized,productController.createProduct); 
router.post('/createProcess',accessAuthorized,upload.single('image'),validation.newProduct,productController.createProcess);
router.get('/products/:id',accessAuthorized,productController.productDetail);
router.get('/products/:id/edit',accessAuthorized,productController.editProduct);
router.put('/products/:id',accessAuthorized,productController.update);
router.get('/products/:id/delete',accessAuthorized,productController.deleteProduct);
router.delete('/products/:id',accessAuthorized,productController.delete)



module.exports = router;

