"use client";

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import UserInfo from './components/UserInfo/UserInfo';

export default function Home() {
  const router = useRouter();
  return (
    <div>
    {/* <p>If You want to sign in then click here</p>
    <button onClick={()=>router.push('./login')}>
      Click here to go Login Page
    </button>      */}
    <UserInfo />

    </div>
  )
}
