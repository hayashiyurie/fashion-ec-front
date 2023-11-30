"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Logout() {
    const [email, seteEail] = useState<string>('');
    const [password, setPeassword] = useState<string>('');
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
    
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
                    console.log("Sign-out successful.");
                })
            
        }   catch (error) {

        }
    }
    //     try {
    //         fetch('http://localhost:8080/logout', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         "Content-Type": "application/json",
    //     },

    //    }).then(() => {
    //         console.log("Sign-out successful.");
    //     })   
    //     } catch (err) {
    //     alert(err)
    //     }
    
    return (
        <div>
            <main className="form-signin">
                <button className="w-100 btn btn-lg btn-primary" onClick={onSubmit}>ログアウト</button> 
            </main>
        </div>
    )
}
