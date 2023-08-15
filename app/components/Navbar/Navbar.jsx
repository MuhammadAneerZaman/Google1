"use client";
import { signOut,signIn,useSession } from "next-auth/react";

function Navbar() {
  const { status } = useSession()
  return (
    <div className=" p-4 flex justify-between items-center shadow-md"> 
        <h1>MAZ Coding</h1>
        {status === "authenticated" ? <button onClick={()=> signOut()}>Sign Out</button> : <button onClick={()=> signIn("google")}>Sign In</button> }
        
    </div>
  )
}

export default Navbar