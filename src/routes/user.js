const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddlewares');
const userMiddleware = require('../middlewares/userMiddlewares');
const validation = require('../validation/userValidation');

//configuracion de multer para almacenar imaganes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../public/img/user');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});


const upload = multer({ storage });

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('userImage'), validation.register, usersController.registerProcess);
router.get("/login", guestMiddleware,usersController.login);
router.get('/productCart',userMiddleware, usersController.productCart);
router.post("/login",validation.login, usersController.loginProcess);

router.get('/check', function (req, res) {
    if (!req.session.usuarioLogueado ) {
        res.send("No estás logueado");
    } else {
        res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
    }
})

module.exports = router;











