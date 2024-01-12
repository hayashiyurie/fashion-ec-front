"use client";
import React, { useContext } from "react"
import { useRouter} from 'next/navigation';
import { CartContext } from "../provider/CartProvider"
import { CountCartButton } from "../ui/cart/CountCartButton ";

export default function CartPage() {
    const {cart, dispatch} = useContext(CartContext)
    const router = useRouter();
    console.log(cart)
    // const cart = [{product_id:1,sum_price:700, quantity:1}]
    return (
        <div className="container mx-auto max-w-3xl">
            <div className="flex flex-row h-32">
                <button className="btn-lg m-8" onClick={() => router.push("/top")}>ファッションECサイト</button> 
            </div>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
                    <img src="./images/coatBlack.png" alt="coat" />
                    <img className="row-start-2" src="./images/coatBrown.png" alt="coat" />
                        {cart?.length && cart.map((productInCart, i) => 
                            <div key={i}>
                                <p>{productInCart.product_id}</p>
                                <div>{productInCart.sum_price}円</div>
                                <div>{productInCart.quantity}</div>
                                <CountCartButton product={{id:productInCart.product_id, price:productInCart.sum_price/productInCart.quantity}}/>
                            </div>
                        )}
                        <button className="rounded-lg w-64 h-16 hover:bg-neutral-500 bg-neutral-400" onClick={() => router.push('/payment')}>購入へ</button>
            </div>
        </div>
        
    )
}