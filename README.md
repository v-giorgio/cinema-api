<div align="center">
    <h1> </h1>
    <h2>🎬 Cinema API 🎬</h2>
    <hr />
    <p>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/language-Node.js-green" alt="API main language" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-red" alt="Repository license" /></a>
    </p>
</div>

## 📜 Descrição

<p>
    A Cinema API é o projeto de finalização do Módulo 4 da Resilia. Trata-se do back-end de uma aplicação para a manipulação da entidade <b>Movie</b>.
</p>
<p>
    A API possui a arquitetura REST e pode ser utilizada para realizar as operações CRUD da entidade Movie.
</p>

<br>

---

<br>

## ✨ Funcionalidades

A API pode realizar as seguintes operações:

- [x] Encontrar todos os filmes
- [x] Encontrar um filme pelo id
- [x] Adicionar um filme
- [x] Atualizar um filme pelo id
- [x] Deletar um filme pelo id

<br>

---

<br>

## 🛠️ Tecnologias e ferramentas

Foram utilizadas as seguintes tecnologias e ferramentas no projeto:

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Jest](https://jestjs.io/pt-BR/)

<br>

---

<br>

## 📶 Modelagem ER

<br>

<div align="center">

<img src="./public/assets/Movies.png" />

</div>

<br>

---

<br>

# 🌟 Rodando a aplicação

## Requerimentos

- [Git](https://git-scm.com/) instalado
- [Node](https://node.js.org/) instalado
- [Npm](https://www.npmjs.com/) instalado
- [MySQL](https://dev.mysql.com/downloads/) instalado (se for rodar o banco localmente)

<br>

### Siga as etapas para a aplicação funcionar corretamente:

<br>

#### 1️⃣ No terminal bash (Git), clone este repositório

```
git clone https://github.com/v-giorgio/cinema-api.git
```

<br>

#### 2️⃣ Acesse a pasta do projeto pelo terminal

```
cd cinema-api
```

<br>

#### 3️⃣ Abra o projeto no editor de texto (VSCode)

```
code .
```

<br>

#### 4️⃣ Abra o terminal e execute o comando para instalar as dependências do projeto

```
npm install
```

<br>

#### 5️⃣ Acesse o arquivo `.env.example` e copie o seu conteúdo. Crie um novo arquivo chamado `.env` e cole o conteúdo nele.

```
PORT =

DB_DIALECT=mysql
DB_USERNAME=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=
DB_DATABASE=cinema
```

#### <b>Nos campos vazios, preencha com os dados para rodar o banco de dados na sua máquina.</b>

#### <b>Atenção</b>:

- O campo PORT altera a porta utilizada para rodar a API. Se não for definida, a API rodará normalmente na porta 3007.
- O campo DB_USERNAME, por padrão, é `root`. Você pode alterá-lo se quiser utilizar uma conexão de banco diferente.
- O campo DB_PORT, por padrão, é `3306`, mas você também pode alterá-lo se quiser criar a conexão com o banco em outra porta.

<br>

#### 6️⃣ Agora você pode criar o banco de dados na sua máquina. Utilize o comando

```
npm run database
```

<br>

#### 7️⃣ Execute o comando para criar a tabela Movies no banco

```
npm run migrate
```

<br>

#### 8️⃣ (Opcional) Execute o comando para popular o banco com registros iniciais

```
npm run seed
```

<br>

#### 9️⃣ Execute a aplicação

```
npm run dev
```

<br>

---

<br>

## Deploy no Heroku

Se preferir não rodar o banco em sua máquina, você pode interagir com a API hospedada no [Heroku](https://dashboard.heroku.com/). Basta utilizar a URI:
<br>

```
https://cinema-api-resilia.herokuapp.com/
```

<br>

Na pasta `collections` deste repositório, você encontra um [arquivo .json](https://github.com/v-giorgio/cinema-api/tree/develop/collections) com requisições suportadas pela API para testar no [Postman](https://www.postman.com/) ou no [Insomnia](https://insomnia.rest/download).

<br>

---

<br>

## 🔃 Rotas da API

#### 🪧 `/movies`

Rota para <b>encontrar</b> todos os filmes.<br>
Método: `GET`

#### 🪧 `/movies/:id`

Rota para <b>encontrar</b> um filme pelo id.<br>
Método: `GET`<br>
Informe o <b>id</b> do filme que deseja encontrar na rota

#### 🪧 `/movies`

Rota para <b>adicionar</b> um filme.<br>
Método: `POST`<br>
Template para enviar os dados:
<br>

```
{
	"title": "Insira o nome do filme aqui",
	"director": "Insira o nome do(a) diretor(a) aqui",
	"language": "Insira a língua do filme aqui",
	"genre": "Insira o gênero do filme aqui",
	"release_year": "Insira a data de publicação do filme aqui",
	"rating_avg": Insira a avaliação aqui (número),
	"description": "Insira a descrição aqui",
	"duration": Insira a duração do filme (em minutos) aqui (número),
	"has_3d": Insira aqui se o filme possui 3D ou não (true - Possui | false - Não possui),
	"min_age": Insira a idade mínima para assistir ao filme aqui (número)
}
```

#### 🪧 `/movies/:id`

Rota para <b>atualizar</b> um filme pelo id.<br>
Método: `PUT`

<br>

```
{
	"title": "Insira o nome do filme ATUALIZADO aqui"

    // informe na rota o Id do filme que deseja alterar
    // você pode alterar outros campos além do `title`
}
```

#### 🪧 `/movies/:id`

Rota para <b>deletar</b> um filme pelo id.<br>
Método: `DELETE`<br>
Informe o <b>id</b> do filme que deseja deletar na rota<br>

<br>

---

<br>

<div align="center">
    <sub>Copyright © 2022</sub>
    <p>MIT licensed</p>
    <h3>✨ Desenvolvido com 💖 por Vitor Giorgio ✨</h3>
</div>
