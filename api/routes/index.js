const moviesRouter = require("./moviesRouter");

/* padronizar as rotas - facilitar para adicionar outras entidades */
module.exports = (app) => {
  app.use(moviesRouter);
};
