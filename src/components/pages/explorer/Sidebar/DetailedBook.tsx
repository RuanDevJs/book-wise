import { IBook } from "@/@types/Books"
import { Bookmark, BookOpen, CheckIcon, Star, X } from "lucide-react";
import { useSession } from "next-auth/react";

interface IProps {
  book: IBook;
}

export default function DetailedBook({ book }: IProps) {
  const { data } = useSession();
  const stars = Array.from({ length: book.star_rating }, (n, index) => index);

  return (
    <section className="px-5">
      <div className="bg-[#181C2A] p-5 mt-5 rounded-lg">
        <div className="flex items-start h-[280px] gap-8 overflow-hidden">
          <img src={book.picture} alt="" className="w-52 h-full object-cover rounded-lg" />
          <div className="h-full py-5">
            <h3 className="text-2xl text-white font-bold">{book.title}</h3>
            <p className="text-base text-zinc-500 font-normal py-1">{book.author}</p>
            <div className="mt-28">
              <div className="flex gap-1">
                {stars.map((_, index) =>
                  <Star
                    color="#8381D9"
                    fill="#8381D9"
                    className="border-none outline-none mt-6 opacity-85"
                    size={24}
                    key={`recomendation-${index}`}
                  />
                )}
              </div>
              <p className="py-3 font-normal text-zinc-500">{book.comments.length} Avaliações</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#252D4A] mt-8 pt-6 pb-2">
          <ul className="flex gap-14">
            <li className="flex items-center gap-2">
              <Bookmark color="#50B2C0" />
              <div>
                <p className="text-base text-zinc-400 font-normal">Categoria</p>
                <div className="flex flex-wrap items-center">
                  {book.category.map((category) =>
                    <p
                      className="text-xs text-white font-semibold mr-1 bg-[#252D4A] px-1 py-0.5 rounded-full min-w-12 text-center"
                      key={`sidebar-book-${category}`}
                    >
                      {category}
                    </p>
                  )
                  }
                </div>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen color="#50B2C0" />
              <div>
                <p className="text-base text-zinc-400 font-normal">Páginas</p>
                <p className="text-sm text-white font-semibold">160</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-zinc-500 text-sm pb-3">Avaliações</p>
        <div className="bg-[#181C2A] p-3 rounded-md">
          <div className="flex items-center gap-2 mb-3">
            <img src={data?.user?.image} alt="" className="w-10 h-10 rounded-full" />
            <h3 className="font-medium text-lg text-zinc-100">{data?.user?.name}</h3>
          </div>
          <textarea className="w-full bg-[#0E1116] p-3 font-normal text-zinc-300 text-base h-[200px] max-h-[200px] outline-none" maxLength={320} />
          <div className="flex justify-end gap-2">
            <button className="bg-[#252D4A] p-1 rounded hover:brightness-125 transition ease-in-out duration-150">
              <X size={25} color="#8381D9" />
            </button>
            <button className="bg-[#252D4A] p-1 rounded hover:brightness-125 transition ease-in-out duration-150">
              <CheckIcon size={25} color="#50B2C0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
