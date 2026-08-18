// Server component — no hooks used, no "use client" needed.

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#F5F1EC] text-primary rounded-2xl m-4 sm:m-6 lg:m-6 p-6 sm:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo + tagline */}
        <div>
          <a href="/" className="text-2xl font-bold tracking-tight text-primary">
            Code<span className="text-accent">Mart</span>
          </a>
          <p className="mt-2 text-sm text-primary/70 max-w-xs">
            Quality products, delivered to your door.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-accent mb-3">Shop</h3>
            <ul className="flex flex-col gap-2 text-sm text-primary/80">
              <li><Link href={"/shop-server"} className="hover:text-accent transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-accent transition-colors">Categories</Link></li>
              <li><Link href="/deals" className="hover:text-accent transition-colors">Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-accent mb-3">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-primary/80">
              <li><Link href={"/about-us"} className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href={"/contact"} className="hover:text-accent transition-colors">Contact</Link></li>
            
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-accent mb-3">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-primary/80">
              <li><a href="/faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="/returns" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-accent/30 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary/60">
        <p>© {new Date().getFullYear()} CodeMart. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-accent transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-accent transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}