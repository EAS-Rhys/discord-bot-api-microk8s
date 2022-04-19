const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
  });
  return User;
};


