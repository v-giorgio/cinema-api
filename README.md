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
DB_PORT=3306
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

Na pasta `collections` deste repositório, você encontra um [arquivo](https://github.com/v-giorgio/cinema-api/tree/main/collections) com requisições suportadas pela API para testar no [Postman](https://www.postman.com/) ou no [Insomnia](https://insomnia.rest/download).

<br>

---

<br>

## 🔃 Rotas da API

#### 🪧 `/movies`

Rota para <b>encontrar</b> todos os filmes.<br>
Método: `GET`<br>

Resposta:

```
[
	{
		"id": 4,
		"title": "Filme teste atualizado",
		"director": "teste",
		"language": "teste",
		"genre": "test",
		"release_year": "2020-12-12",
		"rating_avg": 20,
		"description": null,
		"duration": 100,
		"has_3d": true,
		"min_age": 10,
		"createdAt": "2022-03-13T19:08:13.000Z",
		"updatedAt": "2022-03-14T18:43:16.000Z"
	},
	{
		"id": 14,
		"title": "Filme Teste",
		"director": "Diretor Teste",
		"language": "Linguagem Teste",
		"genre": "Gênero Teste",
		"release_year": "2012-12-12",
		"rating_avg": 12,
		"description": "Descrição Teste",
		"duration": 12,
		"has_3d": true,
		"min_age": 12,
		"createdAt": "2022-03-14T18:36:36.000Z",
		"updatedAt": "2022-03-14T18:36:36.000Z"
	}
]
```

#### 🪧 `/movies/:id`

Rota para <b>encontrar</b> um filme pelo id.<br>
Método: `GET`<br>
Informe o <b>id</b> do filme que deseja encontrar na rota<br>

Resposta:<br>

`/movies/44`

```
[
	{
		"id": 44,
		"title": "teste atualizado",
		"director": "Diretor Teste",
		"language": "Linguagem Teste",
		"genre": "Gênero Teste",
		"release_year": "2012-12-12",
		"rating_avg": 12,
		"description": "Descrição Teste",
		"duration": 12,
		"has_3d": true,
		"min_age": 12,
		"createdAt": "2022-03-14T19:01:10.000Z",
		"updatedAt": "2022-03-14T19:15:40.000Z"
	}
]
```

#### 🪧 `/movies`

Rota para <b>adicionar</b> um filme.<br>
Método: `POST`<br>
Template para enviar os dados:

```
{
	"title": "Filme teste",
	"director": "teste",
	"language": "teste",
	"genre": "test",
	"release_year": "2020-12-12",
	"rating_avg": 20,
	"description": null,
	"duration": 100,
	"has_3d": true,
	"min_age": 10,
}
```

<br>
Resposta:

```
{
	"id": 4,
	"title": "Filme teste",
	"director": "teste",
	"language": "teste",
	"genre": "test",
	"release_year": "2020-12-12",
	"rating_avg": 20,
	"description": null,
	"duration": 100,
	"has_3d": true,
	"min_age": 10,
	"createdAt": "2022-03-13T19:08:13.000Z",
	"updatedAt": "2022-03-14T18:43:16.000Z"
}
```

#### 🪧 `/movies/:id`

Rota para <b>atualizar</b> um filme pelo id.<br>
Método: `PUT`<br>
Template para enviar os dados:

```
{
	"title": "Filme teste atualizado"

    // informe na rota o Id do filme que deseja alterar
    // você pode alterar outros campos além do `title`
}
```

<br>
Resposta:<br>

`/movies/4`

```
{
	"id": 4,
	"title": "Filme teste atualizado",
	"director": "teste",
	"language": "teste",
	"genre": "test",
	"release_year": "2020-12-12",
	"rating_avg": 20,
	"description": null,
	"duration": 100,
	"has_3d": true,
	"min_age": 10,
	"createdAt": "2022-03-13T19:08:13.000Z",
	"updatedAt": "2022-03-14T18:43:16.000Z"
}
```

#### 🪧 `/movies/:id`

Rota para <b>deletar</b> um filme pelo id.<br>
Método: `DELETE`<br>
Informe o <b>id</b> do filme que deseja deletar na rota<br>

Resposta:<br>

`movies/34`

```
{
	"message": "Filme 34 deletado"
}
```

<br>

---

<br>

<div align="center">
    <sub>Copyright © 2022</sub>
    <p>MIT licensed</p>
    <h3>✨ Desenvolvido com 💖 por Vitor Giorgio ✨</h3>
</div>
