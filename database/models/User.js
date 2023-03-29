module.exports = function (sequelize, dataTypes) {
    let alias = 'Users';

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
          },
          avatar: {
            type: dataTypes.TEXT,
            allowNull: false
          }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Roles, {
            as: 'roles',
            foreignKey: 'user_id'
        }),
        User.belongsTo(models.Countries, {
          as: 'countries',
          foreignKey: 'countries_id'
      })
    }

    return User;
}