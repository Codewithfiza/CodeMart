export default function CustomerReview() {
  return (
    <section className="mx-4 py-10 sm:mx-6 sm:py-12 lg:mx-8 lg:py-14">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-2xl font-extrabold uppercase text-[#F5F1EC] sm:text-3xl">
          Our Happy Customers
        </h2>
        <div className="hidden gap-2 sm:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5F1EC]/50 text-[#F5F1EC]">←</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5F1EC]/50 text-[#F5F1EC]">→</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl bg-[#F5F1EC] p-5 shadow-sm">
          <p className="text-sm tracking-widest text-[#D89A22]">★★★★★</p>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="font-semibold text-[#2B1B24]">Sarah M.</h3>
            <span className="text-xs text-[#2E8B57]">●</span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#2B1B24]/65">
            This store is now my go-to for quality and style. The clothes I received from Shop.co are comfortable and look great.
          </p>
        </article>

        <article className="rounded-2xl bg-[#F5F1EC] p-5 shadow-sm">
          <p className="text-sm tracking-widest text-[#D89A22]">★★★★★</p>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="font-semibold text-[#2B1B24]">Alex K.</h3>
            <span className="text-xs text-[#2E8B57]">●</span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#2B1B24]/65">
            I am thrilled with my personal shopping experience. The selection is diverse and the quality is exceptional.
          </p>
        </article>

        <article className="rounded-2xl bg-[#F5F1EC] p-5 shadow-sm">
          <p className="text-sm tracking-widest text-[#D89A22]">★★★★★</p>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="font-semibold text-[#2B1B24]">James L.</h3>
            <span className="text-xs text-[#2E8B57]">●</span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#2B1B24]/65">
            The service was excellent from start to finish. I will definitely be shopping here again and recommending it to friends.
          </p>
        </article>

        <article className="rounded-2xl bg-[#F5F1EC] p-5 shadow-sm">
          <p className="text-sm tracking-widest text-[#D89A22]">★★★★★</p>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="font-semibold text-[#2B1B24]">Maya R.</h3>
            <span className="text-xs text-[#2E8B57]">●</span>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#2B1B24]/65">
            Fast delivery, beautiful products, and a smooth checkout process. Everything exceeded my expectations.
          </p>
        </article>
      </div>
    </section>
  );
}
