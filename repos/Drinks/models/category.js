'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    beer: DataTypes.STRING,
    wine: DataTypes.TEXT,
    cocktail: DataTypes.TEXT
  }, {});
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};