import React from 'react'

const Searchbar = ({value, onChange}) => {
  return (
    <>

    {/* Search bar */}
        <div className="relative max-w-xl mx-auto sm:mx-0 mb-8">
          <input
            type="text"
            value={value}
            onChange ={onChange}
            placeholder="Search products..."
            className="w-full rounded-full border border-primary/20 bg-white px-5 py-3 pl-11 text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:border-accent transition-colors"
          />
          <SearchIcon />
        </div>
    </>
   
     
  )
}

export default Searchbar


function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}