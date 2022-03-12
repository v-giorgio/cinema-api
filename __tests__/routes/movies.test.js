const request = require("supertest");
const app = require("../../api/index");

describe("teste inicial", () => {
  it("teste de post", async () => {
    const newMovie = {
      title: "Filme teste",
      director: "Diretor teste",
      language: "Linguagem teste",
      genre: "Gênero teste",
      release_year: "2020-12-12",
      rating_avg: 12,
      description: "Descrição teste",
      duration: 12,
      has_3d: true,
      min_age: 12,
    };

    const response = await request(app).post("/movies").send(newMovie);

    console.log(response);

    expect(response.status).toBe(200);
  });
});
