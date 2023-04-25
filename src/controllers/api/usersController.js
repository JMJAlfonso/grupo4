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
                    detail: `api/users/${user.id}`
                }
            })
            const cantidad = {
                count : Users.length
            }
            Users.unshift(cantidad);
            return res.json(Users);
        } catch (error) {
            return res.send(error);
        }
    },
    user: async (req,res)=>{
        try {
            const User = await db.User.findOne({ attributes: ['id', 'name','surname', 'email','tel','avatar'] },{where: {id:req.params.id }});            
            return res.json(User);
        } catch (error) {
            return res.send(error);
        }
    }

}

module.exports = controller;