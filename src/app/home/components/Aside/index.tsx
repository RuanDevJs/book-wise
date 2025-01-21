import React, { useState } from 'react'
import Recomendation from './Recomendation';
import AuthenticationModal from '@/components/AuthenticationModal';
import { useBooks } from '../../Context/BooksContext';

export default function Aside() {
  const { books } = useBooks();
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);

  function handleShowAuthenticationModal() {
    setShowAuthenticationModal(oldValue => !oldValue)
  }

  return (
    <aside className="grid-aside mt-[105px]">
      <div className="mb-7 flex items-center justify-between">
        <p className="text-base font-medium text-zinc-500 ">Livros Populares</p>
        <a href="#"
          className="text-base font-bold text-[#8381D9] hover:text-[#6a68fc] transition ease-in-out"
        >
          Ver Todos
        </a>
      </div>
      {books && books.map((book) => {
        return (
          <div key={`recomendation-${book._id}`} onClick={() => setShowAuthenticationModal(true)}>
            <Recomendation data={book} />
          </div>
        )
      })}
      <AuthenticationModal
        showModal={showAuthenticationModal}
        handleShowModal={handleShowAuthenticationModal}
      />
    </aside>
  )
}
