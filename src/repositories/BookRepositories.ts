import { IBook, ICommentary } from "@/@types/Books";
import clientPromise from "@/lib/MongoClient";
import { ObjectId } from "mongodb";

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
  const database = await initDatabase(process.env.DATABASE!, "books");

  if (database) {
    const bookFromDatabase = await database.findOne({
      _id: new ObjectId(bookId),
    });
    return bookFromDatabase;
  }
}

export async function insertCommentaryInBook(
  bookId: string,
  commentary: ICommentary
) {
  const database = await initDatabase(process.env.DATABASE!, "books");

  if (!database) {
    throw new Error(
      "Could not insert comment in Book - Database is not connected!"
    );
  }

  try {
    const updatedBookFromDatabase = await database.findOneAndUpdate(
      { _id: new ObjectId(bookId) },
      { $push: { comments: commentary } },
      { returnDocument: "after" }
    );

    return updatedBookFromDatabase;
  } catch (error) {
    if (error instanceof Error)
      throw new Error(error.message, { cause: error.cause });
  }
}
