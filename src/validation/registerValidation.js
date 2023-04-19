const {body} = require('express-validator');
const path = require('path');

const validations = {
    newRegister: [
        body("name").notEmpty().withMessage("Tienes que escribir tu nombre")
        .isLength({ min: 2 }).withMessage("Debe contener al menos 2 caracteres"),
        body("surname").notEmpty().withMessage("Tienes que escribir tu apellido")
        .isLength({ min: 2 }).withMessage("Debe contener al menos 2 caracteres"),
        body("email").notEmpty().withMessage("Tienes que escribir tu email")
        .isLength({ min: 2 }).withMessage("Debe ser un email válido"),
        body("tel").notEmpty().withMessage("Tienes que escribir tu numero de telefono"),
        body("password").notEmpty().withMessage("Tienes que escribir tu contraseña").isLength({ min: 8 }),
        body("repeat_password").notEmpty().withMessage("Tienes que escribir tu confirmacion de contraseña").custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match"),

        body("image").custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [".JPG",".jpg",'.jpeg', ".png", ".gif"];
            if (!file){
                throw new Error("Tienes que subir una imagen");
            }else {
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