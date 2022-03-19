const Sequelize = require("sequelize");
const config = require("../config/config");

const Movie = require("../models/Movie");

const dbConnection = new Sequelize(config);

Movie.init(dbConnection);

module.exports = dbConnection;
