module.exports = function (sequelize, dataTypes) {
    let alias = 'Activity_images';

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
          activities_id: {
            type: dataTypes.INTEGER,
            references: {
              model: "activities",
              key: "id"
            }
          }
}

    let config = {
        tableName: 'activity_images',
        timestamps: false
    };

    let Activity_image = sequelize.define(alias, cols, config);

    Activity_image.associate = function (models) {
        Activity_image.belongsTo(models.Activities, {
          as: 'activity',
          foreignKey: 'activities_id'
        })
    }
    return Activity_image;
}