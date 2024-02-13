"use client";
import { useRouter } from "next/navigation";
import { Order, OrderProduct } from "@/types/order";
import { useEffect, useState } from "react";

interface ResponseData {
    orderHistory: Order[];
}
export default function History() {
    const router = useRouter();
    const [orderHistory, setOrderHistory] = useState<Order[]>([]);
    let orderHistoryUrl = 'http://localhost:8080/api/order/history';

        useEffect(() => {
            fetch(orderHistoryUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                  },})
            .then(res => res.json())
            .then((data: ResponseData) => {
                // console.log(data);
                setOrderHistory(data.orderHistory)
            })
        },[])
        return(
            <div className='w-3/4 mx-auto grid'>
                <div className="place-self-center">
                    <div className="grid grid-cols-6 gap-4">
                        <p className="col-span-2">ご注文日</p>
                        <p className="">決済方法</p>
                        <p className="pl-2">合計金額</p>
                        <p className="">ご注文状況</p>
                    </div>
                    {
                        orderHistory?.map((order,i) => 
                            <div key={i} className="grid grid-cols-6 gap-2 text-sm border-y py-3 mt-5">
                                    <p className="col-span-2">{order?.created_at}</p>
                                    <p className="">{order?.method_of_payment}</p>
                                    <p className="pl-5">¥{order?.billing_amount}</p>
                                    <p className="pl-2">{order?.order_status}</p>
                                    <button className="rounded-lg hover:bg-neutral-300 bg-white" onClick={() => router.push(`/orderHistory/${order.id}`)}>注文詳細</button>
                            </div>
                        )
                    }

                </div>
            </div>
            
        )
}