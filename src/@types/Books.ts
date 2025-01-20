export type TypeCategory =
  | "Fantasía"
  | "Mitologia"
  | "Épico"
  | "Aventura"
  | "Ficção Científica"
  | "Tecnologia"
  | "Desenvolvimento Pessoal"
  | "HQ"
  | "Batman"
  | "Mistério"
  | "Spider-Man"
  | "Marvel"
  | "Ficção Científica"
  | "Robôs"
  | "Futuro"
  | "Cyberpunk"
  | "Espionagem"
  | "Literatura de Desenvolvimento"
  | "Gestão"
  | "Engenharia de Software"
  | "Robótica"
  | "Distopia"
  | "Produtividade"
  | "Carreira"
  | "Desenvolvimento"
  | "Programação"
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
