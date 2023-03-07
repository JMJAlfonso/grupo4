const {body} = require('express-validator');
const path = require('path');

const validations = {
    newProduct: [
        body("name").notEmpty().withMessage("Tienes que escribir el nombre de producto"),
        body("description").isString().withMessage('tiene que contener letras').notEmpty().withMessage("Tienes que escribir una descripción")
        .custom((value, { req })=>{//se puede resumir en un return value.trim()
            if(!value.trim()){
                throw new Error("La descripcion no puede estar vacia.");;
            }
            return true;
        }),        
        body("dificulty").notEmpty().withMessage("Tienes que completar la dificultad de la actividad"),
        body("price").notEmpty().withMessage("Tienes que escribir el precio").isInt().withMessage("debes escribir un valor numerico"),
        // body("dateStart").isDate().withMessage("Tienes que completar el horario de inicio"),
        // body("dateFinish").isDate({format:'YYY-MMM-DDD',delimiters:['/', '-'], strictMode:false }).withMessage("Tienes que completar el horario de finalizacion"),
        body("image").custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [".JPG",".jpg", ".png", ".gif"];
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