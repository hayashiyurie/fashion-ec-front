'use client'
import { useState } from "react";
import { useCookies } from "react-cookie";
interface Delivery_destination {
    id: number;
    customer_id: number;
    destinations_name: string;
    destinations_postcode: string;
    destinations_address: string;
}
export const DeliveryDestinationStore = () => {
    // const [customerId, setcustomerId] = useState<string>('');
    const [lastNdestinationsNameame, setLastNdestinationsNameame] = useState<string>('');
    const [destinationsPostcode, setDestinationsPostcode] = useState<string>('');
    const [destinationsAddress, setDestinationsAddress] = useState<string>('');
    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);

    const save = async ()  => {
        try {
            const res = await fetch('http://localhost:8080/api/mypage/delivery_destination_register', {
                method: 'POST',
                body : JSON.stringify({destinations_name: lastNdestinationsNameame, destinations_postcode:destinationsPostcode, destinations_address: destinationsAddress, }),
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    "mode": 'cors',
                    "X-XSRF-TOKEN": cookies["XSRF-TOKEN"],
                   
                },
                credentials: 'include'
            })
                const data = await res.json()
                if (res.status === 422) {
                    alert(data.message)
                }
        } catch (error) {
            
        }
    }
    return (
        <div>
        <main className="form-signin">
                <div className="form-floating">
                    <input className="form-control" placeholder="宛名" value={lastNdestinationsNameame} onChange={(e) => setLastNdestinationsNameame(e.target.value)}
                     
                    />
                    <label>宛名</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="配送先郵便番号" value={destinationsPostcode} onChange={(e) => setDestinationsPostcode(e.target.value)}
                     
                    />
                    <label>配送先郵便番号</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="配送先住所" value={destinationsAddress} onChange={(e) => setDestinationsAddress(e.target.value)}
                    
                    />
                    <label>配送先住所</label>
                </div>
					
                <button className="w-100 btn btn-lg btn-primary" onClick={save}>登録</button> 

          </main>
    </div>
    )
}