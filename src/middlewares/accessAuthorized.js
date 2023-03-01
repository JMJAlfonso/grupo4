const fs = require('fs');
const path = require('path');
const bycryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);

function accessAuthorized (req,res,next){
        let userAutorized = false;
        let emailAuthorized = false;
    for(let i = 0 ; i < users.length;i++){        
        let passwordEncrypt = users[i].password;
        let userEmail = users[i].email; 
        let password = req.session.password;
        let email = req.session.email;                  
         
        emailAuthorized += emailAuthorized || (email == userEmail) ;   
        let compare = bycryptjs.compareSync(password,passwordEncrypt);// para comprarar si la password encrypt es igual a lo que se ingreso
        userAutorized += userAutorized || compare;        
    }
    if(!userAutorized || !emailAuthorized){       
        return res.redirect('/user/login');} 
    
    next(); 
}
module.exports = accessAuthorized;