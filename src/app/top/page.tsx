"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GenreList } from "../product/genre/GenreList";
import { BsCart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { IconContext } from 'react-icons'
import { IoSearchOutline } from "react-icons/io5";
import { Product, ProductImage, ProductInventoryManagement } from '@/types/product';
import NextImage from 'next/image'

type ResponseProduct = Product & {product_images: ProductImage[], product_inventory_management: ProductInventoryManagement}

interface ResponseData {
    new_products: ResponseProduct[]
}

export default function Top() {
    const router = useRouter();
        const [products, setProduct] = useState<ResponseProduct[]>([]);
        let newProductUrl = 'http://localhost:8080/api/product/newlist';

        useEffect(() => {
            fetch(newProductUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                  },})
            .then(res => res.json())
            .then((data: ResponseData) => {
                // console.log(data);
                setProduct(data.new_products)
            })
        },[])
        return (
            <div className="container mx-auto max-w-6xl align-items: center;justify-content: center;">
               
                <div className="grid grid-cols-4 gap-4">
                    <div className="row-span-1 col-span-3" >
                        <img src="./images/top.png" alt="topImage" />
                    </div>
                    <div className="place-self-center">
                        <GenreList />
                    </div>
                    {/* <div  className="grid gap-y-4 grid-cols-3"> */}
                    {
                        products?.map((ResponseProduct, i) => {
                            return (
                                <div key={i} onClick={() => router.push(`/product/${ResponseProduct.id}`)}>
                                    {ResponseProduct.product_images.map((productImage, index) => (
                                        <div key={index}>
                                            <NextImage alt={"jj"} height={500} width={400} src={productImage.image.path_url}></NextImage>
                                        </div>
                                    ))}
                                </div>
                            )
                        })            
                    }
                    {/* </div> */}
                </div>
            </div>
        )
    
}