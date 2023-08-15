"use client"
import { signIn, useSession,signOut } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const Login = () => {
    const {status, data:session} = useSession();
    console.log(session);
    if(status === 'authenticated'){
        return (
            <div>
        <p>User isAuthenticated</p>
        <h1 className="text-2xl">Welcome {session?.user?.name}</h1>
        <h1>Email: {session?.user?.email }</h1>
        <Image 
            src={session?.user?.image}
            height={100}
            width={100}
        />
        <button onClick={()=> signOut()}>Sign Out</button>
        </div>
        )
    }
    if(status === 'loading'){
        return <p>loading...</p>
    }
    
  return (
    <div>
        <button onClick={()=> signIn("google")}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Login