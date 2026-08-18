import { getProducts } from "@/app/apiServices/productApi";
import ProductCard from "../common/ProductCard";

export default async function NewArrival() {
    const data = await getProducts()
    const featured = data.slice(0,4)
  return (
    <section className="mx-4 rounded-3xl bg-[#F5F1EC] px-4 py-8 sm:mx-6 sm:px-6 sm:py-10 lg:mx-8 lg:px-8 lg:py-12">
      <div className="mb-5 text-center sm:mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B2942] sm:text-xs">
          Fresh picks
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-[#2B1B24] sm:mt-2 sm:text-3xl">
          Latest Products
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-3">
       {featured.map((product)=>(
        <ProductCard key={product.id} product={product}/>
       ))}
      </div>
    </section>
  );
}
