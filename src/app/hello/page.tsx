"use client";
import Image from 'next/image'
import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

interface User {
    id: number;
    name: string;
    email: string;
}

interface ResponseData {
   users: User[]
}
export default function Hello() {
    
        const [hello, setHello] = useState<User[]>([]);

        useEffect(() => {
            fetch('http://localhost:8080/api/hello', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                  },})
            .then(res => res.json())
            .then((data: ResponseData) => {
                console.log(data);
                setHello(data.users)
            })
        },[])

        return (
            <div>
                <ul>
                    {
                        hello.map(user => 
                            <li key={user.id}>{`${user.name}: ${user.email}`}</li>       
                        )
                    }
                </ul>

            </div>
        )
          
}



        {/* fetch("/api/user") */}
        {/* レスポンスのボディーからJSONデータを取得 */}
        {/* then((response) => response.json()) 
        then((user) => alert(`名前：${users.}`))   */}

        {/* then(responses => Promise.all(responses.map(r => r.json()))) */}
        {/* すべての JSON応答が解析され、"user" はそれらの配列です。 */}
        {/* then(users => users.forEach(user => alert(user.name))); */}

