'use client'

import { useBooks } from "@/context/BooksContext"
import ExplorerSVG from "@/assets/Explorer/Icon.svg"

import Image from "next/image";
import { IBook, TypeCategory } from "@/@types/Books";

import { useEffect, useState } from "react";
import Category from "@/components/pages/explorer/Category";
import Article from "@/components/pages/explorer/Article";
import { SearchIcon, X } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import DetailedBook from "@/components/pages/explorer/Sidebar/DetailedBook";



export default function Explorer() {
  const { books, booksCategory } = useBooks();
  const [activeCategory, setActiveCategory] = useState<TypeCategory>("Tudo");

  const [derivedBooks, setDerivedBooks] = useState(books);
  const [selectedBook, setSelectedBook] = useState<IBook>({} as IBook);

  const [sidebarVisible, setSidebarVisivle] = useState(false);

  function handleSidebarVisible(clickedBook: IBook) {
    setSelectedBook(clickedBook);
    setSidebarVisivle(oldValue => !oldValue)
  }

  useEffect(() => {
    if (activeCategory === 'Tudo') return setDerivedBooks(books);

    const filteredBooks = books.filter(book => book.category.includes(activeCategory));
    setDerivedBooks(filteredBooks);
  }, [books, activeCategory]);

  return (
    <main className="py-10">
      <div className="flex justify-between items-center animate-from-up-to-down">
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
      <div className="flex flex-wrap gap-3 mt-8 max-w-[95%] animate-from-up-to-down">
        {booksCategory.map((category) =>
          <Category
            category={category}
            key={`id-${category}`}
            isActive={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        )}
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10 animate-from-down-to-up">
        {derivedBooks.map(book =>
          <Article
            data={book}
            key={book._id}
            onClick={() => handleSidebarVisible(book)}
          />
        )}
      </div>

      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisivle(false)}
        position="right"
        className="bg-[#0E1116] p-5 min-w-[600px] max-w-[960px]"
        maskClassName='bg-[rgba(0,0,0,0.72)]'
        closeIcon={() => <X size={25} className="m-2 border-2 rounded-full hover:text-red-500 text-white hover:border-red-500 transition ease-in-out duration" />}
      >
        <DetailedBook book={selectedBook} />
      </Sidebar>
    </main>
  )
}
