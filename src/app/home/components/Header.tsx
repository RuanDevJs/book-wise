import Logo from "@/assets/Logo.svg"
import Image from "next/image";

import { Binoculars, ChartLine, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthenticatedLink() {
  const { data, status } = useSession();
  const isUserAuthenticated = status === 'authenticated';

  async function handleSignOut() {
    await signOut({ callbackUrl: '/' })
  }

  async function handleSignIn() {
    await signIn('github', { callbackUrl: '/home' })
  }

  if (isUserAuthenticated && data.user) {
    return (
      <a
        href="#"
        className="font-bold text-base text-zinc-200 text-center flex items-center gap-5 p-2 hover:text-red-400 transition ease-in-out duration-150"
        onClick={handleSignOut}
      >
        <img src={data.user.image} className="rounded-full" width={45} alt="" />
        Ruan Vitor
        <LogOut size={25} />
      </a>
    )
  }
  return (
    <a href="#" className="font-bold text-base text-zinc-200 text-center flex items-center gap-5 p-2 hover:text-[#65DEF2] transition ease-in-out duration-150" onClick={handleSignIn}>
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
            <AuthenticatedLink />
          </li>
        </ul>
      </nav>
    </header>
  )
}
