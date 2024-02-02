'use client'
import React, { useMemo, useContext ,useState, SyntheticEvent } from 'react';
import { PaymentMethod, PaymentMethodResult } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, } from '@stripe/react-stripe-js';
import { PaymentProvider } from '../provider/PaymentProvider';
import { DeliveryDestinationList } from '../ui/deliveryDestination/DeliveryDestinationList';
import { useCookies } from "react-cookie";
import { CartContext } from "../provider/CartProvider"
import { useRouter } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";

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
    

    const [cookies, setCookie, removeCookie] = useCookies(["XSRF-TOKEN"]);

    const [selectedAddress, setAddress] = useState<number | null>(null)
  const Action = ({id}: {id: number}) => (
    <button className="w-100 btn btn-lg btn-primary" onClick={() => setAddress(id)}>
            配送先として選択
        </button>
  )

  const {cart, dispatch} = useContext(CartContext)

  const buyPrice = useMemo(() => cart.reduce((sum, productInCart) => (sum + productInCart.sum_price), 0), [cart])

    
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
            delivery_destination_id: selectedAddress,
            amount: buyPrice,
            payment_method_id: paymentMethod.id,
            products: cart,

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

  return (
    <form onSubmit={handleSubmit} className='w-1/2 mt-12 self-auto mx-auto'>
        <DeliveryDestinationList
         Action={Action}
        />
       <CardElement options={cardElementOptions}/>

      <button className='rounded-lg w-64 h-16 mt-4 hover:bg-neutral-500 bg-neutral-400' type="submit">購入</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export const PaymentForm = () => {
  const router = useRouter();
  return (
    <div>
      <PaymentProvider>
          <CheckoutForm />
      </PaymentProvider>
    </div>
  );
};