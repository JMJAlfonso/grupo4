const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');


const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);

const userController = {
    register: (req, res) => {
        let user = req.body;
        let passwordEncrypt = bcrypt.hashSync(user.password,8);
        user.password = passwordEncrypt;
        // let compare = bycryptjs.compareSync(user.password,passwordEncrypt); para comprarar si la password encrypt es igual a lo que se ingreso
        // if(compare){
        //     ...
        // }else{
        //     ...
        // }         
        if(req.file){
            user.image = req.file.filename;
        }else{
            user.image = "defaultImage.png";
        }                   
        
        users.push(user);        
        let usersJson = JSON.stringify(users,null,' ');     
             
        fs.writeFileSync(usersFilePath,usersJson);       
        res.redirect('/');        
    },    
};

module.exports = userController;

const path = require('path');
const fs = require('fs');
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath,'utf-8'));



// const userController = {
//     register: (req, res) => {
//         res.render("register");
//     },
//     registerProcess: (req, res) => {
//         const resultValidation = validationResult(req);

//         if(resultValidation.errors.length > 0) {
//             return res.render("register", {
//                 errors: resultValidation.mapped(),
//                 oldData: req.body,
//             });
//         }

//         let userInDB = User.findByField("email", req.body.email);

//         if (!userInDB) {
//             return res.render("register", {
//                 errors: {
//                     email: {
//                         msg: "este mail ya esta registrado"
//                     }
//                 },
//                 oldData: req.body
//             });
//         }
//         let userToCreate = {
//             ...req.body,
//             password: bcryptjs.hashSync(req.body.password, 10),
//             avatar: req.file.filename
//         }

//         User.create(userToCreate); 
//          return res.render("login");       
//     },
//     login: (req, res) => {
//     res.render("login");
//     },

//     loginProcess: (req, res) => {
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

// module.exports = userController;
