'use client'

import Aside from "../../components/pages/home/Aside";
import Main from "../../components/pages/home/Main";

export default function Home() {

  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-10">
      <Main />
      <Aside />
    </div>
  )
}
