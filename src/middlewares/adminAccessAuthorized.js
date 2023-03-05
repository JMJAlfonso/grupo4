const fs = require('fs');
const path = require('path');
const bycryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);
function adminAccessAuthorized (req,res,next){
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.category== 'admin' ){
        return next();
    }
    return res.redirect('/user/login');    
}
module.exports = adminAccessAuthorized;