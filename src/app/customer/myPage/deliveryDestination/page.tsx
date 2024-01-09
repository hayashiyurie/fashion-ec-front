
'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import { type } from "os";
import { useEffect, useState, } from "react";
import { DeliveryDestinationList } from '@/app/ui/deliveryDestination/DeliveryDestinationList';



export default function List() {
    const router = useRouter();
    const action = ({id}: {id: number}) => (
        <button className="w-100 btn btn-lg btn-primary" onClick={() => router.push(`/customer/myPage/deliveryDestination/${id}`)}>
            編集
        </button>
    )
    return (
        <DeliveryDestinationList 
        Action={                 
            action
        }
        />
    )
}