module.exports = function (sequelize, dataTypes) {
    let alias = 'Activities';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreignKey: true
        },
        name: {
            type: dataTypes.TEXT
        },
        description: {
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.DECIMAL(11,2)
        },
        datetime: {
            type: dataTypes.DATETIME
        },
        dificulties_id: {
            type: dataTypes.INTEGER
        }
}

    let config = {
        tableName: '',
        timestamps: false
    };

    let Activity = sequelize.define(alias, cols, config);

    Activity.associate = function (models) {
        Activity.belongsTo(models.Dificulty, {
            as: 'activities',
            foreignKey: 'dificulties_id'
        })
    }

    return Activity;
}