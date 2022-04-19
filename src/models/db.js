const fs = require("fs");
const path = require("path");
const { Sequelize } = require('sequelize');

// Connect to DB
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql'
});
      
// Create DB Object
var db = {};
 
// Import all models.
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== "db.js");
  })
  .forEach(file => {
    var model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });
 
// Process all models.
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});
 
 // Configure the database access.
 db.sequelize = sequelize;
 db.Sequelize = Sequelize;


module.exports = db;