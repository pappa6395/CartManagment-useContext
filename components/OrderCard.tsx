
import React from 'react'
import Image from 'next/image'
import { CartItem, useCart } from '@/context/CartContext'
import { Badge } from './ui/badge'
import { Minus, Plus, Trash2 } from 'lucide-react'

const OrderCard = ({product}: {product: CartItem}) => {

    const { removeFromCart, decrementQuantity, incrementQuantity } = useCart()

    
  return (

    <div>
        <div className='flex items-center justify-between p-2 gap-2'>
            <div className='flex gap-2'>
                <Image
                src={product?.image ?? "/StockOnline.png"}
                alt="product"
                width={200}
                height={280}
                className='h-16 w-14 object-contain' 
                />
                <div>
                    <div className='py-2'>
                        <h3 className='font-bold text-md line-clamp-2'>{product.title}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <Badge 
                            variant={"outline"} 
                            className='text-sm font-semibold shadow-sm 
                            text-indigo-500 rounded-lg'
                        >
                            ${product.price}
                        </Badge>
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex justify-end items-end'>
                    <button  
                        type={"button"} 
                        onClick={() => decrementQuantity(product.id)} 
                        className='size-6 rounded-full'
                    >
                        <Minus className='size-4'/>
                    </button>
                </div>
                <div className='flex justify-end items-end'>
                    <button disabled type={"button"} className='size-6 rounded-full'>
                        <span className='text-primary'>{product.quantity}</span>
                    </button>
                </div>
                <div className='flex justify-end items-end'>
                    <button 
                        type={"button"} 
                        onClick={() => incrementQuantity(product.id)} 
                        className='size-6 rounded-full'
                    >
                        <Plus className='size-4'/>
                    </button>
                </div>
            </div>
        </div>
        <div className='flex justify-end items-end'>
            <button  
                type={"button"} 
                onClick={() => removeFromCart(product.id)} 
                className='bg-destructive px-2 py-2 gap-2 flex text-white rounded-xl'
            >
                <Trash2 className='size-4'/>
            </button>
        </div>
    </div>

  )
}

export default OrderCard