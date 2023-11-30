"use client";
import NextImage from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react';
 

interface Product {
    id: number;
    size_id: number;
    color_id: number;
    genre_id: number;
    product_name:string;
    explanation:string;
    tax_included_price: number;
    jan_code: string;
    sku_code: string;
}

interface ProductImage {
    id: number;
    product_id: number;
    image_id: number;
    sort_order: string;
    image: Image
    
}

interface Image {
    id: number;
    path: string;
    path_url: string
}

interface ProductInventoryManagement {
    id: number;
    product_id: string;
    number_of_stock: number
}

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

        useEffect(() => {
            fetch('http://localhost:8080/api/product', {
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
        console.log(products)

        return (
            <div>
                <ul>
                    {
                        products?.map((ResponseProduct) => 
                        
                        ResponseProduct.product_images.map((productImage, index) => (
                            <div key={index}>
                                <NextImage alt={"jj"} height={500} width={500} src={productImage.image.path_url}></NextImage>
                                {SouldOut(ResponseProduct.product_inventory_management?.number_of_stock)}
                             </div>
                        ))
                        )
                    }
                </ul>

                <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push("/login")}>ログイン</button>
            </div>
            
        )
        // } 
}
