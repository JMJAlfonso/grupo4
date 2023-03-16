module.exports = function (sequelize, dataTypes) {
    let alias = 'Countries';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreignKey: true
        },
        name: {
            type: dataTypes.TEXT
        },
        code: {
            type: dataTypes.CHAR(3)
        }
}

    let config = {
        tableName: '',
        timestamps: false
    };

    let Country = sequelize.define(alias, cols, config);

    return Country;
}