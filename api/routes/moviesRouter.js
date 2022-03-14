const { Router } = require("express");

const MoviesController = require("../controllers/MoviesController");

const moviesRouter = Router();

moviesRouter.get("/movies", MoviesController.getAllMovies);
moviesRouter.get("/movies/:id", MoviesController.getOneMovie);
moviesRouter.post("/movies", MoviesController.createMovie);
moviesRouter.patch("/movies/:id", MoviesController.updateMovie);
moviesRouter.delete("/movies/:id", MoviesController.deleteMovie);

module.exports = moviesRouter;
