const Movie = require("../models/Movie");

class MoviesController {
  static async getAllMovies(req, res) {
    try {
      const movies = await Movie.findAll();

      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneMovie(req, res) {
    const { id } = req.params;
    try {
      const movie = await Movie.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(movie);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneMovieByTitle(req, res) {
    const { title } = req.body;

    console.log(req.body);

    try {
      const movie = await Movie.findOne({
        where: { title: title },
      });

      return res.status(200).json(movie);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createMovie(req, res) {
    const movieData = req.body;

    /* fazer as validações das regras de negócio */
    if (Movie.validations(movieData)) {
      return res.status(400).json(Movie.validations(movieData));
    }

    /* verificar se filme já existe no banco */
    if (
      await Movie.findOne({
        where: { title: movieData.title },
      })
    ) {
      return res
        .status(409)
        .json({ message: `O filme ${movieData.title} já foi cadastrado.` });
    }

    try {
      const newMovie = await Movie.create(movieData);

      return res.status(201).json(newMovie);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateMovie(req, res) {
    const { id } = req.params;
    const movieUpdate = req.body;

    /* fazer as validações das regras de negócio de acordo com os campos passados */
    if (Movie.validationsUpdate(movieUpdate)) {
      return res.status(400).json(Movie.validationsUpdate(movieUpdate));
    }

    try {
      await Movie.update(movieUpdate, { where: { id: Number(id) } });

      const movieAfterUpdate = await Movie.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(movieAfterUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteMovie(req, res) {
    const { id } = req.params;

    try {
      await Movie.destroy({ where: { id: Number(id) } });
      return res.status(204).json({ message: `Filme ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = MoviesController;
