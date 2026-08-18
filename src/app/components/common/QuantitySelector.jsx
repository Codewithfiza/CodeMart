// src/app/components/common/QuantitySelector.jsx
"use client";

export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }) {
  return (
    <div className="flex items-center gap-4 border border-[#60241E]/30 rounded-lg px-3 py-2 w-fit">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        className="text-lg font-bold text-[#60241E]"
      >
        −
      </button>
      <span className="w-6 text-center text-black">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        className="text-lg font-bold text-[#60241E]"
      >
        +
      </button>
    </div>
  );
}