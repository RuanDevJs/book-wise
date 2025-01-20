import { IBook } from "@/@types/Books";

export const API: IBook = {
  title: 'O Hobbit',
  description: '"O Hobbit", de J.R.R. Tolkien, narra a jornada de Bilbo Bolseiro, um hobbit tranquilo que é arrastado para uma aventura épica. Guiado por Gandalf e acompanhado por anões, Bilbo enfrenta trolls, elfos, e dragões enquanto descobre coragem e astúcia inesperadas. No centro, está a busca pelo tesouro de Smaug.',
  picture: 'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg',
  author: "J.R.R Tolkien",
  published_at: new Date(),
  star_rating: 5,
  comments: [],
  user: {
    _id: '313123',
    picture: 'https://avatars.githubusercontent.com/u/82915279?v=4',
    username: 'RuanDevJs'
  }
}
