module.exports = function (sequelize, dataTypes) {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          surname: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          email: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          password: {
            type: dataTypes.TEXT,
            allowNull: false
          }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    // User.associate = function (models) {
    //     User.belongsTo(models.Roles, {
    //         as: 'roles',
    //         foreignKey: 'user_id'
    //     })
    // },

    // User.associate = function (models) {
    //     User.belongsTo(models.Countries, {
    //         as: 'countries',
    //         foreignKey: 'user_id'
    //     })
    // }

    return User;
}