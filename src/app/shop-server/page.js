


// Server component — search bar is UI only for now, no state/logic, so no "use client" needed.
// Wire up filtering once ProductCard takes props again.


import { getProducts } from "../apiServices/productApi";
import ProductlistServer from "../components/productlistserver/ProductlistServer";


export const metadata = {
  title: "Shop Products",
  description:
    "Browse all products available at CodeMart. Find the best deals and latest items.",
};




  export default async function  ProductsPage() {

    let data = await getProducts()
  return (
    <div className="min-h-screen bg-[#F5F1EC]">
  

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
       

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
          Our Products
        </h2>

        {/* Product grid */}
        <ProductlistServer data ={data}/>
      </div>
    </div>
  );
}

