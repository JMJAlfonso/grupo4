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


router.post('/saveInformation',upload.single('userImage'),usersController.register);

// router.get('/listDetail' , mainController.listDetail);

module.exports = router;
