import { findAllBooks } from "@/repositories/BookRepositories";

export async function GET() {
  const books = await findAllBooks();
  return books;
}
