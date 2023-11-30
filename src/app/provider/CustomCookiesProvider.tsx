"use client"
import { CookiesProvider } from "react-cookie"

export const CustomCookiesProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <CookiesProvider>
        {children}
        </CookiesProvider>
    )
}