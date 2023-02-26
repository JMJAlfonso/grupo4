const fs = require('fs');
const path = require('path');
const bycryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);

function accessAuthorized (req,res,next){
        let userAutorized = false;
    for(let i = 0 ; i < users.length;i++){        
        let passwordEncrypt = users[i].password;
        let password = req.session.password;
        let compare = bycryptjs.compareSync(password,passwordEncrypt);// para comprarar si la password encrypt es igual a lo que se ingreso
        userAutorized += userAutorized || compare; 
    }
    if(!userAutorized){return res.redirect('/login'); } 
    
    next(); 
}
module.exports = accessAuthorized;