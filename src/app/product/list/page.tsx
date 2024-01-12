"use client";
import NextImage from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState,useEffect } from 'react';
import { Product, ProductImage, ProductInventoryManagement } from '@/types/product';

type ResponseProduct = Product & {product_images: ProductImage[], product_inventory_management: ProductInventoryManagement}

interface ResponseData {
    products: ResponseProduct[]
}

const SouldOut = (stockNumber: number) => {
    console.log(stockNumber)
    return (
        <div>
            {stockNumber === 0 && '売り切れ'}
            {stockNumber > 0 && '販売'}
        </div>
    );
}

export default function Product() {
    
        // const Nav = () => {
        const router = useRouter();
        const [products, setProduct] = useState<ResponseProduct[]>([]);
        const searchParams = useSearchParams();
        const search = searchParams.get('genre_id');
        let productUrl = 'http://localhost:8080/api/product';
        
        console.log(search)

        useEffect(() => {
            if(search != null) {
                productUrl =`${productUrl}?genreId=${search}`
            }

            fetch(productUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                  },})
            .then(res => res.json())
            .then((data: ResponseData) => {
                // console.log(data);
                setProduct(data.products)
            })
        },[])

        return (
            <div className="container mx-auto">
                    <button className="btn-lg my-20" onClick={() => router.push("/top")}>ファッションECサイト</button> 
                <div  className="grid gap-y-4 grid-cols-3">
                    {
                        products?.map((ResponseProduct, i) => {
                            return (
                                <div key={i} onClick={() => router.push(`/product/${ResponseProduct.id}`)}>
                                    {ResponseProduct.product_images.map((productImage, index) => (
                                        <div key={index}>
                                            <NextImage alt={"jj"} height={500} width={400} src={productImage.image.path_url}></NextImage>
                                            {SouldOut(ResponseProduct.product_inventory_management?.number_of_stock)}
                                        </div>
                                    ))}
                                </div>
                            )
                        })            
                    }
                </div>
                {/* <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/login")}>ログイン</button> */}
            </div>
        )
}
