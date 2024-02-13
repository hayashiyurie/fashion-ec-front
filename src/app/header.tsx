"use client"

import { IconContext } from "react-icons"
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart, BsCartCheck, BsHeart } from "react-icons/bs";
import { GoPerson } from "react-icons/go";



export const Header = () => {
    const router = useRouter();
    return (
        <div className=" bg-red-bean-400">
            <div className='mx-auto max-w-6xl justify-content'>
                <main className="grid grid-cols-2 place-items-center h-32">
                    <h2 className="font-FRIZON text-3xl text-red-bean-200 cursor-pointer" onClick={() => router.push("/top")}>λύκος</h2>
                    <div className="bg-red-bean-500 p-6 w-full">
                        <div className="grid grid-cols-8">
                            <IconContext.Provider value={{size: '25px', color: '#D9D9D9'}}>
                                <input className="mr-2 bg-red-bean-200 col-span-4" placeholder="Search for anything..." type="text" name="search"/>
                                {/* <button className="w-10" onClick={() => router.push("")}><IoSearchOutline /></button> 検索 */}
                                <button className="pl-4" onClick={() => router.push("/customer/myPage")}><GoPerson /></button> 
                                <button className="pl-2" onClick={() => router.push("")}><BsHeart /></button>  {/* お気に入り */}
                                <button className="pl-1" onClick={() => router.push("orderHistory")}><BsCartCheck /></button>  {/* 注文履歴 */}
                                <button className="pl-1"  onClick={() => router.push("/cart")}><BsCart /></button>
                            </IconContext.Provider>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}