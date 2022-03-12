const { Model, DataTypes } = require("sequelize");
const Validations = require("../utils/validations/Validations");

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

    /* verificar se os campos numéricos estão preenchidos corretamente */
    if (!Validations.validateNumber(movieData)) {
      return {
        message: `Os campos numéricos não devem ser preenchidos com texto`,
      };
    }

    /* verificar se o campo 'has_3d' é do tipo boolean */
    if (!Validations.validateBool(movieData.has_3d)) {
      return {
        message: `O campo 'has_3d' deve ser do tipo boolean.`,
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

    /* verificar numbers se houver */
    if (
      movieDataUpdate.rating_avg ||
      movieDataUpdate.duration ||
      movieDataUpdate.min_age
    ) {
      if (!Validations.validateNumber(movieDataUpdate)) {
        return {
          message: `Os campos numéricos não devem ser preenchidos com texto`,
        };
      }
    }

    /* verificar has_3d se houver */
    if (movieDataUpdate.has_3d) {
      if (!Validations.validateBool(movieDataUpdate.has_3d)) {
        return {
          message: `O campo 'has_3d' deve ser do tipo boolean.`,
        };
      }
    }

    /* verificar quantidade de dígitos nos campos duration e min_age se houver */
    if (movieDataUpdate.duration || movieDataUpdate.min_age) {
      if (
        !Validations.validateLength(movieDataUpdate.min_age) ||
        !Validations.validateLength(movieDataUpdate.duration)
      ) {
        return {
          message: `Os campos 'min_age' e 'duration' devem conter entre 1 e 3 dígitos.`,
        };
      }
    }

    /* verificar textos pequenos se houver */
    if (movieDataUpdate.language || movieDataUpdate.genre) {
      if (
        !Validations.validateShortString(movieDataUpdate.language) ||
        !Validations.validateShortString(movieDataUpdate.genre)
      ) {
        return {
          message: `Os campos 'language' e 'genre' devem conter até 30 caracteres`,
        };
      }
    }
  }
}

module.exports = Movie;
