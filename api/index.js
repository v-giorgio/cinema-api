const express = require("express");
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const routes = require("./routes");

require("./database");

/* definir a porta para servir o app */
const port = process.env.PORT;

const app = express();

/* middleware: definir o padrão json para as rotas */
app.use(express.json());

/* executar o arquivo de rotas na app */
routes(app);

/* servir o app */
app.listen(port, () => {
  try {
    console.log(`Api rodando na porta ${port}`);
  } catch (err) {
    console.log(`Erro ao rodar a Api:\n\n ${err}`);
  }
});

module.exports = app;
