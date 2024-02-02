"use client";
import { useRouter } from 'next/navigation';
import { Order, OrderProduct, Product, ProductImage } from "@/types/order";
import { useEffect, useState } from "react";
// import { Product, ProductImage } from '@/types/product';
import NextImage from 'next/image';
import { DeliveryDestination } from '@/types/deliveryDestination';
import { Customer } from '@/types/customer';

type ResponseOrder = Order & {customer: Customer}
type ResponseOrderProduct = OrderProduct & {product: Product, product_images: ProductImage[]}

interface ResponseData {
    orderDetail: ResponseOrder;
    orderProducts: ResponseOrderProduct[];
}
export default function Detail({ params }: { params: { detail: string } }) {
    console.log(params)
    const router = useRouter();
    const [orderDetail, setOrderDetail] = useState<ResponseOrder | null > (null);
    const [orderProducts, setOrderProducts] = useState<ResponseOrderProduct[]>([]);

    useEffect(() => {

        fetch(`http://localhost:8080/api/orderHistory/details/${params.detail}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },})
            .then(res => res.json())
            .then((data: ResponseData) => {
                setOrderDetail(data.orderDetail)
                setOrderProducts(data.orderProducts)
            })
        },[])

        return(
            <div className='w-1/2 mx-auto mt-5'>
                <h1>ご注文履歴詳細</h1>
                    
                    <div className='mt-5 divide-y'>
                         <p>郵便番号： {orderDetail?.destinations_postcode}</p>
                         <p>住所 ：{orderDetail?.destinations_address}</p>
                         <p>請求合計税込金額 ：¥{orderDetail?.billing_amount}(税込)</p>
                     </div>

                    <div className='mt-5'>
                    {
                        orderProducts.map((orderProduct,i) => {
                            return(
                                <div key={i} className='flex mt-5 gap-1.5 border items-center'>
                                        <div>
                                            <NextImage alt={"jj"} height={100} width={100} src={orderProduct.product.product_images?.[0].image.path_url}></NextImage>
                                        </div>
                                        <div>
                                        <p>{orderProduct.product.product_name}</p>
                                        <p>数量：{orderProduct.number_of_products}個</p>
                                        <p>価格：¥{orderProduct.tax_included_purchase_price}(税込)</p>
                                        </div>
                                </div>
                            )
                        })
                    }
                    <button className="mt-3 px-1 rounded w-auto h-12 hover:bg-neutral-500 bg-white border border-black" onClick={() => router.push("/orderHistory")}>注文履歴へ戻る</button>

                    </div>
            </div>
            
        )
}