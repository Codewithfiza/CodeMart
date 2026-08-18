import React from 'react'
import Link from 'next/link'

import ProductDetailActions from './ProductDetailActions'

const ProductDetailData = ({data}) => {
    let {id, title, description, price, category, thumbnail} = data
  return (
    <div>
        <main className="min-h-screen bg-gray-50 px-6 py-12">
                      <div className="mx-auto max-w-6xl">
                        <Link
                          href="/shop-server"
                          className="inline-flex text-sm font-semibold text-red-900 transition hover:text-red-950"
                        >
                          ← Back to shop
                        </Link>
                
                        <section className="mt-6 grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
                          <div className="bg-gray-100">
                            <img
                              src={thumbnail}
                              alt={title}
                              className="h-full min-h-80 w-full object-cover"
                            />
                          </div>
                
                          <div className="p-7 sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-widest text-[#60241E]">
                              New Arrival
                            </p>
                            <h1 className="mt-3 text-3xl font-bold text-[#B34A] sm:text-4xl">
                              {title}
                            </h1>
                            <p className="mt-4 text-2xl font-bold text-[#95271D]">${price.toFixed(2)}</p>
                
                            <p className="mt-6 leading-7 text-gray-600">
                              {description}
                            </p>
                
                            <div className="mt-7 border-y border-gray-200 py-5 text-sm text-gray-600">
                              <p><span className="font-semibold text-gray-900">Availability:</span> In Stock</p>
                              <p className="mt-2"><span className="font-semibold text-gray-900">Category:</span> {category}</p>
                            </div>
                
                            <div className="mt-7 flex flex-wrap gap-3">
                            <ProductDetailActions
                            product= {data}
                            
                            />
                              <button
                                type="button"
                                className="rounded-md border border-[#60241E] px-6 py-3 font-semibold text-[#60241E] transition hover:bg-[#95271D]"
                              >
                                Enquiry Now
                              </button>
                            </div>
                          </div>
                        </section>
                      </div>
                    </main>
        
    </div>
  )
}

export default ProductDetailData