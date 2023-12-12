'use client'
import { useReducer,useState, useEffect } from "react";
import { Cart, AddedProduct } from "@/types/cart";
   
export default function useCart() {

    const initializer = (initialValue:Cart = []) => {
        const storedValue = localStorage.getItem("localCart");
        return (JSON.parse(storedValue as string) as Cart) || initialValue;
    }
    const [cart, dispatch] = useReducer(reducer, [] as Cart, initializer)
    return {cart, dispatch}
}

type Action = {type: "ADD", payload: AddedProduct} |  {type: "DELETE", payload: AddedProduct} | {type: "UP", payload: AddedProduct} | {type: "DOWN", payload: AddedProduct}

const reducer = (state:Cart, action: Action):Cart =>  {
    const copyState = JSON.parse(JSON.stringify(state)) as Cart;
    switch(action.type) {
        case "ADD":
             // 追加処理呼び出し
            return addProduct(action.payload, copyState)
        case "UP":
            //商品個数増加
            
            return incrementProduct(action.payload, copyState)
        case "DOWN":
            //商品個数減少
            return decrementProduct(action.payload, copyState)
            
        default:
            return state
           
    }
}

// createContextの初期値用オブジェクト
export const defaultReducer: ReturnType<typeof useCart> = {
	cart: [],
	dispatch: () => {},
};

const addProduct = (product:AddedProduct, cart:Cart) => {
    // 追加処理
    // cartの中にproductの商品IDの商品がないかを確認
    // 商品が存在すれば -> 該当の商品の数量+1, 対象商品の現在の合計金額+商品の金額をして対象商品を更新
    // 存在しなければ -> 商品をcartに追加
    
    const index = foundProductBySameProductId(product, cart);
    if(index >= 0) {
        cart[index].sum_price += product.price
        cart[index].quantity += 1;

        return cart;
        
    }
    const AddedProduct = {product_id: product.id, sum_price: product.price, quantity: 1}
    return [...cart, AddedProduct]
    
}

const foundProductBySameProductId = (product:AddedProduct, cart:Cart) => cart.findIndex(productInCart => productInCart.product_id === product.id)


const incrementProduct = (product:AddedProduct, cart:Cart) => {
    // 個数追加処理
    const index = foundProductBySameProductId(product, cart);
    cart[index].sum_price += product.price
    cart[index].quantity += 1;
    
    // 該当の商品の金額を+して、数量を+1する
    // 上記の処理をした状態を返す
    return cart
}

const decrementProduct = (product:AddedProduct, cart:Cart) => {
    // 個数減少処理
    const index = foundProductBySameProductId(product, cart);
    if(cart[index].quantity == 1) {
        const newCart = cart.filter((productInCart) => productInCart.product_id !== product.id);
        return newCart;

    }else{
        cart[index].sum_price -= product.price
        cart[index].quantity -= 1;
        
        return cart;
    }
}

const deleteProduct = (product:AddedProduct, cart:Cart) => {
    // 削除処理
    
    
}

const checkStock = (product: AddedProduct) => {
    // 在庫確認
}





