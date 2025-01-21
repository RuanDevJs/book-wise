'use client'

import { useEffect, useState } from "react";
import Header from "./components/Header";

import { IBook } from "@/@types/Books";
import api from "@/lib/Axios";

import { ChartColumnIncreasingIcon } from "lucide-react";
import Article from "./components/Article";
import Aside from "./components/Aside";

export default function Home() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fecthBooks() {
      const response = await (await api.get('/books')).data.books as IBook[];
      setBooks(response);
      setLoading(false);
    }

    fecthBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='grid-home p-3 bg-[#0E1116] h-full relative'>
      <Header />
      <main className="grid-content py-10">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-100">
          <ChartColumnIncreasingIcon /> Início
        </h1>
        <div className="mt-8 w-full">
          <p className="text-sm font-normal text-zinc-500">Avaliação mais recentes</p>
          <div className="w-full">
            {books && books?.map((book) => {
              return (
                <Article data={book} key={book._id} />
              )
            })}
          </div>
        </div>
      </main>
      <aside className="grid-aside mt-[105px]">
        <div className="mb-7 flex items-center justify-between">
          <p className="text-base font-medium text-zinc-500 ">Livros Populares</p>
          <p className="text-base font-bold text-[#8381D9]">Ver Todos</p>
        </div>
        {books && books?.map((book) => {
          return (
            <Aside data={book} key={book._id} />
          )
        })}

      </aside>
    </div>
  )
}
