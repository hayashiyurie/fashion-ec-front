"use client";

import { useEffect, useState } from "react";
import NextImage from 'next/image';

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

interface Genre {
    id: number;
    genre_name: string;
}

interface ResponseData {
    product: ResponseProduct
}
type ResponseProduct = Product & {product_images: ProductImage[], product_inventory_management: ProductInventoryManagement, genre:Genre}


export default function ProductDetail({ params }: { params: { show: string } }) {
    const [product, setProduct] = useState<ResponseProduct | null > (null);

    useEffect(() => {

        fetch('http://localhost:8080/api/product/show/1', {
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
                    
                    // ResponseProduct.product_images.map((productImage, index) => (
                        <div key={index}>
                            <NextImage alt={"jj"} height={500} width={500} src={productImage.image.path_url}></NextImage>
                        </div>
                    )
                }
            </ul>
                <h1>{product?.product_name}</h1>
                <p>{product?.tax_included_price}</p>
                <p>{product?.genre.genre_name}</p>
        </div>
    //   <div>
    //     <h1>{product?.product_name}</h1>
    //     <p>記事のスラッグ: {params.show}</p>
    //     <p>{product?.tax_included_price}</p>
    //     <p>({product?.:Product, product_images:ProductImage[], images:Image})</p>
    //   </div>
    );
  }