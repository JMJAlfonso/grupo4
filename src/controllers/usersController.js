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
