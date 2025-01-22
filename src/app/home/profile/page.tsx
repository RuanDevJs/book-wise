'use client'

import Article from "@/components/pages/profile/Article";
import { useBooks } from "@/context/BooksContext";
import { Bookmark, BookOpen, IdCard, LibraryBig, SearchIcon, User2 } from "lucide-react"
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const OPTIONS = ["Fantasía",
  "Mitologia",
  "Épico",
  "Aventura",
  "Ficção Científica",
  "Tecnologia",
  "Desenvolvimento Pessoal",
  "HQ",
  "Batman",
  "Mistério",
  "Spider-Man",
  "Marvel",
  "Ficção Científica",
  "Robôs",
  "Futuro",
  "Cyberpunk",
  "Espionagem",
  "Literatura de Desenvolvimento",
  "Gestão",
  "Engenharia de Software",
  "Robótica",
  "Distopia",
  "Produtividade",
  "Carreira",
  "Desenvolvimento",
  "Programação",
  "Boas Práticas"]

export default function Profile() {
  const { books } = useBooks();
  const { data, status } = useSession();

  const router = useRouter();
  const searchParams = useSearchParams();

  const inputRef = useRef<HTMLInputElement>(null);
  const [derivedBook, setDerivedBooks] = useState(books);

  if (status !== 'loading' && status === 'unauthenticated') return router.push('/home')

  function handleSearchBook() {
    if (inputRef && inputRef.current) {
      const inputValue = inputRef.current.value;

      if (inputValue.length) return router.push(`/home/profile?bookName=${inputValue}`);
      else return router.push('/home/profile')
    }
  }

  useEffect(() => {
    const paramBookName = searchParams.get('bookName');
    const findBookByName = books.filter(book => book.title === paramBookName);

    if (paramBookName && paramBookName.length) {
      if (findBookByName.length) return setDerivedBooks(findBookByName)
      else return alert('Livro não encontrado')
    } else {
      setDerivedBooks(books);
    }

  }, [searchParams, books])

  return (
    <div className="py-10 grid grid-cols-[2fr_1fr] gap-10 items-start">
      <main className="animate-from-up-to-down">
        <div className="flex flex-col gap-3">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-100">
            <User2 /> Perfil
          </h1>
          <div className="bg-[#0E1116] border border-[#303F73] rounded-md flex items-center">
            <input
              type="text"
              placeholder="Buscar livro avaliado"
              className="w-[90%] bg-transparent outline-none py-3 px-5 text-white font-medium text-base"
              ref={inputRef}
            />
            <button className="w-[10%] h-full flex items-center justify-center">
              <SearchIcon size={25} color="#303F73" className="hover:brightness-150 transition ease-in-out duration-150" onClick={handleSearchBook} />
            </button>
          </div>
        </div>
        {derivedBook.map((book) => <Article data={book} key={book._id} />)}
      </main>
      <aside className="border-l border-[#181C2A] mt-[45px] px-1 block animate-from-down-to-up ">
        <div
          className="flex flex-col after:mt-5 items-center text-center after:block after:bg-gradient-to-r after:from-[#7FD1CC] after:to-[#9694F5] after:w-10 after:h-1.5 after:rounded-md"
        >
          <img src={data?.user?.image} alt="" className="w-24 h-24 rounded-full mb-3" />
          <h3 className="text-lg text-zinc-100 font-bold">{data?.user?.name}</h3>
          <p className="text-sm text-zinc-500 font-normal mt-1">Membro desde 2019</p>
        </div>
        <ul className="mt-10 px-8 pb-5">
          <li className="flex items-center gap-4 mt-5">
            <BookOpen size={28} color="#50B2C0" />
            <div>
              <p className="font-bold text-base text-white">3853</p>
              <span className="font-normal text-sm text-zinc-400">Páginas lidas</span>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-5">
            <LibraryBig size={28} color="#50B2C0" />
            <div>
              <p className="font-bold text-base text-white">10</p>
              <span className="font-normal text-sm text-zinc-400">Livros avaliados</span>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-5">
            <IdCard size={28} color="#50B2C0" />
            <div>
              <p className="font-bold text-base text-white">8</p>
              <span className="font-normal text-sm text-zinc-400">Autores lidos</span>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-5">
            <Bookmark size={28} color="#50B2C0" />
            <div>
              <p className="font-bold text-base text-white">Computação</p>
              <span className="font-normal text-sm text-zinc-400">Categoria mais lida</span>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  )
}
