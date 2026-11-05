import ProductCard from "./components/ProductCard";
import products from "./data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
            Welcome to Mini Shop
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Discover Our
            <span className="block text-indigo-600">Products.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            Explore our collection of premium products and find everything you
            need in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
