// import { useState } from "react";

// export const DeliveryDestinationEdi = () => {
//     const [customerId, setcustomerId] = useState<string>('');
//     const [lastNdestinationsNameame, setLastNdestinationsNameame] = useState<string>('');
//     const [destinationsPostcode, setDestinationsPostcode] = useState<string>('');
//     const [destinationsAddress, setDestinationsAddress] = useState<string>('');

//     const save = async ()  => {
//         try {
//             const res = await fetch('http://localhost:8080/api//customer/delivery_destination_register', {
//                 method: 'POST',
//                 body : JSON.stringify({customer_id :customerId, destinations_name: lastNdestinationsNameame, destinations_postcode:destinationsPostcode, destinations_address: pasdestinationsAddresssword, }),
//                 headers: {
//                     'Accept': 'application/json',
//                     "Content-Type": "application/json",
//                 },})
//                 const data = await res.json()
//                 if (res.status === 422) {
//                     alert(data.message)
//                 }
//         } catch (error) {
//         }
//     }

//     return (
//         <div>
//         <main className="form-signin">
//                 <div className="form-floating">
//                     <input className="form-control" placeholder="宛名" value={lastNdestinationsNameame} onChange={(e) => setLastNdestinationsNameame(e.target.value)}
                     
//                     />
//                     <label>宛名</label>
//                 </div>

//                 <div className="form-floating">
//                     <input className="form-control" placeholder="配送先郵便番号" value={destinationsPostcode} onChange={(e) => setDestinationsPostcode(e.target.value)}
                     
//                     />
//                     <label>配送先郵便番号</label>
//                 </div>

//                 <div className="form-floating">
//                     <input className="form-control" placeholder="配送先住所" value={destinationsAddress} onChange={(e) => setDestinationsAddress(e.target.value)}
                    
//                     />
//                     <label>配送先住所</label>
//                 </div>
//           </main>
//     </div>
//     )
// }

// 新規登録　更新　同時に登録更新