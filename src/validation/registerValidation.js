const path = require ('path')
const {body} = require('express-validator');

const validations = {
    register: [
        body("name").notEmpty().withMessage("Tienes que escribir tu nombre").isLength({ min: 2 }),
        body("surname").notEmpty().withMessage("Tienes que escribir tu apellido").isLength({ min: 2 }),
        body("email").notEmpty().withMessage("Tienes que escribir tu correo electronico").bail().isEmail().withMessage("Debes escribir un correo electronico"),
        body("tel").notEmpty().withMessage("Tienes que escribir tu número de teléfono"),
        body("country").notEmpty().withMessage("Tienes que escribir tu pais"),
        body("password").notEmpty().withMessage("Tienes que escribir tu contraseña").isLength({ min: 8 }),
        body("repeat_password").notEmpty().withMessage("Tienes que escribir tu confirmacion de contraseña").custom((value, {req}) => value === req.body.password).withMessage("Las contraseñas no coinciden"),
        body("userAvatar").custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [".jpg", ".png",'.jpeg',".gif"];
            if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
                }
            }
            return true;
        })
    ],
    
}
module.exports = validations;