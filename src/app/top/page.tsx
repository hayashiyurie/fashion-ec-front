"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


export default function Top() {
    const [email, seteEail] = useState<string>('');
    const [password, setPeassword] = useState<string>('');
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);

    const router = useRouter();

    
    // try {

    //     fetch('http://localhost:8080/sanctum/csrf-cookie', {
    //         method: 'GET',
    //         headers: {
    //         'Accept': 'application/json',
    //         "Content-Type": "application/json",
    //         },
         
    //         }).then(async () => {
    //             const res = await fetch('http://localhost:8080/login', {
    //             method: 'POST',
    //             body : JSON.stringify({email: email, password: password,}),
    //             credentials: 'include',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 "Content-Type": "application/json",
    //                 "X-XSRF-TOKEN": cookies["XSRF-TOKEN"]
    //             },})
    //             const data = await res.json()
    //             if (res.status === 404) {
    //                 alert(data.message)
    //             }
    //             })
    //     } catch (error) {
         
    //     }

        return (
            <div>
                <main className="form-signin">
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/customer/login")}>ログイン</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>お気に入り</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>注文履歴</button>
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>カート</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/customer/login")}>ログアウト</button> 

                </main>
            </div>
        )
    
}