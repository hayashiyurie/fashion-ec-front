"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";

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
    <div>
        <main className="form-signin">
            {/* <form> */}
                <h1 className="h3 mb-3 fw-normal">Please login</h1>
                <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/top")}>TOPページ</button> 
                <div className="form-floating">
                    <input className="form-control" placeholder="Email" value={email} onChange={(e) => seteEail(e.target.value)}/>
                    <label>メールアドレス</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="Password" value={password} onChange={(e) => setPeassword(e.target.value)}/>
                    <label>パスワード</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" onClick={save}>ログイン</button> 
            {/* </form> */}
          </main>
    </div>
)

}