const {body} = require('express-validator');

const validations = {
    newProduct: [
        body("name").notEmpty().withMessage("Tienes que escribir el nombre de producto"),
        body("description").notEmpty().withMessage("Tienes que escribir una descripción"),        
        body("dificulty").notEmpty().withMessage("Tienes que completar la dificultad de la actividad"),
        body("price").notEmpty().withMessage("Tienes que escribir el precio").isInt().withMessage("debes escribir un valor numerico"),
        body("datetime-init").isDate().withMessage("Tienes que completar el horario de inicio"),
        body("datetime-finish").isDate().withMessage("Tienes que completar el horario de finalizacion"),
        body("image").custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [".jpg", ".png", ".gif"];
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