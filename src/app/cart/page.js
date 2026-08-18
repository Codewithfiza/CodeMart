
"use client";


import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingCart,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
} from "../redux/features/cartslice";
import QuantitySelector from "../components/common/QuantitySelector";
import Link from "next/link";
import toast from "react-hot-toast";

export default function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
    toast(`${item.title} removed`);
  };

  // ---------------- EMPTY CART ----------------
  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F1EF] shadow-sm">
            <ShoppingCart
              className="h-9 w-9 text-[#60241E]/70"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-2xl font-bold text-[#F5F1EC] sm:text-3xl">
            Your cart is empty
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#F5F1EC]/65 sm:text-base">
            Looks like you haven't added anything to your cart yet.
            Discover something you'll love.
          </p>

          <Link
            href="/shop-server"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F5F1EC] px-6 py-3.5 text-sm font-semibold text-[#60241E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8C4CC] hover:shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#F5F1EC]/55">
            Shopping Bag
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#F5F1EC] sm:text-4xl">
                Your Cart
              </h1>

              <p className="mt-2 text-sm text-[#F5F1EC]/60 sm:text-base">
                {items.length} {items.length === 1 ? "item" : "items"} in your
                cart
              </p>
            </div>

            <Link
              href="/shop-server"
              className="hidden items-center gap-1.5 text-sm font-medium text-[#F5F1EC]/70 transition-colors hover:text-[#F5F1EC] sm:flex"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-8">
          {/* ================= CART ITEMS ================= */}
          <section className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-[#F5F1EC]/10 bg-[#F2F1EF] p-4 shadow-sm transition-all duration-200 hover:border-[#F5F1EC]/20 hover:shadow-md sm:p-5"
              >
                {/* Product top section */}
                <div className="flex gap-4 sm:gap-5">
                  {/* Image */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-28 sm:w-28">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h2 className="line-clamp-2 text-base font-semibold leading-6 text-[#60241E] sm:text-lg">
                          {item.title}
                        </h2>

                        <p className="mt-1 text-sm text-[#60241E]/60">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      {/* Desktop delete button */}
                      <button
                        type="button"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.title}`}
                        title="Remove item"
                        className="hidden h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#60241E]/45 transition-all duration-200 hover:bg-red-50 hover:text-red-600 sm:flex"
                      >
                        <Trash2 className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </button>
                    </div>

                    {/* Mobile price */}
                    <div className="mt-4 flex items-center justify-between sm:hidden">
                      <p className="text-base font-bold text-[#60241E]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.title}`}
                        title="Remove item"
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-[#60241E]/45 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2
                          className="h-[18px] w-[18px]"
                          strokeWidth={1.8}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product controls */}
                <div className="mt-4 flex items-center justify-between border-t border-[#60241E]/10 pt-4 sm:mt-5 sm:pt-4">
                  <div className="flex items-center gap-3">
                    <span className="hidden text-xs font-medium uppercase tracking-wide text-[#60241E]/50 sm:block">
                      Quantity
                    </span>

                    <QuantitySelector
                      quantity={item.quantity}
                      onChange={(newQty) =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: newQty,
                          })
                        )
                      }
                    />
                  </div>

                  {/* Desktop item total */}
                  <p className="hidden text-lg font-bold text-[#60241E] sm:block">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* ================= ORDER SUMMARY ================= */}
          <aside className="lg:sticky lg:top-6">
            <div className="rounded-2xl bg-[#F2F1EF] p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-bold text-[#60241E]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between text-[#60241E]/65">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#60241E]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#60241E]/65">
                  <span>Shipping</span>
                  <span className="font-medium text-[#60241E]">
                    Free
                  </span>
                </div>

                <div className="border-t border-[#60241E]/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-[#60241E]">
                      Total
                    </span>

                    <span className="text-xl font-bold text-[#60241E]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#60241E] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7a2f27] hover:shadow-lg active:scale-[0.98]"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/shop-server"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-[#60241E]/15 px-5 py-3 text-sm font-semibold text-[#60241E] transition-colors hover:bg-[#60241E]/5 sm:hidden"
              >
                Continue Shopping
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-[#60241E]/50">
                Taxes and shipping costs are calculated at checkout.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}