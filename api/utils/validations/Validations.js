/** Regras de negócio:
 *  - Não aceitar requisição post sem dados
 *  - Não aceitar formato da data inválido
 *  - Não aceitar formato string para campos numéricos
 *  - Não aceitar diferentes campos em campos do tipo boolean
 *  - Não aceitar idade, nem duração, com mais de 3 dígitos
 *  - Não aceitar mais de 30 caracteres em textos pequenos (linguagem, gênero)
 */

class Validations {
  /* checar se os campos obrigatórios foram inseridos */
  static validateBody(body) {
    if (
      body.title &&
      body.director &&
      body.language &&
      body.genre &&
      body.release_year &&
      body.duration &&
      body.has_3d &&
      body.min_age
    ) {
      return true;
    } else {
      return false;
    }
  }

  /* checar se está no formato de data */
  static validateDate(date) {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    /* verificar se está no formato certo */
    if (!date.match(regex)) {
      return false;
    }
    /* verificar se os números da data são válidos */
    if (
      (parseInt(date[0]) === 2 || parseInt(date[0]) === 1) &&
      parseInt(date[5] + date[6]) >= 1 &&
      parseInt(date[5] + date[6]) <= 12 &&
      parseInt(date[8] + date[9]) >= 1 &&
      parseInt(date[8] + date[9]) <= 31
    ) {
      return true;
    }
    return false;
  }

  /* verificar se os campos numéricos são do tipo number */
  static validateNumber(number) {
    if (typeof number === "number") {
      return true;
    } else {
      return false;
    }
  }

  /* verificar se é do tipo boolean */
  static validateBool(booleanItem) {
    return typeof booleanItem === "boolean";
  }

  /* verificar se idade e a duração têm entre 1 e 3 dígitos */
  static validateLength(ageOrDuration) {
    if (ageOrDuration == 0) {
      return true;
    }
    let ageStr = ageOrDuration.toString();
    return ageStr.length <= 3 && ageStr.length >= 0;
  }

  /* verificar campos com textos pequenos (máx. 30 char) */
  static validateShortString(shortString) {
    return shortString.length <= 30;
  }
}

module.exports = Validations;
