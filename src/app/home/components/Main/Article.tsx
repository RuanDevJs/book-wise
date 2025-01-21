import { IBook } from "@/@types/Books"
import { Star } from "lucide-react";

interface IProps {
  data: IBook;
}
export default function Article({ data }: IProps) {
  const stars = Array.from({ length: data.star_rating }, (n, index) => index)
  return (
    <article className="w-full mt-8 px-7 py-5 rounded-lg bg-[#181C2A] hover:-translate-y-3 transition ease-in-out duration-1500 hover:brightness-110 cursor-pointer" >
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img src={data.user.picture} alt="" className="w-14 h-14 rounded-full object-cover" />
          <div>
            <h2 className="font-semibold text-zinc-200 text-lg">{data.user.username}</h2>
            <p className="font-semibold text-zinc-500 text-sm">Hoje</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {stars.map((_, index) => <Star color="#8381D9" fill="#8381D9" className="border-none outline-non" key={index} />)}
        </div>
      </div>
      <div className="mt-7 flex gap-5">
        <img src={data.picture} className="w-36 h-52 object-cover rounded-md" alt="" />
        <div>
          <h3 className="font-bold text-zinc-100 text-xl">{data.title}</h3>
          <p className="font-normal text-zinc-500 text-sm">{data.author}</p>
          <p className="font-normal text-zinc-300 text-base mt-2 line-clamp-3">{data.description}</p>
        </div>
      </div>

    </article>
  )
}
