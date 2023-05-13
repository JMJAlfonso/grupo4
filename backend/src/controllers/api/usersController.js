const db = require('../../../database/models');

const controller = {   
    users: async (req, res) => {
        try {
            const Users = await db.User.findAll({ attributes: ['id', 'name', 'surname','email', 'tel','avatar'] });            
            const usersData = Users.map((user) => {
               return  {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    tel: user.tel,
                    avatar: `http://localhost:3001/images/users/${user.avatar}`,
                    detail: `http://localhost:3000/api/users/${user.id}`
                }
            })           
            const response = {
                meta:{
                    count : Users.length
                },
                data:  usersData
            }           
            return res.json(response);
        } catch (error) {
            return res.send(error);
        }
    },
    user: async (req,res)=>{
        try {
            const User = await db.User.findOne({ attributes: ['id', 'name','surname', 'email','tel','avatar'] },{where: {id:req.params.id }});            
            
            User.avatar = `http://localhost:3000/images/users/${User.avatar}`;           
            return res.json(User);
        } catch (error) {
            return res.send(error);
        }
    }

}

module.exports = controller;