import clientPromise from "@/lib/MongoClient"
import { findAllBooks } from "@/repositories/BookRepositories"

export default async function page() {
  const books = await findAllBooks();
  console.log(books);
  return (
    <main className='grid grid-cols-3'>


    </main>
  )
}
