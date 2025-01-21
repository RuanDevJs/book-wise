'use client'

import { IBook } from "@/@types/Books"
import { Star } from "lucide-react";
interface IProps {
  data: IBook;
}
export default function Recomendation({ data }: IProps) {
  const stars = Array.from({ length: data.star_rating }, (n, index) => index);

  return (
    <div
      className="w-full mb-7 px-5 py-3 rounded-lg bg-[#181C2A] hover:brightness-110 hover:-translate-y-2 duration-150 transition ease-in-out cursor-pointer"
    >
      <div className="flex gap-5">
        <img src={data.picture} className="w-20 h-full object-cover rounded-md" alt="" />
        <div>
          <h3 className="font-bold text-zinc-100 text-lg line-clamp-1">{data.title}</h3>
          <p className="font-normal text-zinc-500 text-xs">{data.author}</p>
          <div className="flex items-center gap-2">
            {stars.map((_, index) =>
              <Star
                color="#8381D9"
                fill="#8381D9"
                className="border-none outline-none mt-6 opacity-85"
                size={18}
                key={`recomendation-${index}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
