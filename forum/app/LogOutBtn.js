'use client'
import { signOut } from 'next-auth/react'

export default function LogOutBtn(){
    return(
        <div onClick={()=>{ signOut() }}>
            로구아웃
        </div>
    )
}