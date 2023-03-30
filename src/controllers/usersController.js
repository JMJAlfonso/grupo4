const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const User = require("../services/User");
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
const users = JSON.parse(usersJson);
const db = require('../../database/models');

const userController = {
    register: (req, res) => {
        res.render(' ');
    },
    registerProcess: (req, res) => {

        const resultValidation = validationResult(req);


        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }


        //let userInDB = db.Users.findOne({ where: { email: 'req.body.email;' } });
        let userInDB = User.findByField("email", req.body.email);

        if (userInDB) {
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
        id: User.generateId(),
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        category: 'user',
        avatar: User.storeImage(req.file)
    }
    delete userToCreate.repeat_password;
    User.create(userToCreate);
    return res.redirect("/user/login");
},
//     let userRole = db.Roles.create({name: 'user'})
    //     let userToCreate = {
    //         id: User.generateId(),
    //         ...req.body,
    //         password: bcryptjs.hashSync(req.body.password, 10),
    //         roles_id: userRole.id,
    //         avatar: User.storeImage(req.file)
    //     }
    //     delete userToCreate.repeat_password;
    //     User.create(userToCreate);
    //     return res.redirect("/user/login");
    // },
    login: (req, res) => {
        res.render('login');
    },

    loginProcess: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuarioAloguearse;

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcryptjs.compareSync(req.body.password, users[i].password)) {
                        usuarioAloguearse = users[i];
                        break;
                    }
                }
            }

            if (usuarioAloguearse == undefined) {
                return res.render('login', {
                    errors: [
                        { msg: "Credenciales inválidas" }
                    ]
                });
            }
            req.session.usuarioLogueado = usuarioAloguearse;
            res.redirect('/');
        } else {
            return res.render('login', { errors: errors.errors });
        }
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
}

module.exports = userController;










/*if (!req.body.email || !req.body.password){
     res.redirect('/login');
 }else{
     req.session.username = req.body.username;
     req.session.password = req.body.password;
     req.session.email = req.body.email;
     res.redirect('/');
 }*/
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
//   },
//};










