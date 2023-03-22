module.exports = function (sequelize, dataTypes) {
    let alias = 'Dificulty';

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

    return Dificulty;
}