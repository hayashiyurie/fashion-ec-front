
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import { type } from "os";
import { useEffect, useState, } from "react";
import { DeliveryDestinationList} from "@/types/deliveryDestination";


export interface ResponseData {
    delivery_destinations : DeliveryDestinationList
}
export default function List() {
    const [deliveList, setdeliveList] = useState<DeliveryDestinationList>([]);
    const router = useRouter();

    useEffect(() => {
        fetch('http://localhost:8080/api/delivery_destination_list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },})
        .then(res => res.json())
        .then((data:ResponseData) => {
                setdeliveList(data.delivery_destinations)
            })
    },[])
    
        
        return (
            <div>
            {
                deliveList.map((ResponseData,i) =>
                    <div key={i}>
                            <p>{ResponseData.destinations_name}</p>
                            <p>{ResponseData.destinations_postcode}</p>
                            <p>{ResponseData.destinations_address}</p>
                            <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push(`/customer/myPage/deliveryDestination/${ResponseData.id}`)}>編集</button>
                    </div>
                )}
            </div>
        )   
}