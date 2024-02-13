"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter} from 'next/navigation';
import { CartContext } from "../provider/CartProvider";
import { CountCartButton } from "../ui/cart/CountCartButton ";
import NextImage from 'next/image';
import { Product, ProductImage } from "@/types/cart";

type ResponseProduct = Product & {product_images: ProductImage[]}

export default function CartPage() {
    const {cart, dispatch} = useContext(CartContext)
    const router = useRouter();
    const [products, setProduct] = useState<ResponseProduct[]>([]);
    console.log(cart)
    // const cart = [{product_id:1,sum_price:700, quantity:1}]

    return (
        <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2">

                    {/* <img src="./images/coatBlack.png" alt="coat" />
                    <img className="row-start-2" src="./images/coatBrown.png" alt="coat" /> */}
                    {/* {
                        products?.map((ResponseProduct, i) => {
                            return (
                                <div key={i}>
                                    {ResponseProduct.product_images.map((productImage, index) => (
                                        <div key={index}>
                                            <NextImage alt={"jj"} height={500} width={400} src={productImage.image.path_url}></NextImage>
                                            <p className='text-sm'>{ResponseProduct.product_name}</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        })            
                    } */}
                <div>
                    {
                        cart?.length && cart.map((productInCart, i) => 
                            <div key={i}>
                                {/* <p className='text-sm'>{productInCart.product_name}</p>
                                <NextImage alt={"jj"} height={500} width={400} src={productInCart.productImage.image.path_url}></NextImage> */}
                                <p>{productInCart.product_id}</p>
                                <div>¥{productInCart.sum_price}円</div>
                                <div>{productInCart.quantity}個</div>
                                <CountCartButton product={{id:productInCart.product_id, price:productInCart.sum_price/productInCart.quantity}}/>
                            </div>
                        )
                    }
                </div>
                        <div className="">
                            <button className="p-4 rounded-lg hover:bg-red-bean-300 bg-red-bean-200" onClick={() => router.push('/payment')}>購入へ</button>
                        </div>
            </div>
        </div>
        
    )
}