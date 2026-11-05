"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    isLoaded,
  } = useCart();

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="font-bold text-indigo-600">Loading your cart...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Your Shopping Cart
          </span>

          <h1 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Shopping Cart.
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Review your selected products and manage your order.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="text-7xl">🛒</div>

            <h2 className="mt-6 text-2xl font-black text-slate-900">
              Your cart is empty!
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              You haven't added any products yet.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-2xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart Items */}

            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 transition hover:shadow-lg sm:flex-row sm:items-center"
                >
                  {/* Product Image */}

                  <div
                    className="flex h-32 w-full shrink-0 items-center justify-center rounded-2xl sm:w-32"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-5xl">{item.emoji}</span>
                  </div>

                  {/* Product Information */}

                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                      {item.category}
                    </span>

                    <h2 className="mt-2 text-lg font-black text-slate-900">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      {item.price.toLocaleString("fa-IR")} تومان
                    </p>
                  </div>

                  {/* Quantity Controls */}

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-700 transition hover:bg-slate-200"
                    >
                      -
                    </button>

                    <span className="min-w-6 text-center font-black text-slate-900">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600 transition hover:bg-indigo-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-xl px-3 py-2 text-sm font-bold text-red-500 transition hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <Link
                href="/"
                className="inline-flex items-center gap-2 py-3 text-sm font-bold text-indigo-600 transition hover:text-indigo-800"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}

            <aside className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black text-slate-900">
                Order Summary
              </h2>

              <div className="mt-8 flex justify-between text-sm text-slate-500">
                <span>Total Products</span>
                <span className="font-bold text-slate-900">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              <div className="mt-5 flex justify-between text-sm text-slate-500">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>

              <div className="my-7 border-t border-slate-100" />

              <div className="flex items-start justify-between gap-3">
                <span className="font-bold text-slate-900">Total Price</span>

                <span className="text-right text-xl font-black text-indigo-600">
                  {totalPrice.toLocaleString("fa-IR")}
                  <span className="mr-1 text-xs font-bold">تومان</span>
                </span>
              </div>

              <button
                disabled
                className="mt-8 w-full cursor-not-allowed rounded-2xl bg-slate-200 py-4 text-sm font-bold text-slate-500"
              >
                Checkout (Coming Soon)
              </button>

              <p className="mt-4 text-center text-xs leading-6 text-slate-400">
                This is a practice project. Online payment is not available.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
