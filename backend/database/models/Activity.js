module.exports = function (sequelize, dataTypes) {
  let alias = 'Activities';

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
    description: {
      type: dataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: dataTypes.DECIMAL(11, 2),
      allowNull: false
    },
    dateStart: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dateFinish: {
      type: dataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dificulties_id: {
      type: dataTypes.INTEGER,
      foreignKey: true,
      allowNull: false
    },
  }
  let config = {
    tableName: 'activities',
    timestamps: false
  };

  let Activity = sequelize.define(alias, cols, config);

  Activity.associate = function (models) {
    Activity.belongsTo(models.Dificulties, {
      as: 'dificulties',
      foreignKey: 'dificulties_id'
    }),
      Activity.hasMany(models.Activity_images, {
        as: 'activity_images',
        foreignKey: 'activities_id'
      });
  }

  return Activity;
}