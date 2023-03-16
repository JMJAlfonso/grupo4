module.exports = function (sequelize, dataTypes) {
    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreignKey: true
        },
        name: {
            type: dataTypes.TEXT
        },
        surname: {
            type: dataTypes.TEXT
        },
        email: {
            type: dataTypes.TEXT
        },
        password: {
            type: dataTypes.TEXT
        },
        roles_id: {
            type: dataTypes.INTEGER
        },
        countries_id: {
            type: dataTypes.INTEGER
        } 
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Roles, {
            as: 'roles',
            foreignKey: 'user_id'
        })
    },

    User.associate = function (models) {
        User.belongsTo(models.Countries, {
            as: 'countries',
            foreignKey: 'user_id'
        })
    }

    return User;
}