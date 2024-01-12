"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { HiOutlineHome } from "react-icons/hi2";
import { IconContext } from 'react-icons'

interface Customer {
    id: number;
    last_name: string;
    first_name: string;
    last_name_kana: string;
    first_name_kana:string;
    postcode:string;
    address: string;
    phone_number: number;
    email: string;
    password: string;
}

export default function Login() {

    const [email, seteEail] = useState<string>('');
    const [password, setPeassword] = useState<string>('');
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
    const router = useRouter();


const save = async ()  => {
    try {
        // removeCookie("XSRF-TOKEN")

       fetch('http://localhost:8080/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },

       }).then(async () => {
        // console.log(cookies)
        const res = await fetch('http://localhost:8080/login', {
            method: 'POST',
            body : JSON.stringify({email: email, password: password,}),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": cookies["XSRF-TOKEN"]
            },
            credentials: 'include',
        })
            const data = await res.json()
            if (res.status === 404) {
                alert(data.message)
            }
       })
    } catch (error) {

    }
}

return (
    <div className="container mx-auto">
                    <button className="btn-lg mt-20" onClick={() => router.push("/top")}>ファッションECサイト</button> 
        <main className="w-80 m-14">
                <div className="text-2xl ">Login</div>
                <div className="pt-4">
                    <input className="form-control " placeholder="Email" value={email} onChange={(e) => seteEail(e.target.value)}/>
                    <label>メールアドレス</label>
                </div>

                <div className="pt-2 pb-4">
                    <input className="form-control" placeholder="Password" value={password} onChange={(e) => setPeassword(e.target.value)}/>
                    <label>パスワード</label>
                </div>

                <button className="col-start-2 rounded-lg w-64 h-16 hover:bg-neutral-500 bg-neutral-400" onClick={save}>ログイン</button> 
          </main>
    </div>
)

}