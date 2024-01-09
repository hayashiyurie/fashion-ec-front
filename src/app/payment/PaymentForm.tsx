'use client'
import React, { useState, SyntheticEvent } from 'react';
import { PaymentMethod, PaymentMethodResult } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, } from '@stripe/react-stripe-js';
import { PaymentProvider } from '../provider/PaymentProvider';
import { DeliveryDestinationList } from '../ui/deliveryDestination/DeliveryDestinationList';
import { useCookies } from "react-cookie";

interface Order {
  id: number;
  postage: number;
  billing_amount: number;
  method_of_payment: string;
  destinations_name: string;
  destinations_postcode:string;
  destinations_address:string;
  address: string;
  phone_number: number;
  order_status: string;
  password: string;
}
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<String|null>(null);
  
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    
    const { paymentMethod, error } = await stripe!.createPaymentMethod(
      {
        type: 'card',
        card: elements.getElement(CardElement) as any,
      }
      )
      
      if (error) {
        setError(error.message!);
      } else {
        // トークンをサーバーに送信
        handlePayment(paymentMethod);
      }
    };
    
    const [postage, setPostage] = useState<number>();
    const [billingAmount, setBillingAmount] = useState<number>();
    const [methodOfPayment, setMethodOfPayment] = useState<string>('');
    const [destinationsName, setDestinationsName] = useState<string>('');
    const [destinationsPostcode, setDestinationsPostcode] = useState<string>('');
    const [destinationsAddress, setdDstinationsAddress] = useState<string>('');
    const [orderStatus, setOrderStatus] = useState<string>('');
    const [paymentMethod.id, setPaymentMethod.id] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);
    
  const handlePayment = async (paymentMethod: PaymentMethod) => {
    try {
      // removeCookie("XSRF-TOKEN")

     fetch('http://localhost:8080/sanctum/csrf-cookie', {
      method: 'GET',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
      },

     }).then(async () => {
      // console.log(cookies)
      const res = await fetch('http://localhost:8080/api/order', {
          method: 'POST',
          body : JSON.stringify({
            postage :postage,
            billing_amount: billingAmount,
            method_of_payment:methodOfPayment,
            destinations_name: destinationsName,
            destinations_postcode: destinationsPostcode,
            destinations_address: destinationsAddress,
            order_status: orderStatus,
            amount: amount,
            payment_method_id: paymentMethod.id
          }),
          headers: {
              'Accept': 'application/json',
              "Content-Type": "application/json",
              "X-XSRF-TOKEN": cookies["XSRF-TOKEN"]
          },
          credentials: 'include',
      })
          const data = await res.json()
          if (res.status === 404) {
              alert(data.message)
          }
     })
  } catch (error) {

  }
    // apiのリクエスト
    // 配送先id、合計金額、paymentMethod.id
    console.log(paymentMethod)
      // try {
      //     const res = await fetch('http://localhost:8080/api/order', {
      //         method: 'POST',
      //         body : JSON.stringify({
      //           postage :postage, billing_amount: billingAmount, method_of_payment:methodOfPayment, destinations_name: destinationsName, destinations_postcode: destinationsPostcode, destinations_address: destinationsAddress, order_status: orderStatus
      //         }),
      //         headers: {
      //             'Accept': 'application/json',
      //             "Content-Type": "application/json",
      //         },})
      //         const data = await res.json()
      //         if (res.status === 422) {
      //             alert(data.message)
      //         }
      // } catch (error) {

      // }
  };

  const cardElementOptions = {
    hidePostalCode: false,
    style: {
      
      base: {
        iconColor: '#c4f0ff',
      color: '#ff0',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      },
     
    },
  };

  const [selectedAddress, setAddress] = useState<number | null>(null)
  const Action = ({id}: {id: number}) => (
    <button className="w-100 btn btn-lg btn-primary" onClick={() => setAddress(id)}>
            配送先として選択
        </button>
  )

  return (
    <form onSubmit={handleSubmit} className='w-1/2 mt-12 mx-auto'>
        <DeliveryDestinationList
         Action={Action}
        />
       <CardElement options={cardElementOptions}/>

      <button type="submit">購入</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export const PaymentForm = () => {
  return (
    <PaymentProvider>
        <CheckoutForm />
    </PaymentProvider>
  );
};