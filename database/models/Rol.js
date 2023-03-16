module.exports = function (sequelize, dataTypes) {
    let alias = 'Roles';

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

    let Rol = sequelize.define(alias, cols, config);


    return Rol;
}