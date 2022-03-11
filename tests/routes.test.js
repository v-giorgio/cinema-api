const request = require("supertest");
const app = require("../api/index");

describe("MovieRoutes", () => {
  it("Rota getAllMovies deve funcionar", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
  });

  it("Rota getOneMovie deve funcionar (popular o banco com as seeders)", async () => {
    const response = await request(app).get(`/movies/${1}`);

    expect(response.status).toBe(200);
  });

  it("Rota createMovie deve funcionar com os campos validados (popular o banco com as seeders)", async () => {
    const response = await request(app).post("/movies").send({
      title: "Teste",
      director: "Teste",
      language: "Inglês",
      genre: "teste",
      release_year: "2016-10-21",
      rating_avg: 98,
      description: "Teste",
      duration: 111,
      has_3d: true,
      min_age: 10,
    });

    expect(response.status).toBe(200);
  });

  it("Rota updateMovie deve funcionar com os campos validados (popular o banco com as seeders)", async () => {
    const response = await request(app).put(`/movies/${8}`).send({
      title: "Teste - atualizado",
    });

    expect(response.status).toBe(200);
  });

  it("Rota deleteMovie deve funcionar (popular o banco com as seeders)", async () => {
    const response = await request(app).delete(`/movies/${9}`);

    expect(response.status).toBe(200);
  });
});
