import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CustomCookiesProvider } from './provider/CustomCookiesProvider'
import { CartProvider } from './provider/CartProvider'
import { IconContext } from 'react-icons'
import { Header } from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <Header/>
        <CustomCookiesProvider>
        <CartProvider>
        {children}
        </CartProvider>
        </CustomCookiesProvider>
        </body>
    </html>
  )
}
