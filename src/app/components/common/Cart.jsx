"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { selectCartCount } from "../../redux/features/cartslice"
const Cart = () => {
    const count = useSelector(selectCartCount);
  return (
        <Link href="/cart" className="relative inline-block">
      <ShoppingCart className="w-6 h-6 text-[#60241E]" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#60241E] text-xs font-bold text-white">
          {count}
        </span>
      )}
    </Link>

  )
}

export default Cart