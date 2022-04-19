const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const db = require('./models/db');

// Test connectivity and migrate models
(async function(){ 
try {
  await db.sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await db.sequelize.sync({force: false})
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
})()

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'MicroK8s Discord bot API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], 
};

const openapiSpecification = swaggerJsdoc(options);

var app = express();
// Set global Express headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Enable bodyParser
app.use(
  bodyParser.json({
    limit: "100mb"
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100mb"
  })
);

var swagui_options = {
  explorer: true
};
// Add Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification,swagui_options));

// Add all routes
fs.readdirSync(path.join(__dirname, "routes")).forEach(function(file) {
  if (file[0] === ".") {
    return;
  }
  require(path.join(__dirname, "routes", file))(app);
});

// Start listening
console.debug("Listening on port 8080")
app.listen(8080);

//sequelize.close()