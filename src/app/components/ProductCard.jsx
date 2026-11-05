"use client";

import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-slate-200/70">
      <div
        className="flex h-56 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundColor: product.color }}
      >
        <span className="text-8xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          {product.emoji}
        </span>
      </div>

      <div className="px-2 pb-2 pt-5">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
          {product.category}
        </span>

        <h2 className="mt-2 text-lg font-black text-slate-900">
          {product.title}
        </h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-lg font-black text-slate-900">
            {product.price.toLocaleString("fa-IR")}
            <span className="mr-1 text-xs font-medium text-slate-500">
              تومان
            </span>
          </span>

          <button
            onClick={() => addToCart(product)}
            className="rounded-xl bg-indigo-600 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 active:scale-95"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
