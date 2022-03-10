const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        director: DataTypes.STRING,
        language: DataTypes.STRING,
        genre: DataTypes.STRING,
        release_year: DataTypes.DATEONLY,
        rating_avg: DataTypes.FLOAT,
        description: DataTypes.TEXT,
        duration: DataTypes.INTEGER,
        has_3d: DataTypes.BOOLEAN,
        min_age: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Movies",
      }
    );
  }
}

module.exports = Movie;
