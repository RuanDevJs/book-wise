'use client'

import Header from "./components/Header";
import Loading from "../../components/Loading";

import Aside from "./components/Aside";
import Main from "./components/Main";

import { useBooks } from "./Context/BooksContext";
import { useSession } from "next-auth/react";

export default function Home() {
  const { loadingBooks } = useBooks();
  const { status } = useSession();

  if (loadingBooks || status === 'loading') {
    return <Loading />
  }

  return (
    <div className='grid-home p-3 bg-[#0E1116] h-full relative'>
      <Header />
      <Main />
      <Aside />
    </div>
  )
}
