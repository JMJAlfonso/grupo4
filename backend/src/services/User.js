const fs = require("fs");
const path = require("path");

const User = {
    filename: function(){
        usersFilePath = path.join(__dirname, '../data/users.json')
        return usersFilePath;
    },
    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename(), "utf-8"));
    },

    generateId: function (){
        let allUsers = this.findAll();
        let lastUsers = allUsers.pop();
        if (lastUsers) {
            return lastUsers.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
          id: this.generateId(),
          ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename(), JSON.stringify(allUsers, null, " "));
        return newUser;
    },
    storeImage:function(imageFile){
        if(imageFile){
           return imageFile.filename;
        }else{
            return "defaultImage.png";
        }   

    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUser = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(finalUser, null, " "));
        return true;
    }

}

module.exports = User;