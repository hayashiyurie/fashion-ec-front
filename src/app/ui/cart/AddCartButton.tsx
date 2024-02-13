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
        <div className="">
            <button className="p-2 rounded-lg hover:bg-neutral-300 bg-white" onClick={addToCart}>カートに追加</button>
        </div>
    )

}