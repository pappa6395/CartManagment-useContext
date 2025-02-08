"use client"

import { useCart } from '@/context/CartContext'
import { IProduct } from '@/type'
import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'
import CartView from './CartView'



const ProductList = ({products}: {products: IProduct[]}) => {

    const { cart } = useCart()
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (

    <div>
        <h2 className="scroll-m-20 text-gray-800 text-center border-b pb-2 mb-4 text-3xl 
        font-semibold tracking-tight first:mt-0">
            Shopping Cart Management
        </h2>
        <div className='grid grid-cols-12 gap-4 divide-x-2'>
          <div className='col-span-9'>
            <ProductCard products={products}/>
          </div>
          <div className='col-span-3'> 
            <CartView />
          </div>
        </div>
        
    </div>

  )
}

export default ProductList