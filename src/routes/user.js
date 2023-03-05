const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddlewares');
const authMiddleware = require('../middlewares/authMiddlewares');
const validation = require('../validation/userValidation');

//configuracion de multer para almacenar imaganes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: (req, file, cb) => {
        const newFileName = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});


const upload = multer({ storage });

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('userImage'), validation.register, usersController.registerProcess);
router.get("/login", guestMiddleware,usersController.login);
router.get('/productCart',authMiddleware, usersController.productCart);
router.post("/login",validation.login, usersController.loginProcess);

router.get('/check', function (req, res) {
    if (!req.session.usuarioLogueado ) {
        res.send("No estás logueado");
    } else {
        res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
    }
})

module.exports = router;











