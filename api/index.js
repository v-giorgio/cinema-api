const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

require("./database");

/* definir a porta para servir o app */
dotenv.config();
const port = process.env.PORT;

const app = express();

/* definir o padrão json para as rotas */
app.use(express.json());

/* executar o arquivo de rotas na app */
routes(app);

/* servir o app */
app.listen(port, () => {
  console.log(`Api rodando na porta ${port}`);
});

module.exports = app;
