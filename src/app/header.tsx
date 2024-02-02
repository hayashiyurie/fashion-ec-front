"use client"

import { IconContext } from "react-icons"
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart, BsCartCheck, BsHeart } from "react-icons/bs";
import { GoPerson } from "react-icons/go";



export const Header = () => {
    const router = useRouter();
    return (
        <div className="container mx-auto max-w-6xl justify-content">
                    <main className="flex flex-row h-32">
                        <h2 className="grow place-self-center" onClick={() => router.push("/top")}>ファッションECサイト</h2>
                        <IconContext.Provider value={{size: '26px' }}>
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("")}><IoSearchOutline /></button> {/* 検索 */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("/customer/myPage")}><GoPerson /></button> 
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("")}><BsHeart /></button>  {/* お気に入り */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10" onClick={() => router.push("orderHistory")}><BsCartCheck /></button>  {/* 注文履歴 */}
                            <button className="w-100 btn btn-lg btn-primary flex-none w-10"  onClick={() => router.push("/cart")}><BsCart /></button>
                        </IconContext.Provider>
                    </main>
                </div>
    )
}