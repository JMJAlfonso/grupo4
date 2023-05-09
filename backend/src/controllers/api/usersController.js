const db = require('../../../database/models');

const controller = {   
    users: async (req, res) => {
        try {
            const Users = await db.User.findAll({ attributes: ['id', 'name', 'email'] });            
            Users.map((user, index) => {
                Users[index] = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: `http://localhost:3000/api/users/${user.id}`
                }
            })
            const cantidad = {
                count : Users.length
            }
            const response = {
                meta:{
                   cantidad
                },
                data:  Users
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