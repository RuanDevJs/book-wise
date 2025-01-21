import { IBook } from "@/@types/Books";
import clientPromise from "@/lib/MongoClient";

async function initDatabase(dbName: string, collection: string) {
  const databaseClient = await clientPromise();

  if (databaseClient && databaseClient !== undefined) {
    const database = await databaseClient
      .db(dbName)
      .collection<IBook>(collection);
    return database;
  }
}

export async function findAllBooks() {
  const database = await initDatabase(process.env.DATABASE!, "books");

  if (database) {
    const booksFromDatabase = database.find();
    return booksFromDatabase;
  }
}

export async function findBookById(bookId: string) {
  const database = await initDatabase(
    process.env.DATABASE!,
    process.env.BOOKS_COLLECTION!
  );

  if (database) {
    const bookFromDatabase = await database.findOne({ _id: bookId });
    return bookFromDatabase;
  }
}
