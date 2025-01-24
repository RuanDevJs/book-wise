import { ICommentary } from "@/@types/Books";
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

export async function POST(request: NextRequest) {
  try {
    const payloadData = (await request.json()) as ICommentary;
    const url = new URL(request.url);
    const searchParamSelectedBook = url.searchParams.get("selected_book");

    if (!payloadData || !payloadData.email) {
      return NextResponse.json(
        { error: "Error on POST /books - Payload is not correct!" },
        { status: 400 }
      );
    }

    if (!searchParamSelectedBook) {
      return NextResponse.json(
        { error: "Error on POST /books - missing query param selected_book" },
        { status: 400 }
      );
    }
    const updatedBook = await insertCommentaryInBook(
      searchParamSelectedBook,
      payloadData
    );

    if (updatedBook && updatedBook._id) {
      return NextResponse.json({ book: updatedBook }, { status: 201 });
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
