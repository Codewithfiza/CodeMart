// src/app/checkout/page.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  User,
} from "lucide-react";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../redux/features/cartslice";
import Link from "next/link";
import toast from "react-hot-toast";




export default function CheckoutPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      orderId: Math.floor(100000 + Math.random() * 900000),
      name: formData.name,
      email: formData.email,
      items,
      total,
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    dispatch(clearCart());

    toast.success("Your order has been placed!");
    router.push("/order-confirmed");
  };

  // ================= EMPTY CART =================

  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F1EF]">
            <ShoppingBag
              className="h-9 w-9 text-[#60241E]/70"
              strokeWidth={1.5}
            />
          </div>

          <h1 className="text-2xl font-bold text-[#F5F1EC] sm:text-3xl">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-[#F5F1EC]/60 sm:text-base">
            Add some products to your cart before checking out.
          </p>

          <Link
            href="/shop-server"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F5F1EC] px-6 py-3.5 text-sm font-semibold text-[#60241E] transition-all hover:-translate-y-0.5 hover:bg-[#E8C4CC]"
          >
            <ArrowLeft className="h-4 w-4" />
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
          <Link
            href="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#F5F1EC]/65 transition-colors hover:text-[#F5F1EC]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#F5F1EC]/50">
            Checkout
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#F5F1EC] sm:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-2 text-sm text-[#F5F1EC]/60 sm:text-base">
            Enter your details below to place your order.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px] lg:gap-8">

          {/* ================= SHIPPING FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-[#F2F1EF] p-5 shadow-sm sm:p-7 lg:p-8"
          >
            {/* Section heading */}

            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#60241E]/10">
                  <MapPin
                    className="h-5 w-5 text-[#60241E]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#60241E]">
                    Shipping Details
                  </h2>

                  <p className="mt-0.5 text-xs text-[#60241E]/55">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">

              {/* Full Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#60241E]"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#60241E]/40" />

                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[#60241E]/15 bg-white pl-11 pr-4 text-sm text-[#60241E] outline-none transition-all placeholder:text-[#60241E]/35 focus:border-[#60241E]/40 focus:ring-2 focus:ring-[#60241E]/10"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#60241E]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#60241E]/40" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[#60241E]/15 bg-white pl-11 pr-4 text-sm text-[#60241E] outline-none transition-all placeholder:text-[#60241E]/35 focus:border-[#60241E]/40 focus:ring-2 focus:ring-[#60241E]/10"
                  />
                </div>
              </div>

              {/* Address */}

              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-medium text-[#60241E]"
                >
                  Street Address
                </label>

                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#60241E]/40" />

                  <input
                    id="address"
                    name="address"
                    required
                    placeholder="House number and street"
                    value={formData.address}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[#60241E]/15 bg-white pl-11 pr-4 text-sm text-[#60241E] outline-none transition-all placeholder:text-[#60241E]/35 focus:border-[#60241E]/40 focus:ring-2 focus:ring-[#60241E]/10"
                  />
                </div>
              </div>

              {/* City + Phone */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-[#60241E]"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    required
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-[#60241E]/15 bg-white px-4 text-sm text-[#60241E] outline-none transition-all placeholder:text-[#60241E]/35 focus:border-[#60241E]/40 focus:ring-2 focus:ring-[#60241E]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#60241E]"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#60241E]/40" />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="03XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-[#60241E]/15 bg-white pl-11 pr-4 text-sm text-[#60241E] outline-none transition-all placeholder:text-[#60241E]/35 focus:border-[#60241E]/40 focus:ring-2 focus:ring-[#60241E]/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="mt-8 flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#60241E] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7a2f27] hover:shadow-lg active:scale-[0.98]"
            >
              Confirm Order
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-3 text-center text-xs text-[#60241E]/45">
              By placing your order, you agree to our terms and conditions.
            </p>
          </form>

          {/* ================= ORDER SUMMARY ================= */}

          <aside className="h-fit lg:sticky lg:top-6">
            <div className="rounded-2xl bg-[#F2F1EF] p-5 shadow-sm sm:p-7">

              {/* Summary heading */}

              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#60241E]">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-xs text-[#60241E]/50">
                    {items.length}{" "}
                    {items.length === 1 ? "item" : "items"}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#60241E]/10">
                  <ShoppingBag
                    className="h-5 w-5 text-[#60241E]"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Products */}

              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-medium leading-5 text-[#60241E]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-[#60241E]/50">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-[#60241E]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price breakdown */}

              <div className="mt-6 space-y-3 border-t border-[#60241E]/10 pt-5 text-sm">
                <div className="flex justify-between text-[#60241E]/60">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#60241E]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-[#60241E]/60">
                  <span>Shipping</span>
                  <span className="font-medium text-[#60241E]">
                    Free
                  </span>
                </div>
              </div>

              {/* Total */}

              <div className="mt-5 flex items-center justify-between border-t border-[#60241E]/15 pt-5">
                <span className="text-base font-bold text-[#60241E]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#60241E]">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Secure checkout */}

              <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#60241E]/5 px-3 py-3">
                <Check
                  className="h-4 w-4 shrink-0 text-[#60241E]"
                  strokeWidth={2}
                />

                <p className="text-xs leading-5 text-[#60241E]/65">
                  Your order details are securely processed.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}