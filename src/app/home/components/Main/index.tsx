import { IBook } from '@/@types/Books';
import { ChartColumnIncreasingIcon } from 'lucide-react'
import Article from './Article';

interface IProps {
  books: IBook[];
}

export default function Main({ books }: IProps) {
  return (
    <main className="grid-content py-10">
      <h1 className="flex items-center gap-2 text-2xl font-bold text-zinc-100">
        <ChartColumnIncreasingIcon /> Início
      </h1>
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
    </main>
  )
}
