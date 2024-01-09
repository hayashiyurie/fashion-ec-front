import React from 'react';
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe('your_public_key');

type PropsType = {
    children: React.ReactNode;
  };
export const PaymentProvider = ({ children }:PropsType) => {
    const stripePromise = loadStripe('pk_test_51ONToEEPXyfhpMPQ4OOuUvojUXzX3g6129UxYB3tkcc51bi3OhFskfuq4PvsCDLdSJ3zwKn1yFJlViIKE2c6wKA800Aep6nBpB');
      const options:StripeElementsOptions = {
        appearance: {    theme: 'stripe'}
      }
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};