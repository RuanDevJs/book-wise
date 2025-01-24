'use client'

import { useSession } from 'next-auth/react'

import { useRouter, useSearchParams } from 'next/navigation';
import Comment from './Comment';

import { useState } from 'react';
import { IBook, ICommentary } from '@/@types/Books';

import api from '@/lib/Axios';
import { CheckIcon, X } from 'lucide-react';

interface IProps {
  book: IBook;
}

export default function Form({ book }: IProps) {
  const { status } = useSession();

  const searchParam = useSearchParams();
  const currentBookId = searchParam.get("selected_book");

  const hasComments = book && book.comments.length ? true : false;

  const { data } = useSession();
  const [inputComment, setInputComment] = useState<string>("");

  const router = useRouter();

  async function handlePushComment() {
    if (!inputComment.length) return;

    if (data && data.user) {
      const currentUserEmail = data.user.email;
      const payloadData: ICommentary = {
        email: currentUserEmail!,
        date: new Date(),
        picture: data.user.image!,
        username: data.user.name!,
        star_rating: 5,
        comment: inputComment,
      }

      try {
        await api.post(`/books?selected_book=${currentBookId}`, payloadData);
        setInputComment('');
        router.push("/home/explorer")
      } catch (error) {
        if (error instanceof Error) console.error(error)
      }
    }

  }

  return (
    <div className="mt-5">
      <p className="text-zinc-500 text-sm pb-3">Avaliações</p>
      {status === 'authenticated' && (
        <div className="bg-[#181C2A] p-3 rounded-md">
          <div className="flex items-center gap-2 mb-3">
            <img src={data?.user?.image} alt="" className="w-10 h-10 rounded-full" />
            <h3 className="font-medium text-lg text-zinc-100">{data?.user?.name}</h3>
          </div>
          <textarea
            className="w-full bg-[#0E1116] p-3 font-normal text-zinc-300 text-base h-[200px] max-h-[200px] outline-none"
            maxLength={320}
            onChange={(event) => setInputComment(event.target.value)}
            value={inputComment}
          />
          <div className="flex justify-end gap-2">
            <button className="bg-[#252D4A] p-1 rounded hover:brightness-125 transition ease-in-out duration-150" onClick={() => setInputComment('')}>
              <X size={25} color="#8381D9" />
            </button>
            <button className="bg-[#252D4A] p-1 rounded hover:brightness-125 transition ease-in-out duration-150" onClick={handlePushComment}>
              <CheckIcon size={25} color="#50B2C0" />
            </button>
          </div>
        </div>
      )}
      {hasComments && book.comments.map(comment => <Comment comment={comment} key={`date-key=${comment.date}`} />)}
    </div>
  )
}

