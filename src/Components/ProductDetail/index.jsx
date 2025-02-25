import React from 'react'

import { ShoppingCartContext } from "../../Context";
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

function ProductDetail() {

  const context = useContext(ShoppingCartContext)
  console.log('producto: ', context.productToShow)
  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <XMarkIcon className="size-6 text-black"></XMarkIcon>
            </div>
        </div>

        <figure>
          <img 
          className='w-full h-full rounded-lg' 
          src={context.productToShow.images[0]} 
          alt={context.productToShow.title} />
        </figure>
        <p>
          <span>${context.productToShow.price}</span>
          <span>${context.productToShow.title}</span>
          <span>${context.productToShow.description}</span>
        </p>

    </aside>
  )
}

export default ProductDetail