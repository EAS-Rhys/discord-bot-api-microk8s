const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Instance = sequelize.define('MicroK8s_Instance', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instanceId: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
  });
  return Instance;
};


