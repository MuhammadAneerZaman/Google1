import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/users";
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({user, account}) {
  //     console.log("User", user);
  //     console.log("Account", account);
  //     const {name,email} = user;
  //     if(account.provider == "google"){
  //       try{
  //           await connectMongodb();
  //           let userExists = await User.findOne({email});
  //           if(!userExists){ 
  //               let res = await fetch("http://localhost:3000/api/user",{
  //                   method:"POST",
  //                   headers:{
  //                       "Content-Type":"application/json",
  //                   },
  //                   body:JSON.stringify({name, email})
  //               })
  //               if(res.ok){
  //                   return user;
  //               }
  //             }
  //       }catch(error){
  //           console.log("ERROR SAVING DATA TO MONGO", error)
  //       }
  //   }
      
  
  //     return user;
  //   }
  // }
})

export { handler as GET, handler as POST }