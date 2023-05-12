const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();
const path = require('path');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddlewares');
const userMiddleware = require('../middlewares/userMiddlewares');
const validation = require('../validation/userValidation');
const authorizationMiddleware = require('../middlewares/authorization');
const accessAuthorized = require('../middlewares/adminAccessAuthorized');

//configuracion de multer para almacenar imaganes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = path.join(__dirname, '../../public/images/users');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});


const upload = multer({ storage });

router.get('/', authorizationMiddleware, usersController.list);
router.get('/register', guestMiddleware, usersController.register);
router.post('/register',upload.single('userAvatar'), validation.register, usersController.create);
router.get("/login", guestMiddleware,usersController.login);
router.post("/login",validation.login, usersController.loginProcess);
router.get('/productCart',userMiddleware, usersController.productCart);
router.get('/logout', usersController.logout);
router.get('/profile', authorizationMiddleware, usersController.profile);


router.get('/check', function (req, res) {
    if (!req.session.usuarioLogueado ) {
        res.send("No estás logueado");
    } else {
        res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
    }
})

module.exports = router;











