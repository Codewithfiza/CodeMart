import { getProductDetails } from '@/app/apiServices/productApi'
import ProductDetailData from '@/app/components/productlistserver/ProductDetailData';
import React from 'react'

const ProductDetailPage = async ({params}) => {
  let {pid} = await params
  let data = await getProductDetails(pid);
  return (
    <div>
      <ProductDetailData data={data}/>
    </div>
  )
}

export default ProductDetailPage