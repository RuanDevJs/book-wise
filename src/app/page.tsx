import BookWise from "@/assets/Login/BookWise.jpg"
import Github from "@/assets/Login/Github.svg";

import { RocketIcon } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <main className="bg-baseBackground">
      <div className="p-5 w-full h-dvh flex items-center overflow-hidden gap-20">
        <Image
          src={BookWise.src}
          width={BookWise.width}
          height={BookWise.height}
          quality={80}
          alt=""
          className="object-cover 2xl:w-[960px] w-[560px] h-full rounded-md"
          draggable={false}
        />
        <div className="w-[400px]">
          <div className="w-[85%]">
            <h1 className="text-2xl font-bold text-white">Boas vindas!</h1>
            <p className="text-base font-normal text-zinc-300">
              Faça seu login ou acesse como visitante.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-3 w-[85%]">
            <button
              className="p-4 bg-[#252D4A] rounded-md flex items-center gap-3.5 font-bold text-lg text-white hover:brightness-125 transition ease-in-out duration-150"
            >
              <Image src={Github} width={29} alt="" />
              Entrar com GitHub
            </button>
            <button
              className="p-4 bg-[#252D4A] rounded-md flex items-center gap-3.5 font-bold text-lg text-white hover:brightness-125 transition ease-in-out duration-150">
              <RocketIcon size={29} color="#8381D9" />
              Acessar como visitante
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
