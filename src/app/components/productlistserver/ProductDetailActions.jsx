"use client"

import { addToCart } from '@/app/redux/features/cartslice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import QuantitySelector from '../common/QuantitySelector';
import toast from "react-hot-toast";

const ProductDetailActions = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


    const handleAddToCart = ()=>{
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
                quantity,
            })
        );
         toast.success(`${quantity} × ${product.title} added to cart!`);
    }
  return (
     <div className="mt-7 flex flex-wrap items-center gap-3">
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <button
        type="button"
        onClick={handleAddToCart}
        className="rounded-md bg-[#60241E] px-6 py-3 font-semibold text-white transition hover:bg-[#95271D]"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetailActions