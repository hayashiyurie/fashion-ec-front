"use client";

import { useEffect, useState, useContext } from "react";
import NextImage from 'next/image';
import { AddCartButton } from "@/app/ui/cart/AddCartButton";
import { CountCartButton } from "@/app/ui/cart/CountCartButton ";
import { CartContext } from "@/app/provider/CartProvider";
import { Product, ProductImage, ProductInventoryManagement, Genre } from "@/types/product";

interface ResponseData {
    product: ResponseProduct
}
type ResponseProduct = Product & {product_images: ProductImage[], product_inventory_management: ProductInventoryManagement, genre:Genre}


export default function ProductDetail({ params }: { params: { show: string } }) {
    const [product, setProduct] = useState<ResponseProduct | null > (null);
    const {cart, dispatch} = useContext(CartContext)
    console.log(cart)

    useEffect(() => {

        fetch(`http://localhost:8080/api/product/show/${params.show}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
              },})
        .then(res => res.json())
        .then((data: ResponseData) => {
            setProduct(data.product)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    product?.product_images.map((productImage, index) =>
                    
                        <div key={index}>
                            <NextImage alt={"jj"} height={500} width={500} src={productImage.image.path_url}></NextImage>
                        </div>
                    )
                }
            </ul>
                <h1>{product?.product_name}</h1>
                <p>{product?.tax_included_price}</p>
                <p>{product?.genre.genre_name}</p>
                {product && <AddCartButton product={{id: product.id, price: product.tax_included_price}}/>}
        </div>
    );
  }