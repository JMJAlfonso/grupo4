module.exports = function (sequelize, dataTypes) {
    let alias = 'Dificulties';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: dataTypes.TEXT,
            allowNull: false
          }
}

    let config = {
        tableName: 'dificulties',
        timestamps: false
    };

    let Dificulty = sequelize.define(alias, cols, config);

    Dificulty.associate = function (models) {        
        Dificulty.hasMany(models.Activities,{
          as: 'activities',
          foreignKey:'dificulties_id'
        });
      }

    return Dificulty;
}