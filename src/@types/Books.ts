export type TypeCategory =
  | "Tudo"
  | "Fantasía"
  | "Mitologia"
  | "Épico"
  | "Aventura"
  | "Ficção Científica"
  | "Desenvolvimento Pessoal"
  | "HQ"
  | "Batman"
  | "Mistério"
  | "Spider-Man"
  | "Marvel"
  | "Cyberpunk"
  | "Robótica"
  | "Distopia"
  | "Produtividade"
  | "Carreira"
  | "Desenvolvimento"
  | "Boas Práticas";

export interface IUser {
  _id: string;
  picture: string;
  username: string;
}

export interface ICommentary {
  picture: string;
  username: string;
  star_rating: number;
  date: Date;
}

export interface IBook {
  _id?: string;
  title: string;
  author: string;

  description: string;
  picture: string;
  star_rating: number;

  published_at: Date;
  category: TypeCategory[];

  user: IUser;
  comments: ICommentary[];
}
