import { useContext, useReducer } from "react"
import { CartContext } from "@/app/provider/CartProvider"
import { AddedProduct } from "@/types/cart"
type PropsType = {
    product: AddedProduct
}
export const CountCartButton = ({product}: PropsType) => {
    const {cart, dispatch} = useContext(CartContext)

    const addToCartUp = () => {
        dispatch({type: "UP", payload: product});
    }
    const addToCartDown = () => {
        dispatch({type: "DOWN", payload: product});
    }

    return(
        <>
            <span>{`数量:${cart.find(productInCart => productInCart.product_id === product.id)?.quantity}`}</span>
            <button className="w-10 h-10 m-2 btn btn-lg btn-primary hover:bg-neutral-500 bg-neutral-400" onClick={addToCartUp}>+</button>
            <button className="w-10 h-10 m-2 btn btn-lg btn-primary hover:bg-neutral-500 bg-neutral-400" onClick={addToCartDown}>-</button>
        </>

    )

}

