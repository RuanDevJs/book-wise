'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

import Github from "@/assets/Login/Github.svg"
import { Dialog } from 'primereact/dialog'

interface IProps {
  showModal: boolean;
  handleShowModal: () => void;
}

export default function AuthenticationModal({ showModal, handleShowModal }: IProps) {
  return (
    <Dialog
      visible={showModal}
      onHide={() => handleShowModal()}
      className='bg-[#181C2A] p-10 w-[450px] rounded-md relative'
      closeIcon={<X color='#c2c2c2' className='outline-none border-none' />}
      maskClassName='bg-[rgba(0,0,0,0.72)]'
    >
      <h2 className='text-lg font-bold text-white text-center mb-8'>Faça login para deixar sua avaliação</h2>
      <div className="w-full flex flex-col items-center gap-3">
        <button
          className="p-4 bg-[#252D4A] rounded-md flex justify-center items-center gap-3.5 font-bold text-lg text-white hover:brightness-125 transition ease-in-out duration-150 w-full"
        >
          <Image src={Github} width={29} alt="" />
          Entrar com GitHub
        </button>
      </div>
    </Dialog>
  )
}
