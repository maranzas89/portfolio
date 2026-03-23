import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useStore } from '@/store/useStore';

const CATEGORIES = ['All', 'Clothing', 'Electronics', 'Accessories'] as const;
type Category = (typeof CATEGORIES)[number];

export function HomePage() {
  const navigate = useNavigate();
  const addItem = useStore((s) => s.addItem);
  const clearCart = useStore((s) => s.clearCart);
  const resetErrors = useStore((s) => s.resetErrors);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Interactive walkthrough guide */}
      <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50/60 px-5 py-4">
        <p className="text-sm font-semibold text-blue-800 mb-2">Try the full bug-to-diagnosis flow:</p>
        <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
          <li>Add any product to your cart</li>
          <li>Go to Cart and enter promo code <code className="font-mono bg-blue-100 px-1.5 py-0.5 rounded text-blue-900 font-semibold">SUMMER25</code>, then click Apply</li>
          <li>Click <strong>Proceed to Checkout</strong> — an error will appear blocking checkout</li>
          <li>Switch to <strong>Dashboard</strong> (top bar) to investigate the error, view the stack trace, and watch the session replay</li>
        </ol>
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-blue-500">💡 Without a promo code (or with <code className="font-mono bg-blue-100 px-1 py-0.5 rounded">SAVE10</code>), checkout works normally.</p>
          <button
            onClick={() => { clearCart(); resetErrors(); window.location.reload(); }}
            className="shrink-0 ml-4 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
          >
            Reset Demo
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700">New Arrivals</h2>
        <p className="mt-1 text-gray-400 text-sm">
          Discover our latest collection of clothing, electronics, and accessories.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
              activeCategory === cat
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400 hover:text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/store/product/${product.id}`)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all"
          >
            {/* Product image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card body */}
            <div className="p-4">
              <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-2">
                {product.category}
              </span>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-snug">
                {product.name}
              </h3>
              <p className="mt-1 text-base font-bold text-gray-700">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addItem({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  });
                }}
                className="mt-3 w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
