import { IBook } from '@/@types/Books'
import { Star } from 'lucide-react';
import React from 'react'

interface IProps {
  data: IBook;
}

export default function Article({ data }: IProps) {
  const stars = Array.from({ length: data.star_rating }, (n, index) => index)


  return (
    <article className='py-1 mt-5'>
      <p className='font-semibold text-zinc-500 text-sm mb-3'>Há 2 dias</p>
      <div className='bg-[#181C2A] p-5 rounded-md'>
        <div className='flex items-stretch gap-5 h-full'>
          <img
            src={data.picture}
            alt=""
            className='"w-36 h-40 object-cover rounded-md'
          />

          <div className='h-40 mt-1'>
            <h2 className='text-xl font-bold text-white'>{data.title}</h2>
            <h3 className='text-sm font-semibold text-zinc-400'>{data.author}</h3>
            <div className="flex items-center gap-2 mt-auto h-full">
              {stars.map((_, index) => <Star color="#8381D9" fill="#8381D9" className="border-none outline-non" key={index} />)}
            </div>
          </div>
        </div>
        <p className='mt-3 font-normal text-zinc-300 text-base'>{data.description}</p>
      </div>
    </article>
  )
}
