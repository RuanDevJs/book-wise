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
  _id: string;
  title: string;
  author: string;

  description: string;
  picture: string;
  star_rating: number;

  published_at: Date;

  user: IUser;
  comments: ICommentary[];
}
