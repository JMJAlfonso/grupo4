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
          tel: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          password: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          avatar: {
            type: dataTypes.TEXT,
            allowNull: false
          },
          roles_id: {
            type: dataTypes.INTEGER,
          },
          countries_id: {
            type: dataTypes.INTEGER,
          },
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Roles, {
            as: 'roles',
            foreignKey: 'roles_id'
        }),
        User.belongsTo(models.Countries, {
          as: 'countries',
          foreignKey: 'countries_id'
      })
    }

    return User;
}