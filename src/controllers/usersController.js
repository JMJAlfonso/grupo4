const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const User = require("../models/User");
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);

const userController = {
    register: (req, res) => {
        res.render('register');
    }, 
    registerProcess: (req, res) => {         
             
         const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
             return res.render("register", {
                 errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let userInDB = User.findByField("email", req.body.email);

        if (!userInDB) {
            return res.render("register", {
                errors: {
                    email: {
                        msg: "este mail ya esta registrado"
                    }
                },
                oldData: req.body
            });
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            repeat_password: bcryptjs.hashSync(req.body.password, 10),
            avatar: User.storeImage(req.file.filename)
        }

        User.create(userToCreate); 
         return res.render("login");       
    },
    login: (req, res) => {
    res.render("login");
    },

    login: (req, res) => {
        res.render('login');
    },
    loginProcess: (req,res)=>{
        if (!req.body.username || !req.body.password){
            res.redirect('/login');           
        }else{
            req.session.username = req.body.username;
            req.session.password = req.body.password;
            res.redirect('/');
        }
     //     let userToLogin = User.findByField("email", req.body.email);
//     if (!userToLogin) {
//         return res.render("login", {
//             errors: {
//                 email: {
//                     msg: "no se encuentra en nuestra base de datos"
//                 }
//             },
        
//         });
//     }       
//     },
    
// };   
    },    
};

module.exports = userController;








