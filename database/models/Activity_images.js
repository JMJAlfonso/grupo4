module.exports = function (sequelize, dataTypes) {
    let alias = 'Activity_images';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            foreignKey: true
        },
        name: {
            type: dataTypes.TEXT
        },
        activities_id: {
            type: dataTypes.INTEGER
        }
}

    let config = {
        tableName: '',
        timestamps: false
    };

    let Activity_images = sequelize.define(alias, cols, config);

    Activity_images.associate = function (models) {
        Activity_images.belongsTo(models.Activity, {
            as: 'images',
            foreignKey: 'Activities_id'
        })
    }

    return Activity_images;
}