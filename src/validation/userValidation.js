const path = require ('path')
const {body, check} = require('express-validator');

const validations = {
    register: [
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
            if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
                }
            }
            return true;
        })
    ],
    login: [
        check('email').isEmail().withMessage('Email invalido'),
        check('password').isLength({ min: 2 }).withMessage('La contraseña debe tener mínimo 2 caracteres')
    ]
}
module.exports = validations;