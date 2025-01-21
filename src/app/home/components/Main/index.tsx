import { ChartColumnIncreasingIcon } from 'lucide-react'
import Article from './Article';

import { useBooks } from '../../Context/BooksContext';
import LastRead from './LastRead';
import { useSession } from 'next-auth/react';

function AuthenticatedMenu() {
  return (
    <div>
      <ul className='flex items-center justify-between mt-8'>
        <li>
          <p className="text-sm font-normal text-zinc-500">Sua última leitura</p>
        </li>
        <li>
          <a href="#"
            className="text-base font-bold text-[#8381D9] hover:text-[#6a68fc] transition ease-in-out"
          >
            Ver Todos
          </a>
        </li>
      </ul>
      <LastRead />
    </div>
  )
}

export default function Main() {
  const { books } = useBooks();
  const { status } = useSession();
  return (
    <main className="grid-content py-10">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-100">
          <ChartColumnIncreasingIcon /> Início
        </h1>
        {status === 'authenticated' && <AuthenticatedMenu />}
        <div className="mt-8 w-full">
          <p className="text-sm font-normal text-zinc-500">Avaliação mais recentes</p>
          <div className="w-full">
            {books.map((book) => {
              return (
                <Article data={book} key={book._id} />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
