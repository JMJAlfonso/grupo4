const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');
const multer = require('multer');
let guestMiddleware = require('../middlewares/guestMiddlewares');
const { check } = require('express-validator');


//configuracion de multer para almacenar imaganes
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,'../../public/images/users'));
    },
    filename:(req,file,cb)=>{
        const newFileName ='user-'+ Date.now() + path.extname(file.originalname);
        cb(null,newFileName);
    }
});
//para validar datos con express-validator
const validations = [
    body("name").notEmpty().withMessage("Tienes que escribir tu nombre"),
    body("surname").notEmpty().withMessage("Tienes que escribir tu apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir tu correo electronico").bail().isEmail().withMessage("debes escribir un correo electronico"),
    body("tel").notEmpty().withMessage("Tienes que escribir tu numero de telefono"),
    body("country").notEmpty().withMessage("Tienes que escribir tu pais"),
    body("password").notEmpty().withMessage("Tienes que escribir tu contraseña"),
    body("repeat_password").notEmpty().withMessage("Tienes que escribir tu confirmacion de contraseña"),
    body("userImage").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        if(file){        
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
    ]
const upload = multer({storage});

router.get('/register', usersController.register);
router.post('/register',upload.single('userImage'),validations,usersController.registerProcess);
router.get("/login", usersController.login);
router.post("/login", 
[check('email').isEmail().withMessage('Email invalido'),
check('password').isLength({ min: 2 }).withMessage('La contraseña debe tener mínimo 2 caracteres')],
usersController.loginProcess);

router.get('/check', function(req, res){
    if(req.session.usuarioLogueado == undefined) {
        res.send("No estás logueado");
    }else{
        res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
    }
    })

module.exports = router;











