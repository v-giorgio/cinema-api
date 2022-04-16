"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release_year: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      rating_avg: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      poster_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      min_age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies");
  },
};
