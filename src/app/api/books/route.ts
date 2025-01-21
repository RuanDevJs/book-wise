import { findAllBooks } from "@/repositories/BookRepositories";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await findAllBooks();
    if (books !== undefined) {
      console.log("Books");
      return NextResponse.json({ books }, { status: 200 });
    }

    return NextResponse.json({ books: [] }, { status: 404 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
