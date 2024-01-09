
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import { type } from "os";
import { useEffect, useState, } from "react";
import { DeliveryDestinationList as DeliveryDestinationListType} from "@/types/deliveryDestination";


export interface ResponseData {
    delivery_destinations : DeliveryDestinationListType
}

type PropsType = {
    Action: ({ id }: { id: number; }) => JSX.Element
}
export const DeliveryDestinationList = ({Action}: PropsType) => {
    const [deliveList, setdeliveList] = useState<DeliveryDestinationListType>([]);
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
                            {<Action id={ResponseData.id}/>}
                    </div>
                )}
            </div>
        )   
}