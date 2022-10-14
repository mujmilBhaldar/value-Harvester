"use strict";

var express = require("express"),
  cors = require("cors"),
  fileUpload = require("express-fileupload"),
  bodyParser = require("body-parser"),
  expressValidator = require("express-validator");
// require("dotenv").config();
require("dotenv").config();
//  const routes = require('../valueHarvestNode/routes/api');
//  const routes = require('../BH/routes/api');
const routes = require("../ValueBackend/routes/api");
// const dbConnector = require("../BH/config/dbConnection");
const dbConnector = require("../ValueBackend/routes/api");

const app = express();

dbConnector.init(app);
app.use(cors());
app.use(fileUpload());
// app.use('/public', express.static('public'));
// app.use(expressValidator());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes.init(app);

// if (app.get('env') === 'development') {
app.use(function (err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(500);
  res.json({
    message: err,
  });
});
// }

app.listen(5050, () => console.log("Server started on port no 5050"));

module.exports = app;
