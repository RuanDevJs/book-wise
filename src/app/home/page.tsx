'use client'

import { useEffect, useState } from "react";
import Header from "./components/Header";

import { IBook } from "@/@types/Books";
import api from "@/lib/Axios";

import Loading from "../../components/Loading";

import Aside from "./components/Aside";
import Main from "./components/Main";

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
    return <Loading />
  }

  return (
    <div className='grid-home p-3 bg-[#0E1116] h-full relative'>
      <Header />
      <Main books={books} />
      <Aside books={books} />

    </div>
  )
}
