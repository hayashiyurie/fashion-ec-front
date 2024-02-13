"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { RiHome2Line } from "react-icons/ri";
import { IconContext } from 'react-icons'


export default function Logout() {
    const [email, seteEail] = useState<string>('');
    const [password, setPeassword] = useState<string>('');
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
    const router = useRouter();
    
    const onSubmit = async (): Promise<void> => {
        try {
       
      
                console.log(cookies)
            
             const res = await fetch('http://localhost:8080/logout', {
                 method: 'POST',
                 body : JSON.stringify({email: email, password: password,}),
                 credentials: 'include',
                 headers: {
                     'Accept': 'application/json',
                     "Content-Type": "application/json",
                     "X-XSRF-TOKEN": cookies["XSRF-TOKEN"]
                },})
                .then(() => {
                    removeCookie("XSRF-TOKEN")
                    console.log("Sign-out successful.");
                })
            
        }   catch (error) {

        }
    }
    return (
        <div className="container mx-auto max-w-3xl">
            <div className="grid">
                <main className="m-10 place-self-center">
                    <button className="w-100 rounded-lg w-64 h-16 hover:bg-neutral-500 bg-neutral-400" onClick={onSubmit}>ログアウト</button> 
                </main>
            </div>
        </div>
    )
}
