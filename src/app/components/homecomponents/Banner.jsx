
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-2xl m-4 sm:m-6 lg:m-8 bg-[#F5F1EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-12 flex flex-col md:flex-row items-center gap-10 md:gap-6 relative lg:min-h-[400px]">
        {/* Text content */}
        <div className="flex flex-col gap-5 flex-1 text-center md:text-left items-center md:items-start z-20 md:w-[52%] md:flex-none lg:w-[44%]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2942]">
            Curated Collection
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2B1B24] leading-[1.05] max-w-xl">
            Everything you need,
            <span className="text-[#8B2942] italic"> all in one place</span>
          </h1>

          <p className="text-sm sm:text-base text-[#2B1B24]/70 max-w-md">
            From everyday essentials to the things you didn't know you needed —
            shop thousands of products across every category, delivered fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href={"/shop-server"}
              className="px-7 py-3 rounded-full bg-[#8B2942] text-[#FDF8F6] text-sm font-semibold hover:bg-[#6E1F34] transition-colors text-center shadow-sm"
            >
              Shop Now
            </Link>
            <a
              href="/categories"
              className="px-7 py-3 rounded-full border border-[#2B1B24]/25 text-[#2B1B24] text-sm font-semibold hover:border-[#8B2942] hover:text-[#8B2942] transition-colors text-center"
            >
              Browse Categories
            </a>
          </div>

          {/* Stats */}
          <div className="hidden md:flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 mt-2">
            <Stat number="500+" label="Trusted Sellers" />
            <Stat number="10,000+" label="Products Listed" />
            <Stat number="50,000+" label="Happy Customers" />
          </div>
        </div>

        {/* Model image — normal flow on mobile, capped width */}
        <div className=" -right-2.5 relative w-full max-w-75 sm:max-w-90 md:w-[44%] md:max-w-none md:flex-none lg:hidden ">
          <Image
            src="/images/hero/mobileImage.png"
            alt="Mobile shopping promotion"
            width={1008}
            height={1060}
            priority
            className="w-full h-auto object-contain relative z-10"
          />
        </div>

        {/* Model image — desktop only, fills the full height of this content block, bled to the right edge */}
        <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[54%] overflow-hidden z-10">
          <Image
            src="/images/hero/modelImage.png"
            alt="Shopper holding bags"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 0px"
            className="object-contain object-bottom-right"
          />
        </div>
      </div>

      {/* Bottom strip — kept dark for contrast against the light hero */}
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-bold text-[#2B1B24]">{number}</p>
      <p className="text-xs sm:text-sm text-[#2B1B24]/70">{label}</p>
    </div>
  );
}

