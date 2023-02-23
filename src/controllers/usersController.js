const path = require('path');
const fs = require('fs');


const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJson = fs.readFileSync(usersFilePath, "utf-8");
let users = JSON.parse(usersJson);

const userController = {
    register: (req, res) => {
        let user = req.body;
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
