"use client"
import { addToCart } from '@/app/redux/features/cartslice'
import React from 'react'
import { useDispatch } from 'react-redux'

const AddToCartButton = ({product, className}) => {
    const dispatch = useDispatch()
    const handleAddToCart = ()=>{
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.pice,
                thumbnail: product.thumbnail,
                quantity: 1,
            })
        )
    }
  return (
   <button onClick={handleAddToCart} className={className}>
    Add to Cart
   </button>
  )
}

export default AddToCartButton