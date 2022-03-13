"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Moonlight",
          director: "Barry Jenkins",
          language: "Inglês",
          genre: "drama",
          release_year: "2016-10-21",
          rating_avg: 98,
          description:
            "Em Moonlight: Sob a Luz do Luar, acompanhamos três momentos da vida de Chiron, um jovem negro morador de uma comunidade pobre de Miami. Do bullying na infância, passando pela crise de identidade da adolescência e a tentação do universo do crime e das drogas, este é um poético estudo de personagem.",
          duration: 111,
          has_3d: false,
          min_age: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nós",
          director: "Jordan Peele",
          language: "Inglês",
          genre: "terror",
          release_year: "2019-03-22",
          rating_avg: 93,
          description:
            "As férias tranquilas de uma família se transformam em um pesadelo quando sósias sinistros batem à sua porta tarde da noite.",
          duration: 116,
          has_3d: false,
          min_age: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bacurau",
          director: "Kleber Mendonça",
          language: "Português",
          genre: "mistério",
          release_year: "2020-05-12",
          rating_avg: 93,
          description:
            "Num futuro próximo, Bacurau, uma pequena cidade brasileira no oeste de Pernambuco, lamenta a perda de sua matriarca, Carmelita (Lia de Itamaracá), que viveu até os 94 anos. Dias depois, seus habitantes aos poucos percebem algo estranho acontecer na região: enquanto drones passeiam pelos céus, estrangeiros chegam pela primeira vez na cidade com planos de exterminar toda a população ali residente, carros são atingidos por tiros e cadáveres começam a aparecer. Os habitantes chegam à conclusão de que estão sendo atacados. Resta identificar o inimigo e criar coletivamente um meio de defesa.",
          duration: 132,
          has_3d: false,
          min_age: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seu nome gravado em mim",
          director: "Kuang-Hui Liu",
          language: "Chinês",
          genre: "romance",
          release_year: "2020-09-30",
          rating_avg: 88,
          description:
            "Em 1987, após o fim da lei marcial em Taiwan, Jia-han e Birdy se apaixonam e são alvo de homofobia, pressão familiar e estigma social.",
          duration: 118,
          has_3d: false,
          min_age: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "A Viagem de Chihiro",
          director: "Hayao Miyazaki",
          language: "Japonês",
          genre: "fantasia",
          release_year: "2001-07-20",
          rating_avg: 97,
          description:
            "Chihiro é uma garota de 10 anos que acredita que todo o universo deve atender aos seus caprichos. Ao descobrir que vai se mudar, ela fica furiosa. Na viagem, Chihiro percebe que seu pai se perdeu no caminho para a nova cidade, indo parar defronte um túnel aparentemente sem fim, guardado por uma estranha estátua. Curiosos, os pais de Chihiro decidem entrar no túnel e Chihiro vai com eles. Chegam numa cidade sem nenhum habitante e os pais de Chihiro decidem comer a comida de uma das casas, enquanto a menina passeia. Ela encontra com Haku, garoto que lhe diz para ir embora o mais rápido possível e ao reencontrar seus pais, Chihiro fica surpresa ao ver que eles se transformaram em gigantescos porcos. É o início da jornada de Chihiro por um mundo fantasma, povoado por seres fantásticos, no qual humanos não são bem-vindos.",
          duration: 125,
          has_3d: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
