'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DogPark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DogPark.init({
    name: DataTypes.STRING,
    location: {
      type: DataTypes.ENUM('Uptown', 'Downtown', 'Midtown'),
      defaultValue: 'Midtown',
    },
    puppyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Puppies',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'DogPark',
  });
  return DogPark;
};