// src/app/order-confirmed/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Check,
  ShoppingBag,
  ArrowRight,
  Mail,
  PackageCheck,
} from "lucide-react";





export default function OrderConfirmedPage() {
  const [order, setOrder] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");

    if (saved) {
      setOrder(JSON.parse(saved));
    }

    setChecked(true);
  }, []);

  // ================= LOADING =================

  if (!checked) {
    return null;
  }

  // ================= NO ORDER =================

  if (!order) {
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
            No Recent Order
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#F5F1EC]/60 sm:text-base">
            We couldn't find a recent order. Start shopping to place a new
            order.
          </p>

          <Link
            href="/shop-server"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F5F1EC] px-6 py-3.5 text-sm font-semibold text-[#60241E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8C4CC] hover:shadow-lg"
          >
            <ShoppingBag className="h-4 w-4" />
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl">

        {/* ================= SUCCESS HEADER ================= */}

        <div className="text-center">

          {/* Success icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F1EF] shadow-sm sm:h-24 sm:w-24">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#60241E] sm:h-14 sm:w-14">
              <Check
                className="h-7 w-7 text-white sm:h-8 sm:w-8"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Heading */}

          <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-[#F5F1EC]/50">
            Order Confirmed
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#F5F1EC] sm:text-4xl lg:text-5xl">
            Thank you, {order.name}! 🎉
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#F5F1EC]/70 sm:text-base">
            Your order has been placed successfully. We'll make sure your
            order gets to you soon.
          </p>

          {/* Order number */}

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F5F1EC]/15 bg-[#F5F1EC]/5 px-4 py-2">
            <PackageCheck className="h-4 w-4 text-[#F5F1EC]/70" />

            <span className="text-sm text-[#F5F1EC]/60">
              Order
            </span>

            <span className="text-sm font-bold text-[#F5F1EC]">
              #{order.orderId}
            </span>
          </div>

          {/* Email */}

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#F5F1EC]/50 sm:text-sm">
            <Mail className="h-4 w-4" />
            <span>
              Confirmation sent to{" "}
              <span className="font-medium text-[#F5F1EC]/70">
                {order.email}
              </span>
            </span>
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}

        <section className="mt-10 overflow-hidden rounded-2xl bg-[#F2F1EF] shadow-sm sm:mt-12">

          {/* Summary header */}

          <div className="flex items-center justify-between border-b border-[#60241E]/10 px-5 py-5 sm:px-7">
            <div>
              <h2 className="text-lg font-bold text-[#60241E] sm:text-xl">
                Order Summary
              </h2>

              <p className="mt-1 text-xs text-[#60241E]/50">
                {order.items.length}{" "}
                {order.items.length === 1 ? "item" : "items"} ordered
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

          <div className="divide-y divide-[#60241E]/10 px-5 sm:px-7">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-5"
              >
                {/* Product image */}

                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-20 sm:w-20">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                {/* Product details */}

                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-[#60241E] sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#60241E]/50 sm:text-sm">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="mt-2 inline-flex rounded-md bg-[#60241E]/5 px-2 py-1 text-xs font-medium text-[#60241E]/65">
                    Qty: {item.quantity}
                  </div>
                </div>

                {/* Item total */}

                <div className="shrink-0 text-right">
                  <p className="text-sm font-bold text-[#60241E] sm:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price breakdown */}

          <div className="border-t border-[#60241E]/10 px-5 py-5 sm:px-7">

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-[#60241E]/60">
                <span>Subtotal</span>

                <span className="font-medium text-[#60241E]">
                  ${order.total.toFixed(2)}
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

              <span className="text-xl font-bold text-[#60241E] sm:text-2xl">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#F5F1EC]/10 bg-[#F5F1EC]/5 px-4 py-4 sm:items-center">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F1EC]/10">
            <PackageCheck className="h-4 w-4 text-[#F5F1EC]/75" />
          </div>

          <p className="text-xs leading-5 text-[#F5F1EC]/55 sm:text-sm">
            Your order information has been saved. Keep your order number{" "}
            <span className="font-semibold text-[#F5F1EC]/75">
              #{order.orderId}
            </span>{" "}
            for your records.
          </p>
        </div>

        {/* ================= CTA ================= */}

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
          <Link
            href="/shop-server"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F2F1EF] px-7 py-3.5 text-sm font-semibold text-[#60241E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8C4CC] hover:shadow-lg sm:w-auto"
          >
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}