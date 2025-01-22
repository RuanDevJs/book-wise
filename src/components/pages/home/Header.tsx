'use client'

import Logo from "@/assets/Logo.svg"
import Image from "next/image";

import { Binoculars, ChartLine, LogOut, User2 } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const linkTailwindVariant = tv({
  base: "font-bold text-base text-zinc-400 text-center flex items-center justify-center gap-1 p-2 hover:text-[#65DEF2] transition ease-in-out duration-150 hover:translate-x-1",
  variants: {
    isActive: {
      true: "text-[#65DEF2] before:block before:w-1 before:h-7 before:bg-gradient-to-t from-[#7fd1cc] to-[#9694f5] before:rounded-md",
    }
  }
})

import Link from "next/link";
import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

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

function ProfileLink({ isActive }: { isActive: boolean }) {
  return (
    <Link href="/home/profile" className={linkTailwindVariant({ isActive: isActive })}>
      <div className="w-[40px] flex justify-center">
        <User2 />
      </div>
      <span className="w-[120px] flex justify-start">Perfil</span>
    </Link>
  )
}

type TypeCurrentPathName = '/home' | '/home/explorer' | '/home/profile';

export default function Header() {
  const { status } = useSession();
  const isUserAuthenticated = status === 'authenticated';

  const currentPathName = usePathname() as TypeCurrentPathName;

  return (
    <header
      className="grid-header py-10 hover:brightness-110 transition ease-in-out duration-150 h-full"
      id="grid-area-header"
    >
      <nav className="h-full flex flex-col justify-between items-center text-center">
        <ul className="w-56">
          <li className="mb-14">
            <Link href="/home" className="block">
              <Image src={Logo} alt="" className="w-[180px] hover:brightness-125 transition ease-in-out duration-150" />
            </Link>
          </li>
          <li className="my-2 block mx-auto w-full">
            <Link href="/home" className={linkTailwindVariant({ isActive: currentPathName === '/home' })}>
              <div className="w-[40px] flex justify-center">
                <ChartLine size={25} />
              </div>
              <span className="w-[120px] flex justify-start">
                Início
              </span>
            </Link>
          </li>
          <li className="block mx-auto w-full">
            <a href="#" className={linkTailwindVariant({ isActive: currentPathName === '/home/explorer' })}>
              <div className="w-[40px] flex justify-center ">
                <Binoculars size={25} />
              </div>
              <span className="w-[120px] flex justify-start">Explorar</span>
            </a>
          </li>
          <li className="my-2 block mx-auto w-full">
            {isUserAuthenticated && <ProfileLink isActive={currentPathName === '/home/profile'} />}
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
