import { CartProvider } from '@/context/CartContext'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Providers = ({children}: {children: React.ReactNode}) => {


  return (

    <div>
        <CartProvider>
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
            {children}
        </CartProvider>
    </div>

  )
}

export default Providers