module.exports = function (sequelize, dataTypes) {
    let alias = 'Dificulties';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreignKey: true
        },
        name: {
            type: dataTypes.TEXT
        }
}

    let config = {
        tableName: '',
        timestamps: false
    };

    let Dificulty = sequelize.define(alias, cols, config);

    return Dificulty;
}