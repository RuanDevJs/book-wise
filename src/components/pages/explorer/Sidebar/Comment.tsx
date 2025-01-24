import { ICommentary } from '@/@types/Books';
import { Star } from 'lucide-react';

import { formatDistance } from "date-fns"
import { pt } from "date-fns/locale/pt"

interface ICommentProps {
  comment: ICommentary;
}

export default function Comment({ comment }: ICommentProps) {
  const stars = Array.from({ length: comment.star_rating ?? 0 }, (n, index) => index);
  const distance = formatDistance(comment.date, new Date(), { locale: pt, addSuffix: true });
  const formatedDate = distance.replace('aproximadamente', '') + ' atrás';

  return (
    <div className='p-5 mt-3 bg-[#181C2A] rounded-md' key={`key-by-date=${comment.date}`}>
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <img src={comment.picture} className='w-10 h-10  object-cover rounded-full' alt="" />
          <div>
            <h3 className='text-zinc-100 font-semibold text-base'>{comment.username}</h3>
            <p className='text-zinc-500 font-normal text-sm'>{formatedDate}</p>
          </div>
        </div>
        <div className='flex gap-1.5'>
          {stars && stars.map((_, index) =>
            <Star
              color="#8381D9"
              fill="#8381D9"
              className="border-none outline-none opacity-85"
              size={18}
              key={`comment-${index}`}
            />)
          }
        </div>
      </div>
      <p className='mt-3 text-base font-normal text-zinc-200 leading-7'>{comment.comment}</p>
    </div>
  )
}
