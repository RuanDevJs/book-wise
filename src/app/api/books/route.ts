import {
  findAllBooks,
  insertCommentaryInBook,
} from "@/repositories/BookRepositories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const findAllBooksFromDb = await findAllBooks();
    const url = new URL(request.url);

    if (findAllBooksFromDb === undefined) {
      throw new Error("Error on GET books from Database");
    }

    const parsedLimit = Number(url.searchParams.get("limit"));

    if (parsedLimit) {
      const books = await findAllBooksFromDb.limit(parsedLimit).toArray();
      return NextResponse.json({ books }, { status: 200 });
    }

    const books = await findAllBooksFromDb.toArray();

    if (books && books.length) {
      return NextResponse.json({ books }, { status: 200 });
    } else {
      return NextResponse.json({ books: [] }, { status: 404 });
    }
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST() {
  await insertCommentaryInBook("678ec1cbe934e65b510ec930", {
    date: new Date(),
    picture: "https://avatars.githubusercontent.com/u/82915279?v=4",
    star_rating: 4,
    username: "Ruan Vitor",
  });
  return NextResponse.json({ message: "Deu bom" }, { status: 201 });
}
