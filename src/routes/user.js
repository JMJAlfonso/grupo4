const express = require ('express');
const usersController = require ('../controllers/usersController')
const router = express.Router();
const path = require ('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/images/users'));
    },
    filename:(req,file,cb)=>{
        const newFileName ='user-'+ Date.now() + path.extname(file.originalname);
        cb(null,newFileName);
    }
});

const upload = multer({storage});


router.post('/login',upload.single('userImage'),usersController.register);

// router.get('/listDetail' , mainController.listDetail);

module.exports = router;

// const upload = multer({storage});
// const uploadFile = multer({storage});

// const validations = [
// body("name").notEmpty().withMessage("Tienes que escribir tu nombre"),
// body("surName").notEmpty().withMessage("Tienes que escribir tu apellido"),
// body("email").notEmpty().withMessage("Tienes que escribir tu correo electronico").bail().isEmail().withMessage("debes escribir un correo electronico"),
// body("tel").notEmpty().withMessage("Tienes que escribir tu numero de telefono"),
// body("country").notEmpty().withMessage("Tienes que escribir tu pais"),
// body("password").notEmpty().withMessage("Tienes que escribir tu contraseña"),
// body("repeat_password").notEmpty().withMessage("Tienes que escribir tu confirmacion de contraseña"),
// body("userImage").custom((value, { req }) => {
//     let file = req.file;
//     let acceptedExtensions = [".jpg", ".png", ".gif"];
//     if (!file) {
//         throw new Error("tienes que subir una imagen") 
//     } else {
//         let fileExtension = path.extname(file.originalname);
//         if (!acceptedExtensions.includes(fileExtension)) {
//             throw new Error('las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}')
//         }
//     }
//     return true;
// })
// ]
// router.post('/saveInformation',upload.single('userImage'), usersController.register);

// // router.get('/listDetail' , mainController.listDetail);

// router.get("/login", usersController.login);

// //procesar el login
// router.post("/login", usersController.loginProcess);

// router.get("/register", usersController.register);

// //procesar el register
// router.post('/register',uploadFile.single('userImage'),validations,usersController.registerProcess);

// module.exports = router;
