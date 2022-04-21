/** Regras de negócio:
 *  - Não aceitar requisição post sem dados
 *  - Não aceitar formato da data inválido
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
      body.poster_url &&
      body.min_age
    ) {
      return true;
    } else {
      return false;
    }
  }

  /* checar se está no formato de data - TO DO (change implementation) */
  static validateDate(date) {
    return true;
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
