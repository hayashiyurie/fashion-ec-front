"use client";
import NextImage from 'next/image'
import React, { useState,useEffect } from 'react';

interface Customer {
    id: number;
    last_name: string;
    first_name: string;
    last_name_kana: string;
    first_name_kana:string;
    postcode:string;
    address: string;
    phone_number: number;
    email: string;
    password: string;
}

interface ResponseRgister {
    registers: ResponseRgister[]
 }

export default function Register() {
    
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, seteEail] = useState<string>('');
    const [password, setPeassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');



//   function greeting() {
//     alert("Hello!");
//   }

// return (
//     <div>
//       <button onClick={greeting}>Click me!</button>
//     </div>
//   );
// };
    const save = async ()  => {
        console.log('aa')
        try {
            const res = await fetch('http://localhost:8080/api/customer_register', {
                method: 'POST',
                body : JSON.stringify({first_name :firstName, last_name: lastName, email:email, password: password, }),
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },})
                const data = await res.json()
                if (res.status === 422) {
                    alert(data.message)
                }
        } catch (error) {

        }

       
        
        // fetch('http://localhost:8080/api/customer_register', {
        //     method: 'POST',
        //     body : JSON.stringify({first_name :firstName, last_name: lastName, email:email, password: password, }),
        //     headers: {
        //         'Accept': 'application/json',
        //         "Content-Type": "application/json",
        //     },})
        //     .then(async res => {
        //         const data = await res.json();
        //         if (res.status == 422) {
        //            console.log(data.message);
        //         }
                
        //     })
        //     .catch((e) => {
     
                
        //     })


    }
        

    return (
        <div className='flex justify-center'>
            <main className="form-signin">
				{/* <form> */}
					<h1 className="h3 mb-3 fw-normal">Please register</h1>
					<div className="form-floating">
						<input className="form-control m-2" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
						<label>First Name</label>
					</div>
					<div className="form-floating">
						<input className="form-control m-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
						<label>Last Name</label>
					</div>
					<div className="form-floating">
						<input type="email" className="form-control m-2" placeholder="name@example.com" value={email} onChange={(e) => seteEail(e.target.value)}/>
						<label>Email address</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control m-2" placeholder="Password" value={password} onChange={(e) => setPeassword(e.target.value)}/>
						<label>Password</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control m-2" placeholder="Password Confirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
						<label>Password Confirm</label>
					</div>
					<button className="rounded-lg w-60 h-16 m-3 hover:bg-neutral-500 bg-neutral-400" onClick={save}>登録</button> 
		  	</main>
        </div>
    )
}