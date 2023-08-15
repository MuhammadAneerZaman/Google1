"use client";
import { useSession } from 'next-auth/react';
import SignIn from '../SignIn/SignIn'
import Image from 'next/image';


export default function UserInfo() {
  const { status , data:session} = useSession()
  if(status === "authenticated"){
    return <div>
      <Image src={session?.user?.image} height={70} width={70} alt='User Photo' />
    </div>
  }else{
    return <SignIn />
  
  }

}
