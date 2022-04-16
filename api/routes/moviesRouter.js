const { Router } = require("express");

const MoviesController = require("../controllers/MoviesController");

const moviesRouter = Router();

moviesRouter.get("/movies", MoviesController.getAllMovies);
moviesRouter.get("/movies/:id", MoviesController.getOneMovie);
moviesRouter.get("/movies/title", MoviesController.getOneMovieByTitle);
moviesRouter.post("/movies", MoviesController.createMovie);
moviesRouter.put("/movies/:id", MoviesController.updateMovie);
moviesRouter.delete("/movies/:id", MoviesController.deleteMovie);

module.exports = moviesRouter;
