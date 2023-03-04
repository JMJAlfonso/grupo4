const fs = require('fs');
const path = require('path');
const bycryptjs = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);
function adminAccessAuthorized (req,res,next){
    if(req.session.usuarioLogueado && req.session.usuarioLogueado.category== 'admin' ){
        next();
    }
    res.redirect('/user/login');
    // //     let emailAutorized=false;        
    // //     let userCategory;
    // //     let passwordEncrypt;        
    // //     let password ;
    // //     let userAutorized;
    // // for(let i = 0 ; i < users.length;i++){
    // //     if(users[i].email == req.session.email ){       
    // //     passwordEncrypt = users[i].password;
    // //     emailAutorized = true; 
    // //     password = req.session.password;        
    // //     userCategory= users[i].category;
    // //     }           
    // // }
    // let PassAutorized = bycryptjs.compareSync(password,passwordEncrypt);// para comprarar si la password encrypt es igual a lo que se ingreso
    // let categoryAutorized = (userCategory =='admin');    
    // userAutorized = (emailAutorized && PassAutorized && categoryAutorized);    
    // if(!userAutorized  ){       
    //     return res.redirect('/user/login');} 
    
     
}
module.exports = adminAccessAuthorized;