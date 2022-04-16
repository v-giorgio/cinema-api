const { Model, DataTypes } = require("sequelize");
const Validations = require("../services/validations/Validations");

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
        poster_url: DataTypes.STRING,
        min_age: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Movies",
      }
    );
  }

  static validations(movieData) {
    /* verificar se os campos obrigatórios foram preenchidos */
    if (!Validations.validateBody(movieData)) {
      return {
        message: "Insira os dados obrigatórios antes de fazer a requisição.",
      };
    }

    /* verificar se a data está no formato válido */
    if (!Validations.validateDate(movieData.release_year)) {
      return {
        message: `A data ${movieData.release_year} é inválida.`,
      };
    }

    /* verificar se a idade e a duração possuem até 3 dígitos */
    if (
      !Validations.validateLength(movieData.min_age) ||
      !Validations.validateLength(movieData.duration)
    ) {
      return {
        message: `Os campos 'min_age' e 'duration' devem conter entre 1 e 3 dígitos.`,
      };
    }

    /* verificar se campos com texto pequeno têm até 30 chars */
    if (
      !Validations.validateShortString(movieData.language) ||
      !Validations.validateShortString(movieData.genre)
    ) {
      return {
        message: `Os campos 'language' e 'genre' devem conter até 30 caracteres`,
      };
    }
  }

  static validationsUpdate(movieDataUpdate) {
    /* verificar data se houver */
    if (movieDataUpdate.release_year) {
      if (!Validations.validateDate(movieDataUpdate.release_year)) {
        return {
          message: `A data ${movieDataUpdate.release_year} é inválida.`,
        };
      }
    }

    /* verificar quantidade de dígitos nos campos duration e min_age se houver */
    if (movieDataUpdate.duration) {
      if (!Validations.validateLength(movieDataUpdate.duration)) {
        return {
          message: `Os campos 'min_age' e 'duration' devem conter entre 1 e 3 dígitos.`,
        };
      }
    }
    if (movieDataUpdate.min_age) {
      if (!Validations.validateLength(movieDataUpdate.min_age)) {
        return {
          message: `Os campos 'min_age' e 'duration' devem conter entre 1 e 3 dígitos.`,
        };
      }
    }

    /* verificar textos pequenos se houver */
    if (movieDataUpdate.language) {
      if (!Validations.validateShortString(movieDataUpdate.language)) {
        return {
          message: `Os campos 'language' e 'genre' devem conter até 30 caracteres`,
        };
      }
    }
    if (movieDataUpdate.genre) {
      if (!Validations.validateShortString(movieDataUpdate.genre)) {
        return {
          message: `Os campos 'language' e 'genre' devem conter até 30 caracteres`,
        };
      }
    }
  }
}

module.exports = Movie;
