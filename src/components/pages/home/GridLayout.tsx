'use client'

import { ReactNode } from "react";
import { useBooks } from "../../../context/BooksContext";

import { useSession } from "next-auth/react";
import Loading from "@/components/@shared/Loading";

interface IProps {
  children: ReactNode;
}

export default function GridLayout({ children }: IProps) {
  const { loadingBooks } = useBooks();
  const { status } = useSession();

  if (loadingBooks || status === 'loading') {
    return <Loading />
  }

  return (
    <div id="grid-layout-home" className='p-3 bg-[#0E1116] min-h-dvh max-h-auto relative'>
      {children}
    </div>
  )
}
