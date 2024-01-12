'use client';
import { useEffect, useState, } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
    const router = useRouter();
  return (
    <div>
    
        {
            cookies["XSRF-TOKEN"] !== undefined ? (
               <>
                <div className="flex w-11/12 mx-auto mt-10">
                    <ul className="gap-y-5 mr-5 divide-y divide-current">
                        <li className="my-1">
                            <Link href="/customer/myPage/">
                                <p>マイページトップ</p>
                            </Link>
                        </li>
                        <li className="my-1">
                            <Link href="/services">
                                <p>会員情報</p>
                            </Link>
                        </li>
                        <li className="my-1">
                            <Link href="/customer/myPage/deliveryDestination/">
                                <p>配送先情報</p>
                            </Link>
                        </li>
                    </ul>
        
                    <div className="">
                        {children}
                    </div>
                </div>
                <button className="btn btn-lg btn-primary w-32" onClick={() => router.push("/customer/logout")}>ログアウト</button>
               </>

            ): (
               <div >
                    <div onClick={() => router.push("/customer/register")}>
                        アカウント作成
                    </div>
                    <div onClick={() => router.push("/customer/login")}>
                        ログイン
                    </div>
               </div>

            )
        }

    </div>
    
 
  )
}
