"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-slate-900"
        >
          MINI<span className="text-indigo-600">SHOP.</span>
        </Link>

        <Link
          href="/cart"
          className="group relative flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200"
        >
          <span>🛒</span>
          Shopping Cart
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-indigo-500 px-1.5 text-xs font-black text-white">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
}
