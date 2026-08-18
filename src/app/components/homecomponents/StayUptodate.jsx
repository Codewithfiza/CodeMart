export default function StayUptodate() {
  return (
    <section className="mx-4 py-8 sm:mx-6 sm:py-10 lg:mx-8 lg:py-12">
      <div className="flex flex-col gap-6 rounded-2xl bg-black px-6 py-7 sm:rounded-3xl sm:px-8 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-12">
        <h2 className="max-w-md font-serif text-2xl font-extrabold uppercase leading-[0.95] text-white sm:text-3xl lg:text-4xl">
          Stay up to date about our latest offers
        </h2>

        <form className="flex w-full max-w-md flex-col gap-3" action="#">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-full bg-white px-5 py-3 text-sm text-[#2B1B24] outline-none placeholder:text-[#2B1B24]/45 focus:ring-2 focus:ring-[#E8C4CC]"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#F5F1EC] px-5 py-3 text-sm font-semibold text-[#2B1B24] transition-colors hover:bg-[#E8C4CC]"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}
