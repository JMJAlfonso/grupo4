module.exports = function (sequelize, dataTypes) {
    let alias = 'Roles';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(45)
        }
}

    let config = {
        tableName: 'roles',
        timestamps: false
    };

    let Role = sequelize.define(alias, cols, config);

    Role.associate = function (models) {        
        Role.belongsTo(models.Users, {
          as: 'users',
          foreignKey: 'roles_id'
      })
    }


    return Role;
}