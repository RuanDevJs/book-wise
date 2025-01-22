import React from 'react'
import { useBooks } from '../../../../context/BooksContext'
import { Star } from 'lucide-react';

export default function LastRead() {
  const { books } = useBooks();
  const stars = Array.from({ length: books[8].star_rating }, (n, index) => index)

  return (
    <div className="mt-7 flex gap-5 px-7 py-5 rounded-lg bg-[#181C2A] hover:-translate-y-3 transition ease-in-out duration-1500 hover:brightness-110 cursor-pointer last-read">
      <img src={books[8].picture} className="w-36 h-52 object-cover rounded-md" alt="" />
      <div>
        <div className='flex items-center justify-between'>
          <p className="font-normal text-zinc-500 text-sm">Há 2 dias</p>
          <div className="flex items-center gap-2">
            {stars.map((_, index) => <Star color="#8381D9" fill="#8381D9" className="border-none outline-non" key={index} />)}
          </div>
        </div>
        <div className='mt-3'>
          <h3 className="font-bold text-zinc-100 text-xl">{books[8].title}</h3>
          <p className="font-semibold text-zinc-400 text-sm">{books[8].author}</p>
        </div>
        <div className='mt-5'>
          <p className="font-normal text-zinc-500 text-base mt-2 line-clamp-3">{books[8].description}</p>
        </div>
      </div>
    </div>
  )
}
