"use client";

import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";
// Palette from brief:
// #60241E - deep maroon   (dark bg / text)
// #95271D - burnt red     (accent / hover)
// #B34A44 - muted rose     (secondary accent, borders)
// #F5F1EC - off-white      (added: needed a neutral for contrast — not in original palette)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <div className = "p-4 w-full sticky rounded-2xl">
  <header className="w-full sticky top-0 z-50 bg-[#F5F1EC] text-primary shadow-md rounded-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-primary hover:text-accent transition-colors"
          >
            Code<span className="text-accent">Mart</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href={"/"} className="text-sm font-medium text-primary hover:text-accent transition-colors">
              Home
            </Link>
            <Link href={"/shop-server"} className="text-sm font-medium text-primary hover:text-accent transition-colors">
              Shop
            </Link>
           
            <Link href={"/about-us"} className="text-sm font-medium text-primary hover:text-accent transition-colors">
              About
            </Link>
            <Link href={"/contact"} className="text-sm font-medium text-primary hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-4">
           
            <button
              aria-label="Cart"
              className="p-2 rounded-full hover:bg-secondary transition-colors relative"
            >
           <Cart/>
             
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-4 gap-2 border-t border-accent/40">
          <Link href={"/"} className="py-2 text-sm font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href={"/shop-server"} className="py-2 text-sm font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
         
          <Link href={"/about-us"} className="py-2 text-sm font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href={"/contact"} className="py-2 text-sm font-medium text-primary hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex items-center gap-4 pt-2">
           
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-secondary relative">
             <Cart/>
             
            </button>
          </div>
        </nav>
      </div>
    </header>
    </div>
  
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}



