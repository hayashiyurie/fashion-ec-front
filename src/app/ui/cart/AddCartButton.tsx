import { useContext } from "react"
import { CartContext } from "@/app/provider/CartProvider"
import { AddedProduct } from "@/types/cart"
type PropsType = {
    product: AddedProduct
}
export const AddCartButton = ({product}: PropsType) => {
    const {cart, dispatch} = useContext(CartContext)

    const addToCart = () => {
        dispatch({type: "ADD", payload: product});
    }

    return(
        <button className="w-100 btn btn-lg btn-primary" onClick={addToCart}>カートに追加する</button>

    )

}