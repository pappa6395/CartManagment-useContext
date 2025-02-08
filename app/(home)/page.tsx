import { getAllProducts } from '@/action/products'
import ProductList from '@/components/ProductList'
import React from 'react'

const page = async () => {

    const products = await getAllProducts()

  return (

    <div>
        <ProductList products={products} />
    </div>

  )
}

export default page