const path = require('path');
const fs = require('fs');


const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath,'utf-8'));



const userController = {
    register: (req, res) => {
        let user = req.body;        
        users.push(user);
                
        let usersJson = JSON.stringify(user,null,' ');
        fs.writeFileSync(userFilePath,usersJson);
        res.redirect('/');        
    },
};

module.exports = userController;
