'use client'
import { createContext, useEffect, useLayoutEffect } from "react";
import useCart, {defaultReducer} from "../lib/hooks/cartReducer";
type PropsType = {
    children: React.ReactNode;
  };

export const CartContext = createContext(defaultReducer)
export const CartProvider = ({children}:PropsType) => {
    const {cart, dispatch} = useCart();
    console.log(cart)
    useEffect(() => {
        console.log("Cart updated, persisting to local storage", cart);
        if (typeof window !== 'undefined') {
          localStorage.setItem("localCart", JSON.stringify(cart));
        }
        
      }, [cart]);
    
    return (
        <CartContext.Provider value={{cart,dispatch}}>
            {children}

        </CartContext.Provider>
    )
}