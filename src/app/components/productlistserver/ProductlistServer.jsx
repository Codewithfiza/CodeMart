"use client"
import React, { useState } from 'react'
import ProductCard from '../common/ProductCard'
import Searchbar from '@/app/shop-components/Searchbar'

const ProductlistServer = ({data}) => {
   
    const [query, setQuery] = useState("")

    const filteredProducts = query.trim()
    ? data.filter((product)=>
        product.title.toLowerCase().includes(query.toLowerCase())
    ):
    data

    
  return (
    <>
    <Searchbar value= {query} onChange={(e)=> setQuery(e.target.value)}/>

{filteredProducts.length === 0?(
     <p className="text-primary">No products found.</p>
):(
     <div className="justify-items-center overflow-x-hidden items-stretch grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
    {filteredProducts.map((product)=>(
        <ProductCard key={product.id} product={product}/>

    ))}
       
        </div>

)}


   
    </>
   
  )
}

export default ProductlistServer