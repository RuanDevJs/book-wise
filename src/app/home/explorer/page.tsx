'use client'

import { useBooks } from "@/context/BooksContext"
import ExplorerSVG from "@/assets/Explorer/Icon.svg"

import Image from "next/image";
import { TypeCategory } from "@/@types/Books";

import { useEffect, useState } from "react";
import Category from "@/components/pages/explorer/Category";
import Article from "@/components/pages/explorer/Article";
import { SearchIcon } from "lucide-react";



export default function Explorer() {
  const { books, booksCategory } = useBooks();
  const [activeCategory, setActiveCategory] = useState<TypeCategory>("Tudo");

  const [derivedBooks, setDerivedBooks] = useState(books);

  useEffect(() => {
    if (activeCategory === 'Tudo') return setDerivedBooks(books);

    const filteredBooks = books.filter(book => book.category.includes(activeCategory));
    setDerivedBooks(filteredBooks);
  }, [books, activeCategory]);

  return (
    <main className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-100">
          <Image src={ExplorerSVG} alt="" />
          Explorar
        </h1>
        <div className="bg-[#0E1116] border border-[#303F73] rounded-md flex items-center w-72">
          <input
            type="text"
            placeholder="Buscar livro avaliado"
            className="w-[85%] bg-transparent outline-none py-3 px-5 text-white font-medium text-base"
          />
          <button className="w-[10%] h-full flex items-center justify-center">
            <SearchIcon size={25} color="#303F73" className="hover:brightness-150 transition ease-in-out duration-150" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-8 max-w-[95%]">
        {booksCategory.map((category) =>
          <Category
            category={category}
            key={`id-${category}`}
            isActive={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        )}
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {derivedBooks.map(book => <Article data={book} key={book._id} />)}
      </div>
    </main>
  )
}
