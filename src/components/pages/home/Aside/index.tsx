import React, { useState } from 'react'
import Recomendation from './Recomendation';
import AuthenticationModal from '@/components/@shared/AuthenticationModal';
import { useBooks } from '../../../../context/BooksContext';
import { useSession } from 'next-auth/react';

export default function Aside() {
  const { books } = useBooks();
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);

  const { status } = useSession();

  function handleShowAuthenticationModal() {
    if (status === 'unauthenticated') return setShowAuthenticationModal(oldValue => !oldValue)
  }

  return (
    <aside className="mt-[105px]">
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
          <div key={`recomendation-${book._id}`} onClick={handleShowAuthenticationModal}>
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
