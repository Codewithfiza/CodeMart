import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[#F5F1EC] px-6 py-14 text-center shadow-xl shadow-[#2B1B24]/15 sm:px-12 sm:py-20">
        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#E8C4CC]/65 blur-2xl" />
        <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#B34A44]/25 blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B2942]">
            Page not found
          </p>
          <p className="mt-3 font-serif text-[7rem] font-bold leading-none text-[#60241E] sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#2B1B24] sm:text-5xl">
            This aisle is empty.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#2B1B24]/65 sm:text-base">
            The page you are looking for may have moved, been removed, or never existed. Let&apos;s get you back to shopping.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#60241E] px-7 py-3 text-sm font-semibold text-[#F5F1EC] transition-colors hover:bg-[#95271D]"
            >
              Back to Home
            </Link>
            <Link
              href="/shop"
              className="rounded-full border border-[#60241E]/30 px-7 py-3 text-sm font-semibold text-[#60241E] transition-colors hover:border-[#60241E] hover:bg-[#E8C4CC]/40"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
