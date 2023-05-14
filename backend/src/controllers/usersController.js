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
        res.render('register');
    },
    registerProcess: (req, res) => {

        const resultValidation = validationResult(req);


        if (resultValidation.errors.length > 0) {
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }


        let userInDB = db.Users.findOne({ where: { email: req.body.email } });
  
        if (userInDB) {
            return res.render("register", {
                errors: {
                    email: {
                        msg: "Este mail ya está registrado"
                    }
                },
                oldData: req.body
            });
        }

    },

    create: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (!resultValidation.isEmpty()) {
                return res.render("register", {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                });
            }
            let userInDB = await db.User.findOne({ where: { email: req.body.email } });

            if (userInDB) {
                return res.render("register", {
                    errors: {
                        email: {
                            msg: "Este mail ya está registrado"
                        }
                    },
                    oldData: req.body
                });
            }
            const newRole = {
                name:'user'
            }

            const newR = await db.Roles.findOne({ where: newRole  });            

            const newCountry = {
                name: req.body.country
            }

            const newC = await db.Countries.findOne( { where: newCountry });
            if(!req.file.filename){
                req.file.filename = 'default-avatar.png';
            } 
            console.log('DEBAJO IMPRIME REQ.FILE ==============================')                     
            console.log(req.file.filename)
            let userToCreate = {
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                tel: req.body.tel,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                roles_id: newR.id,
                countries_id: newC.id,                
            }            
            delete userToCreate.repeat_password;
            await db.User.create(userToCreate);
            res.redirect('/user/login');
        } catch (error) {
            res.send(error);
        }
    },
    list: async (req, res) => {
        try {
            const users = await db.User.findAll({
                include: ['role'],
                attributes: {
                    exclude: ['password', 'roles_id']
                }
            });
            res.render('users', { users });
        } catch (error) {
            res.send(error);
        }
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
    loginProcess: async (req, res) => {
        try {
            const user = await db.User.findOne({
                include: ['roles'],
                where: {
                    email: req.body.email
                }
            });           
            if (!user) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña inválidos' } } });
            }
            if (!bcryptjs.compareSync(req.body.password, user.password)) {
                return res.render('login', { errors: { unauthorize: { msg: 'Usuario y/o contraseña inválidos' } } });
            }
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,                
                role: user.roles.name,                
                surname: user.surname,
                avatar: user.avatar
            };
            res.redirect('/');
        } catch (error) {
            res.send(error);
        }
    },
    logout: (req, res) => {
        delete req.session.user;
        res.redirect('/');
    },
    profile: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.session.user.id, {
                attributes: { exclude: ['password'] },
                include: ['roles']
            });
            res.render('profile', { user: user.dataValues });
        } catch (error) {

        }
    },
    productCart: (req, res) => {
        res.render('productCart');
    },

    userList: async (req, res) => {
        try {
            const users = await db.User.findAll({
                include: ['roles', 'countries'],
                attributes: {
                    exclude: ['password', 'roles_id', 'countries_id']
                }
            });            
            res.render('users', {users} )
        } catch (error) {
            res.send(error)
        }  
    }, 
    destroy: async function (req, res) {
        try {     
            console.log(req.params.id);      
            await db.User.destroy({ where: { id: req.params.id } });

            res.redirect('/')
        } catch (error) {
            res.send(error);
        }

    },
};

module.exports = userController;






















