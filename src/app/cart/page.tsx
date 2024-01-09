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
        
            <div>
               
                        {cart?.length && cart.map((productInCart, i) => 
                            <div key={i}>
                                <p>{productInCart.product_id}</p>
                                <div>{productInCart.sum_price}</div>
                                <div>{productInCart.quantity}</div>
                                <CountCartButton product={{id:productInCart.product_id, price:productInCart.sum_price/productInCart.quantity}}/>
                            </div>
                        )}
                        <button onClick={() => router.push('/payment')}>購入へ</button>
                
            </div>
        
    )
}