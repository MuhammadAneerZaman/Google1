"use client";
import Image from 'next/image'
import React from 'react'
import Google from '../../../public/Google-Symbol.png'
import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
  const { status, data: session } = useSession();
  return (
    <button onClick={() => signIn('google')} className='flex items-center shadow-xl '>
      <Image src={Google} height={50} width={50} />
      <span className=' bg-blue-500 px-4 py-3 text-white rounded'>  SignIn With Google </span>
      {status === "loading" && <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>}
    </button>
  )
}
