import { IBook } from "@/@types/Books";

// export const API: IBook[] = [
//   {
//     title: "O Hobbit",
//     description:
//       '"O Hobbit", de J.R.R. Tolkien, narra a jornada de Bilbo Bolseiro, um hobbit tranquilo que é arrastado para uma aventura épica. Guiado por Gandalf e acompanhado por anões, Bilbo enfrenta trolls, elfos, e dragões enquanto descobre coragem e astúcia inesperadas. No centro, está a busca pelo tesouro de Smaug.',
//     picture: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
//     author: "J.R.R Tolkien",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "313123",
//       picture: "https://avatars.githubusercontent.com/u/82915279?v=4",
//       username: "Ruan Vitor",
//     },
//   },
//   {
//     title: "O Senhor dos Anéis",
//     description:
//       "A trilogia de J.R.R. Tolkien segue Frodo Bolseiro em sua missão para destruir o Um Anel, uma poderosa relíquia criada por Sauron. A jornada épica envolve amizade, coragem e sacrifício, enquanto personagens enfrentam forças sombrias para salvar a Terra Média do domínio do mal.",
//     picture:
//       "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
//     author: "J.R.R Tolkien",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "313123",
//       picture:
//         "https://yt3.googleusercontent.com/_AxtzAIZbYsYNn0IlfRmSOTcLZhYFVEjGyi1O7UtO6DUPXoW1mE3v3fe48OQfcaimil2_z7h=s900-c-k-c0x00ffffff-no-rj",
//       username: "Guilherme Freire",
//     },
//   },
//   {
//     title: "O Silmarillion",
//     description:
//       'Em "O Silmarillion", J.R.R. Tolkien explora a mitologia da Terra Média. O livro narra a criação do mundo, os feitos heroicos dos elfos e a trágica busca pelos Silmarils, joias sagradas roubadas por Morgoth. É uma saga de amor, ambição e destino, fundamental para compreender o universo de Tolkien.',
//     picture: "https://m.media-amazon.com/images/I/81MoknVer8L.jpg",
//     author: "J.R.R Tolkien",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "313123",
//       picture: "https://r2.padrepauloricardo.org/ncakc83s112nr0zbwfaw1tht00ng",
//       username: "Padre Paulo Ricardo",
//     },
//   },
//   {
//     title: "Neuromancer",
//     description:
//       "Em 'Neuromancer', de William Gibson, o hacker Case é recrutado para um trabalho perigoso por um enigmático mercenário e uma inteligência artificial. Ambientado em um futuro cyberpunk, o romance mistura tecnologia, espionagem e reflexões sobre humanidade e consciência, sendo pioneiro na literatura de ficção científica.",
//     picture: "https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg",
//     author: "William Gibson",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "6f4a32be-8f44-401b-8e1e-974c6e4b22f5",
//       picture:
//         "https://s2-ge.glbimg.com/S0W2Z605TJwAGGgJccr4r235w_o=/0x0:1080x1176/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/U/Q/bgErHeRe6wkFNEHCW6bQ/fyhlsvzxgaedm4l.jpg",
//       username: "Ronaldo Nazário",
//     },
//   },
//   {
//     title: "Eu, Robô",
//     description:
//       "Em 'Eu, Robô', de Isaac Asimov, nove contos interligados exploram a interação entre humanos e robôs, regidos pelas Três Leis da Robótica. A obra reflete dilemas éticos, avanços tecnológicos e o impacto da inteligência artificial, consolidando-se como um marco da ficção científica.",
//     picture:
//       "https://m.media-amazon.com/images/I/61ooZHl+CTL._AC_UF1000,1000_QL80_.jpg",
//     author: "Isaac Asimov",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "12fa6573-cdbf-49aa-851d-3b459e87189e",
//       picture:
//         "https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg",
//       username: "Neymar Júnior",
//     },
//   },
//   {
//     title: "Blade Runner",
//     description:
//       "'Blade Runner', de Philip K. Dick, o caçador de androides Rick Deckard enfrenta dilemas morais enquanto persegue replicantes ilegais em um mundo devastado. A obra inspira reflexões sobre identidade, empatia e o significado de ser humano, servindo de base para o filme Blade Runner.",
//     picture:
//       "https://m.media-amazon.com/images/I/61xuJwg9fiL._AC_UF1000,1000_QL80_.jpg",
//     author: "Philip K. Dick",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "8e6b45fa-92f1-4052-95e2-4c67325d1a37",
//       picture:
//         "https://i.pinimg.com/736x/c1/4f/8d/c14f8d8073b31b48a4c4b3de8163943f.jpg",
//       username: "Kaká",
//     },
//   },
//   {
//     title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
//     description:
//       "Em '14 Hábitos de Desenvolvedores Altamente Produtivos', Zeno Rocha compartilha hábitos práticos para programadores que desejam aumentar sua produtividade, melhorar suas habilidades e alcançar um equilíbrio saudável entre trabalho e vida pessoal. O livro aborda estratégias inspiradoras e ações práticas para crescimento contínuo.",
//     author: "Zeno Rocha",
//     picture:
//       "https://m.media-amazon.com/images/I/613-pa+n7cL._AC_UF1000,1000_QL80_.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "c2d3f8ab-4b74-4fd1-b8a6-abe44d9bce23",
//       picture:
//         "https://www.lfparish.org/uploaded/Little_Flower_Parish/YM/IMG_3042.jpeg",
//       username: "Carlo Acutis",
//     },
//   },
//   {
//     title: "O Programador Pragmático",
//     description:
//       "Em 'O Programador Pragmático', Andy Hunt e Dave Thomas oferecem conselhos práticos para programadores se tornarem mais eficientes e adaptáveis. O livro abrange desde habilidades técnicas até mentalidades estratégicas, ajudando profissionais a lidar com problemas complexos e evoluir continuamente em suas carreiras.",
//     author: "Andy Hunt e Dave Thomas",
//     picture: "https://m.media-amazon.com/images/I/61hewOW+8zL.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "c2d3f8ab-4b74-4fd1-b8a6-abe44d9bce23",
//       picture:
//         "https://www.lfparish.org/uploaded/Little_Flower_Parish/YM/IMG_3042.jpeg",
//       username: "Carlo Acutis",
//     },
//   },
//   {
//     title: "Código Limpo",
//     description:
//       "Em 'Código Limpo', Robert C. Martin apresenta práticas essenciais para escrever código claro, legível e de fácil manutenção. O livro aborda técnicas para melhorar a qualidade do software e promover uma cultura de boas práticas entre desenvolvedores, tornando-se um guia indispensável na engenharia de software.",
//     author: "Robert C. Martin",
//     picture:
//       "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF894,1000_QL80_.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "a7d4f3e5-4f92-4927-911e-3c3e3b0a0a1b",
//       picture:
//         "https://comshalom.org/wp-content/uploads/2021/10/Sandra-1-1-scaled-1-480x713.jpg",
//       username: "Sandra Sabattini",
//     },
//   },
//   {
//     title: "Batman: Corte das Corujas",
//     description:
//       "Em 'Batman: Corte das Corujas', escrita por Scott Snyder e ilustrada por Greg Capullo, o Cavaleiro das Trevas enfrenta uma sociedade secreta que controla Gotham City das sombras há séculos. A trama combina mistério e ação, revelando segredos sombrios sobre a cidade e o passado de Bruce Wayne.",
//     author: "Scott Snyder e Greg Capullo",
//     picture:
//       "https://m.media-amazon.com/images/I/91mH07aKF8L._AC_UF1000,1000_QL80_.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "5d0f94c8-cc23-4a1e-8055-76973c9a6bcf",
//       picture:
//         "https://api.cyberclass.com.br/storage/avatar/8nm/bc1PQd7ALlQ9AiQKDX3KJH805o9yUMm3HXDy6laI.png",
//       username: "Peter Jordan",
//     },
//   },
//   {
//     title: "A Última Caçada de Kraven",
//     description:
//       "Em 'A Última Caçada de Kraven', escrita por J.M. DeMatteis e ilustrada por Mike Zeck, o Homem-Aranha enfrenta Kraven, que busca provar sua superioridade definitiva. A história é marcada por uma abordagem sombria e psicológica, tornando-se uma das HQs mais icônicas do universo Marvel.",
//     author: "J.M. DeMatteis e Mike Zeck",
//     picture:
//       "https://m.media-amazon.com/images/I/A1jk2ppjsCL._AC_UF1000,1000_QL80_.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "7f1b92e6-0a12-4d94-96cd-3cbe3a2b12ea",
//       picture:
//         "https://yt3.googleusercontent.com/4YWXz2jC7m9haHfdJwLMPhfqiqygjn9lzKjo8os-1N-IEVQGds5Whs4OUQK6HP2g6oK3lp_FEw=s900-c-k-c0x00ffffff-no-rj",
//       username: "Vinheteiro",
//     },
//   },
//   {
//     title: "Desafio Infinito",
//     description:
//       "Em 'Desafio Infinito', escrita por Jim Starlin e ilustrada por George Pérez e Ron Lim, Thanos busca o poder absoluto ao reunir as Joias do Infinito. Os heróis do universo Marvel se unem em uma batalha épica para impedir o titã louco de eliminar metade da existência.",
//     author: "Jim Starlin, George Pérez e Ron Lim",
//     picture:
//       "https://m.media-amazon.com/images/I/A1Sq8q77OfL._AC_UF1000,1000_QL80_.jpg",
//     published_at: new Date(),
//     star_rating: 5,
//     comments: [],
//     user: {
//       _id: "2e3c57f7-8fd6-4b82-bfc1-312c3e5e26cd",
//       picture:
//         "https://yt3.googleusercontent.com/5eaYN2-Qc-8c6mmhRLFjGTG_J4QH7Fxv_oAc6fDcj_mJjEqVo7qYNceBkIvmFjRL9mfq3g1GDaI=s900-c-k-c0x00ffffff-no-rj",
//       username: "Leonardo Stronda",
//     },
//   },
// ];

export const API: IBook[] = [
  {
    title: "O Hobbit",
    description:
      '"O Hobbit", de J.R.R. Tolkien, narra a jornada de Bilbo Bolseiro, um hobbit tranquilo que é arrastado para uma aventura épica. Guiado por Gandalf e acompanhado por anões, Bilbo enfrenta trolls, elfos, e dragões enquanto descobre coragem e astúcia inesperadas. No centro, está a busca pelo tesouro de Smaug.',
    picture: "https://m.media-amazon.com/images/I/91M9xPIf10L.jpg",
    author: "J.R.R Tolkien",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "0777ee47-f553-4949-8ea7-95e583a4b052",
      picture: "https://avatars.githubusercontent.com/u/82915279?v=4",
      username: "Ruan Vitor",
    },
    category: ["Fantasía", "Aventura"],
  },
  {
    title: "O Senhor dos Anéis",
    description:
      "A trilogia de J.R.R. Tolkien segue Frodo Bolseiro em sua missão para destruir o Um Anel, uma poderosa relíquia criada por Sauron. A jornada épica envolve amizade, coragem e sacrifício, enquanto personagens enfrentam forças sombrias para salvar a Terra Média do domínio do mal.",
    picture:
      "https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg",
    author: "J.R.R Tolkien",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "41362f54-f931-4101-a8fc-817d2588f32d",
      picture:
        "https://yt3.googleusercontent.com/_AxtzAIZbYsYNn0IlfRmSOTcLZhYFVEjGyi1O7UtO6DUPXoW1mE3v3fe48OQfcaimil2_z7h=s900-c-k-c0x00ffffff-no-rj",
      username: "Guilherme Freire",
    },
    category: ["Fantasía", "Aventura", "Épico"],
  },
  {
    title: "O Silmarillion",
    description:
      'Em "O Silmarillion", J.R.R. Tolkien explora a mitologia da Terra Média. O livro narra a criação do mundo, os feitos heroicos dos elfos e a trágica busca pelos Silmarils, joias sagradas roubadas por Morgoth. É uma saga de amor, ambição e destino, fundamental para compreender o universo de Tolkien.',
    picture: "https://m.media-amazon.com/images/I/81MoknVer8L.jpg",
    author: "J.R.R Tolkien",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "77bbaaee-d76a-42a6-bcb5-9d3c5d5f4eb7",
      picture: "https://r2.padrepauloricardo.org/ncakc83s112nr0zbwfaw1tht00ng",
      username: "Padre Paulo Ricardo",
    },
    category: ["Fantasía", "Mitologia"],
  },
  {
    title: "Neuromancer",
    description:
      "Em 'Neuromancer', de William Gibson, o hacker Case é recrutado para um trabalho perigoso por um enigmático mercenário e uma inteligência artificial. Ambientado em um futuro cyberpunk, o romance mistura tecnologia, espionagem e reflexões sobre humanidade e consciência, sendo pioneiro na literatura de ficção científica.",
    picture: "https://m.media-amazon.com/images/I/91Bx5ilP+EL.jpg",
    author: "William Gibson",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "6f4a32be-8f44-401b-8e1e-974c6e4b22f5",
      picture:
        "https://s2-ge.glbimg.com/S0W2Z605TJwAGGgJccr4r235w_o=/0x0:1080x1176/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/U/Q/bgErHeRe6wkFNEHCW6bQ/fyhlsvzxgaedm4l.jpg",
      username: "Ronaldo Nazário",
    },
    category: ["Ficção Científica", "Cyberpunk"],
  },
  {
    title: "Eu, Robô",
    description:
      "Em 'Eu, Robô', de Isaac Asimov, nove contos interligados exploram a interação entre humanos e robôs, regidos pelas Três Leis da Robótica. A obra reflete dilemas éticos, avanços tecnológicos e o impacto da inteligência artificial, consolidando-se como um marco da ficção científica.",
    picture:
      "https://m.media-amazon.com/images/I/61ooZHl+CTL._AC_UF1000,1000_QL80_.jpg",
    author: "Isaac Asimov",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "12fa6573-cdbf-49aa-851d-3b459e87189e",
      picture:
        "https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg",
      username: "Neymar Júnior",
    },
    category: ["Ficção Científica", "Robótica"],
  },
  {
    title: "Blade Runner",
    description:
      "'Blade Runner', de Philip K. Dick, o caçador de androides Rick Deckard enfrenta dilemas morais enquanto persegue replicantes ilegais em um mundo devastado. A obra inspira reflexões sobre identidade, empatia e o significado de ser humano, servindo de base para o filme Blade Runner.",
    picture:
      "https://m.media-amazon.com/images/I/61xuJwg9fiL._AC_UF1000,1000_QL80_.jpg",
    author: "Philip K. Dick",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "8e6b45fa-92f1-4052-95e2-4c67325d1a37",
      picture:
        "https://i.pinimg.com/736x/c1/4f/8d/c14f8d8073b31b48a4c4b3de8163943f.jpg",
      username: "Kaká",
    },
    category: ["Ficção Científica", "Distopia"],
  },
  {
    title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
    description:
      "Em '14 Hábitos de Desenvolvedores Altamente Produtivos', Zeno Rocha compartilha hábitos práticos para programadores que desejam aumentar sua produtividade, melhorar suas habilidades e alcançar um equilíbrio saudável entre trabalho e vida pessoal. O livro aborda estratégias inspiradoras e ações práticas para crescimento contínuo.",
    author: "Zeno Rocha",
    picture:
      "https://m.media-amazon.com/images/I/613-pa+n7cL._AC_UF1000,1000_QL80_.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "c2d3f8ab-4b74-4fd1-b8a6-abe44d9bce23",
      picture:
        "https://www.lfparish.org/uploaded/Little_Flower_Parish/YM/IMG_3042.jpeg",
      username: "Carlo Acutis",
    },
    category: ["Desenvolvimento Pessoal", "Produtividade"],
  },
  {
    title: "O Programador Pragmático",
    description:
      "Em 'O Programador Pragmático', Andy Hunt e Dave Thomas oferecem conselhos práticos para programadores se tornarem mais eficientes e adaptáveis. O livro abrange desde habilidades técnicas até mentalidades estratégicas, ajudando profissionais a lidar com problemas complexos e evoluir continuamente em suas carreiras.",
    author: "Andy Hunt e Dave Thomas",
    picture: "https://m.media-amazon.com/images/I/61hewOW+8zL.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "c2d3f8ab-4b74-4fd1-b8a6-abe44d9bce23",
      picture:
        "https://www.lfparish.org/uploaded/Little_Flower_Parish/YM/IMG_3042.jpeg",
      username: "Carlo Acutis",
    },
    category: ["Desenvolvimento", "Carreira", "Programação"],
  },
  {
    title: "Código Limpo",
    description:
      "Em 'Código Limpo', Robert C. Martin apresenta práticas essenciais para escrever código claro, legível e de fácil manutenção. O livro aborda técnicas para melhorar a qualidade do software e promover uma cultura de boas práticas entre desenvolvedores, tornando-se um guia indispensável na engenharia de software.",
    author: "Robert C. Martin",
    picture:
      "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF894,1000_QL80_.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "a7d4f3e5-4f92-4927-911e-3c3e3b0a0a1b",
      picture:
        "https://comshalom.org/wp-content/uploads/2021/10/Sandra-1-1-scaled-1-480x713.jpg",
      username: "Sandra Sabattini",
    },
    category: ["Desenvolvimento", "Boas Práticas", "Programação"],
  },
  {
    title: "Batman: Corte das Corujas",
    description:
      "Em 'Batman: Corte das Corujas', escrita por Scott Snyder e ilustrada por Greg Capullo, o Cavaleiro das Trevas enfrenta uma sociedade secreta que controla Gotham City das sombras há séculos. A trama combina mistério e ação, revelando segredos sombrios sobre a cidade e o passado de Bruce Wayne.",
    author: "Scott Snyder e Greg Capullo",
    picture:
      "https://m.media-amazon.com/images/I/91mH07aKF8L._AC_UF1000,1000_QL80_.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "5d0f94c8-cc23-4a1e-8055-76973c9a6bcf",
      picture:
        "https://api.cyberclass.com.br/storage/avatar/8nm/bc1PQd7ALlQ9AiQKDX3KJH805o9yUMm3HXDy6laI.png",
      username: "Peter Jordan",
    },
    category: ["HQ", "Batman", "Mistério"],
  },
  {
    title: "A Última Caçada de Kraven",
    description:
      "Em 'A Última Caçada de Kraven', escrita por J.M. DeMatteis e ilustrada por Mike Zeck, o Homem-Aranha enfrenta Kraven, que busca provar sua superioridade definitiva. A história é marcada por uma abordagem sombria e psicológica, tornando-se uma das HQs mais icônicas do universo Marvel.",
    author: "J.M. DeMatteis e Mike Zeck",
    picture:
      "https://m.media-amazon.com/images/I/A1jk2ppjsCL._AC_UF1000,1000_QL80_.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "7f1b92e6-0a12-4d94-96cd-3cbe3a2b12ea",
      picture:
        "https://yt3.googleusercontent.com/4YWXz2jC7m9haHfdJwLMPhfqiqygjn9lzKjo8os-1N-IEVQGds5Whs4OUQK6HP2g6oK3lp_FEw=s900-c-k-c0x00ffffff-no-rj",
      username: "Vinheteiro",
    },
    category: ["HQ", "Spider-Man", "Aventura"],
  },
  {
    title: "Desafio Infinito",
    description:
      "Em 'Desafio Infinito', escrita por Jim Starlin e ilustrada por George Pérez e Ron Lim, Thanos busca o poder absoluto ao reunir as Joias do Infinito. Os heróis do universo Marvel se unem em uma batalha épica para impedir o titã louco de eliminar metade da existência.",
    author: "Jim Starlin, George Pérez e Ron Lim",
    picture:
      "https://m.media-amazon.com/images/I/A1Sq8q77OfL._AC_UF1000,1000_QL80_.jpg",
    published_at: new Date(),
    star_rating: 5,
    comments: [],
    user: {
      _id: "2e3c57f7-8fd6-4b82-bfc1-312c3e5e26cd",
      picture:
        "https://yt3.googleusercontent.com/5eaYN2-Qc-8c6mmhRLFjGTG_J4QH7Fxv_oAc6fDcj_mJjEqVo7qYNceBkIvmFjRL9mfq3g1GDaI=s900-c-k-c0x00ffffff-no-rj",
      username: "Leonardo Stronda",
    },
    category: ["HQ", "Marvel", "Aventura"],
  },
];
