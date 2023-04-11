module.exports = function (sequelize, dataTypes) {
    let alias = 'Countries';

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
          code: {
          type: dataTypes.CHAR,
    
        }
}

    let config = {
        tableName: 'countries',
        timestamps: false
    };

    let Country = sequelize.define(alias, cols, config);

    Country.associate = function (models) {      
    }

    return Country;
}