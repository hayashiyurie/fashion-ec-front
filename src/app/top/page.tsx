"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GenreList } from "../product/genre/GenreList";
import { BsCart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { IconContext } from 'react-icons'
import { IoSearchOutline } from "react-icons/io5";
import { PiPersonSimpleWalkLight } from "react-icons/pi";


export default function Top() {
    const router = useRouter();
        return (
            <div className="container mx-auto max-w-6xl align-items: center;justify-content: center;">
                <div>
                    <main className="flex flex-row h-32">
                        <h2 className="grow place-self-center">ファッションECサイト</h2>
                        <IconContext.Provider value={{size: '26px' }}>
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("")}><IoSearchOutline /></button> {/* 検索 */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("/customer/login")}><GoPerson /></button> 
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("")}><BsHeart /></button>  {/* お気に入り */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("")}><BsCartCheck /></button>  {/* 注文履歴 */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10"  onClick={() => router.push("/cart")}><BsCart /></button>
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("/customer/logout")}><PiPersonSimpleWalkLight /></button>
                        </IconContext.Provider>
                    </main>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="row-span-1 col-span-3" >
                        <img src="./images/top.png" alt="topImage" />
                    </div>
                    <div className="place-self-center">
                        <GenreList />
                    </div>
                    <img src="./images/outerBlack.png" alt="outer" />
                    <img src="./images/cardiganBlue.png" alt="cardigan" />
                    <img src="./images/longtOrenge2.png" alt="longt" />
                    <img src="./images/longtBlack.png" alt="longt" />
                    <img src="./images/outerGreen.png" alt="outer" />
                    <img src="./images/longtWhite.png" alt="longt" />
                    <img src="./images/coatBlack.png" alt="coat" />
                    <img src="./images/knitBege.png" alt="knit" />
                </div>
            </div>
        )
    
}