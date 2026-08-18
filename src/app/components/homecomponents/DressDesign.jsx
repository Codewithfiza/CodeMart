export default function DressDesign() {
  return (
    <section className="mx-4 pb-10 pt-4 sm:mx-6 sm:pb-12 sm:pt-6 lg:mx-8">
      <div className="rounded-2xl bg-[#F5F1EC] p-4 sm:rounded-3xl sm:p-6 md:p-7">
        <h2 className="mb-4 text-center text-xl font-extrabold uppercase text-[#2B1B24] sm:mb-5 sm:text-2xl">
          Browse by Dress Style
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <a href="#" className="group relative min-h-36 overflow-hidden rounded-2xl bg-white sm:min-h-40">
            <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80" alt="Casual clothing" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-transparent" />
            <span className="relative z-10 block p-4 text-lg font-bold text-[#2B1B24] sm:p-5 sm:text-xl">Casual</span>
          </a>

          <a href="#" className="group relative min-h-36 overflow-hidden rounded-2xl bg-white sm:min-h-40 md:col-span-2">
            <img src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=80" alt="Formal clothing" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-transparent" />
            <span className="relative z-10 block p-4 text-lg font-bold text-[#2B1B24] sm:p-5 sm:text-xl">Formal</span>
          </a>

          <a href="#" className="group relative min-h-36 overflow-hidden rounded-2xl bg-white sm:min-h-40 md:col-span-2">
            <img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80" alt="Party clothing" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-transparent" />
            <span className="relative z-10 block p-4 text-lg font-bold text-[#2B1B24] sm:p-5 sm:text-xl">Party</span>
          </a>

          <a href="#" className="group relative min-h-36 overflow-hidden rounded-2xl bg-white sm:min-h-40">
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80" alt="Gym clothing" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/20 to-transparent" />
            <span className="relative z-10 block p-4 text-lg font-bold text-[#2B1B24] sm:p-5 sm:text-xl">Gym</span>
          </a>
        </div>
      </div>
    </section>
  );
}
