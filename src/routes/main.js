const express = require ('express');
const mainController = require ('../controllers/mainController')
const router = express.Router();
const multer = require('multer');
const path = require ('path');
const storage = multer.diskStorage({
    destination: (req,fil,cb)=>{
        cb(null,path.join(__dirname,'../../public/images/users'))
    },
    filename:(req,file,cb)=>{
        const newFileName ='user-'+ Date.now() + path.extname(file.originalname);
        cb(null,newFileName)
    }
})

const upload = multer({storage});


router.get('/', mainController.index);
router.post('/userMessage', mainController.indexForm);
router.get('/register', mainController.register);
router.post('/',upload.single('userImage'),mainController.registerProcess)
router.get('/productDetail', mainController.productDetail);
router.get('/productDescription/:id', mainController.productDescription);
router.get('/productCart', mainController.productCart);
router.get('/login', mainController.login);
router.get('/createProduct', mainController.createProduct);
router.get('/editProduct', mainController.editProduct);
router.get('/us', mainController.us);
// router.get('/listDetail' , mainController.listDetail);

module.exports = router;
