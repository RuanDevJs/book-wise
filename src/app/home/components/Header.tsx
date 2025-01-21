import Logo from "@/assets/Logo.svg"
import Image from "next/image";
import { Binoculars, ChartLine, LogOut } from "lucide-react";

function AuthenticatedLink({ isAuthenticated }: { isAuthenticated: boolean }) {
  if (isAuthenticated) {
    return (
      <a href="#" className="font-bold text-base text-zinc-200 text-center flex items-center gap-5 p-2 hover:text-red-400 transition ease-in-out duration-150">
        <img src="https://avatars.githubusercontent.com/u/82915279?v=4" className="rounded-full" width={45} alt="" />
        Ruan Vitor
        <LogOut size={25} />
      </a>
    )
  }
  return (
    <a href="#" className="font-bold text-base text-zinc-200 text-center flex items-center gap-5 p-2 hover:text-[#65DEF2] transition ease-in-out duration-150">
      Fazer Login
      <LogOut size={25} />
    </a>
  )
}

export default function Header() {
  return (
    <header className="grid-header py-10 hover:brightness-110 transition ease-in-out duration-150 h-full">
      <nav className="h-full flex flex-col justify-between items-center text-center">
        <ul className="w-56">
          <li className="mb-14">
            <a href="#" className="block">
              <Image src={Logo} alt="" className="w-[180px] hover:brightness-125 transition ease-in-out duration-150" />
            </a>
          </li>
          <li className="my-2 block mx-auto w-full">
            <a href="#" className="font-bold text-base text-zinc-200 text-center flex items-center justify-center gap-1 p-2 hover:text-[#65DEF2] transition ease-in-out duration-150">
              <div className="w-[40px] flex justify-center">
                <ChartLine size={25} />
              </div>
              <span className="w-[120px] flex justify-start">
                Início
              </span>
            </a>
          </li>
          <li className="block mx-auto w-full">
            <a href="#" className="font-bold text-base text-zinc-200 text-center flex items-center justify-center gap-1 p-2 hover:text-[#65DEF2] transition ease-in-out duration-150">
              <div className="w-[40px] flex justify-center">
                <Binoculars size={25} />
              </div>
              <span className="w-[120px] flex justify-start">Explorar</span>
            </a>
          </li>
        </ul>
        <ul className="w-56">
          <li className="flex justify-center">
            <AuthenticatedLink isAuthenticated={false} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
