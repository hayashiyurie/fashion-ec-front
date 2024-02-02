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
            <div>
                {
                    orderHistory?.map((order,i) => 
                        <div key={i}>
                                <p>{order?.billing_amount}</p>
                                <p>{order?.method_of_payment}</p>
                                <p>{order?.created_at}</p>
                                <p>{order?.order_status}</p>
                                <button className="rounded-lg w-64 h-16 hover:bg-neutral-500 bg-neutral-400" onClick={() => router.push(`/orderHistory/${order.id}`)}>注文詳細</button>
                        </div>
                    )
                }
            </div>
            
        )
}