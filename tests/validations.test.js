const Validations = require("../api/utils/Validations");

describe("Validations", () => {
  it("Todos os campos devem estar preenchidos para a requisição post funcionar", () => {
    const request = Validations.validateBody({
      title: "Teste",
    });

    expect(request).toBe(false);
  });

  it("A data deve estar num formato válido para o banco", () => {
    const dataOne = "3000-12-12";
    const dataTwo = "2020-20-12";
    const dataThree = "2020-20-32";
    const dataFour = "12-20";

    expect(Validations.validateDate(dataOne)).toBe(false);
    expect(Validations.validateDate(dataTwo)).toBe(false);
    expect(Validations.validateDate(dataThree)).toBe(false);
    expect(Validations.validateDate(dataFour)).toBe(false);
  });

  it("Os campos numéricos devem ter tipo Number", () => {
    const request = Validations.validateNumber({
      rating_avg: "Test",
      duration: "Test2",
      min_age: "Test3",
    });

    expect(request).toBe(false);
  });

  it("O valor booleano deve estar no formato correto", () => {
    const valueOne = "1";
    const valueTwo = "false";
    const valueThree = 3;
    const valueFour = true;
    const valueFive = false;

    expect(Validations.validateBool(valueOne)).toBe(false);
    expect(Validations.validateBool(valueTwo)).toBe(false);
    expect(Validations.validateBool(valueThree)).toBe(false);
    expect(Validations.validateBool(valueFour)).toBe(true);
    expect(Validations.validateBool(valueFive)).toBe(true);
  });

  it("Os campos devem ter apenas entre 1 e 3 dígitos", () => {
    const valueOne = 0;
    const valueTwo = 111;
    const valueThree = 11;
    const valueFour = 1111;

    expect(Validations.validateLength(valueOne)).toBe(true);
    expect(Validations.validateLength(valueTwo)).toBe(true);
    expect(Validations.validateLength(valueThree)).toBe(true);
    expect(Validations.validateLength(valueFour)).toBe(false);
  });

  it("Os campos devem ter tamanho máximo de 30 chars", () => {
    const shortStr = "test";
    let longStr = "";
    for (let i = 0; i <= 30; i++) {
      longStr += "a";
    }

    expect(Validations.validateShortString(longStr)).toBe(false);
    expect(Validations.validateShortString(shortStr)).toBe(true);
  });
});
