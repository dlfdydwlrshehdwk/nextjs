'use client'
import { signIn, signOut } from 'next-auth/react'
export default function LogInbtn(){
    return(

        <div onClick={()=>{signIn()}}>
        LogIn
    </div>
        )
}