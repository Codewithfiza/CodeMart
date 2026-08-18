import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="mx-auto w-full max-w-[340px] rounded-2xl bg-[#60241E] p-4 shadow-lg shadow-[#2B1B24]/20 sm:rounded-3xl lg:max-w-[280px]">
      <div className="flex flex-col overflow-hidden rounded-xl bg-[#F2F1EF] sm:rounded-2xl">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 w-full object-cover lg:h-48"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xl font-bold text-[#F5F1EC] lg:text-base">
            {product.title}
          </h3>
          <p className="mt-1 line-clamp-2 max-w-[210px] text-sm leading-5 text-[#F5F1EC]/70 lg:text-xs lg:leading-4">
            {product.description}
          </p>
        </div>
        <p className="shrink-0 whitespace-nowrap text-xl font-bold text-[#F5F1EC] lg:text-base">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <Link
        href={`/shop-server/${product.id}`}
        className="mt-5 block w-full rounded-xl bg-[#F5F1EC] px-5 py-3 text-center text-sm font-semibold text-[#60241E] shadow-md transition-colors hover:bg-[#E8C4CC] lg:mt-4 lg:rounded-lg lg:px-3 lg:py-2 lg:text-xs"
      >
        Read more
      </Link>
    </article>
  );
}