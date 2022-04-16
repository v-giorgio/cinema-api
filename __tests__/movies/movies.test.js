const request = require("supertest");
const app = require("../../api/index");

/** - Rotas da model Movies -
 * Criar um filme
 * Criar vários filmes
 * Não criar um filme já existente
 * Pegar todos os filmes
 * Pegar um filme por id
 * Atualizar um filme por id
 * Deletar um filme por id
 */
describe("Rotas da model Movies", () => {
  it("Deve conseguir criar um novo filme", async () => {
    const newMovie = {
      title: "Filme teste",
      director: "Diretor teste",
      language: "Linguagem teste",
      genre: "Gênero teste",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste",
      duration: 12,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(201);

    expect(response.body.title).toBe("Filme teste");
  });

  it("Deve conseguir popular o banco com vários filmes", async () => {
    const newMovie2 = {
      title: "Filme teste2",
      director: "Diretor teste2",
      language: "Linguagem teste2",
      genre: "Gênero teste2",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste2",
      duration: 12,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };
    const newMovie3 = {
      title: "Filme teste3",
      director: "Diretor teste3",
      language: "Linguagem teste3",
      genre: "Gênero teste3",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste3",
      duration: 12,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };
    const newMovie4 = {
      title: "Filme teste4",
      director: "Diretor teste4",
      language: "Linguagem teste4",
      genre: "Gênero teste4",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste4",
      duration: 12,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response2 = await request(app).post("/movies").send(newMovie2);
    const response3 = await request(app).post("/movies").send(newMovie3);
    const response4 = await request(app).post("/movies").send(newMovie4);

    expect(response2.status).toBe(201);
    expect(response3.status).toBe(201);
    expect(response4.status).toBe(201);

    expect(response2.body.title).toBe("Filme teste2");
    expect(response3.body.title).toBe("Filme teste3");
    expect(response4.body.title).toBe("Filme teste4");
  });

  it("Não deverá criar um filme já existente no banco", async () => {
    const newMovie = {
      title: "Filme teste",
      director: "Diretor teste",
      language: "Linguagem teste",
      genre: "Gênero teste",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste",
      duration: 12,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(409);
  });

  it("Deve conseguir retornar todos os filmes inseridos", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);

    expect(response.body[0].title).toBe("Filme teste");
    expect(response.body[1].title).toBe("Filme teste2");
    expect(response.body[2].title).toBe("Filme teste3");
  });

  it("Deve conseguir retornar um filme pelo id", async () => {
    const response = await request(app).get("/movies/1");
    const response2 = await request(app).get("/movies/2");

    expect(response.status).toBe(200);
    expect(response2.status).toBe(200);

    expect(response.body.title).toBe("Filme teste");
    expect(response2.body.title).toBe("Filme teste2");
  });

  it("Deve conseguir atualizar um filme pelo id", async () => {
    const response = await request(app).put("/movies/1").send({
      description: "Descrição teste atualizada",
    });

    expect(response.status).toBe(200);

    expect(response.body.description).toBe("Descrição teste atualizada");
  });

  it("Deve conseguir deletar um filme pelo id", async () => {
    const response = await request(app).delete("/movies/4").send();

    expect(response.status).toBe(204);

    expect(response.body.title).toBe(undefined);
  });

  it("Não pode retornar um item que já foi deletado", async () => {
    const response = await request(app).get("/movies/4").send();

    expect(response.body).toBe(null);
  });
});

/** - Validações da model movies na rota de Create -
 * Campos obrigatórios
 * Campos não-obrigatórios
 * Data no formato inválido
 * String em campos numéricos
 * Quantidade de dígitos em campos numéricos
 * Tamanho do texto em campos pequenos
 */
describe("Validações da model Movies na rota de Create", () => {
  it("Não deve conseguir criar um filme sem todos os atributos obrigatórios", async () => {
    /* faltando o atributo 'duration' que é obrigatório */
    const newMovie = {
      title: "Filme validado",
      director: "Diretor validado",
      language: "Linguagem validado",
      genre: "Gênero validado",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição validado",
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(400);
  });

  it("Poderá criar um filme mesmo faltando atributos, desde que não sejam obrigatórios", async () => {
    /* faltando os atributos 'rating_avg' e 'description' que NÃO são obrigatórios */
    const newMovie = {
      title: "Novo Filme validado",
      director: "Diretor validado",
      language: "Linguagem validado",
      genre: "Gênero validado",
      release_year: "2020-12-12",
      duration: 122,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(201);
  });

  it("Não aceitará data em um formato inválido", async () => {
    const newMovie = {
      title: "Filme validado",
      director: "Diretor validado",
      language: "Linguagem validado",
      genre: "Gênero validado",
      release_year: "",
      duration: 122,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const invalidDate1 = newMovie;
    invalidDate1.release_year = "200-12-12";
    const invalidDate2 = newMovie;
    invalidDate2.release_year = "2020-13-12";
    const invalidDate3 = newMovie;
    invalidDate3.release_year = "2020-22-12";
    const invalidDate4 = newMovie;
    invalidDate4.release_year = "2020-12-32";

    const response1 = await request(app).post("/movies").send(invalidDate1);
    const response2 = await request(app).post("/movies").send(invalidDate2);
    const response3 = await request(app).post("/movies").send(invalidDate3);
    const response4 = await request(app).post("/movies").send(invalidDate4);

    expect(response1.status).toBe(400);
    expect(response2.status).toBe(400);
    expect(response3.status).toBe(400);
    expect(response4.status).toBe(400);
  });

  it("Os campos de min_age e duration devem ter entre 1 e 3 dígitos", async () => {
    const newMovie = {
      title: "Filme validado",
      director: "Diretor validado",
      language: "Linguagem validado",
      genre: "Gênero validado",
      release_year: "2020-12-12",
      duration: 1212,
      rating_avg: 80,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 1212,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(400);
  });

  it("Campos de texto pequeno - language e genre - devem ter até 30 chars", async () => {
    let longStr = "";
    for (let i = 0; i < 32; i++) {
      longStr += "A";
    }

    const newMovie = {
      title: "Filme validado",
      director: "Diretor validado",
      language: longStr,
      genre: longStr,
      release_year: "2020-12-12",
      duration: 12,
      rating_avg: 80,
      poster_url: "htttps://teste.com/test.jpg",
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    expect(response.status).toBe(400);
  });
});

/** - Validações da model movies na rota de Update -
 * Data no formato inválido
 * String em campos numéricos
 * Quantidade de dígitos em campos numéricos
 * Tamanho do texto em campos pequenos
 */
describe("Validações da model Movies na rota de Update", () => {
  it("Não aceitará data em um formato inválido", async () => {
    const invalidDate1 = {
      release_year: "200-12-12",
    };
    const invalidDate2 = {
      release_year: "2020-13-12",
    };
    const invalidDate3 = {
      release_year: "2020-22-12",
    };
    const invalidDate4 = {
      release_year: "2020-12-32",
    };

    const response1 = await request(app).put("/movies/1").send(invalidDate1);
    const response2 = await request(app).put("/movies/1").send(invalidDate2);
    const response3 = await request(app).put("/movies/1").send(invalidDate3);
    const response4 = await request(app).put("/movies/1").send(invalidDate4);

    expect(response1.status).toBe(400);
    expect(response2.status).toBe(400);
    expect(response3.status).toBe(400);
    expect(response4.status).toBe(400);
  });

  it("Os campos de min_age e duration devem ter entre 1 e 3 dígitos", async () => {
    const newMovie = {
      duration: 1212,
    };

    const newMovie2 = {
      min_age: 1212,
    };

    const response = await request(app).put("/movies/1").send(newMovie);
    const response2 = await request(app).put("/movies/1").send(newMovie2);

    expect(response.status).toBe(400);
    expect(response2.status).toBe(400);
  });

  it("Campos de texto pequeno - language e genre - devem ter até 30 chars", async () => {
    let longStr = "";
    for (let i = 0; i < 32; i++) {
      longStr += "A";
    }

    const newMovie = {
      language: longStr,
    };

    const newMovie2 = {
      genre: longStr,
    };

    const response = await request(app).put("/movies/1").send(newMovie);
    const response2 = await request(app).put("/movies/1").send(newMovie2);

    expect(response.status).toBe(400);
    expect(response2.status).toBe(400);
  });
});
