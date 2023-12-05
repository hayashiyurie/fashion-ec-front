"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GenreList } from "../product/genre/GenreList";


export default function Top() {
    const router = useRouter();
        return (
            <div>
                <main className="form-signin">
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/customer/login")}>ログイン</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>お気に入り</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>注文履歴</button>
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("")}>カート</button> 
                    <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/customer/login")}>ログアウト</button>

                    {/* <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/genre")}>トップス</button> */}
                    <GenreList />
                </main>
            </div>
        )
    
}