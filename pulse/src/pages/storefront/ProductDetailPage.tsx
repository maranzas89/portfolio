import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useStore } from '@/store/useStore';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const addItem = useStore((s) => s.addItem);

  const product = products.find((p) => p.id === Number(id));
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [addedToCart, setAddedToCart] = useState(false);

  // 3–4 random related products (exclude current)
  const related = products
    .filter((p) => p.id !== Number(id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400 text-lg">Product not found.</p>
        <Link
          to="/store"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Back to store
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/store"
            className="text-xl font-bold text-gray-700 tracking-tight hover:text-blue-600 transition-colors"
          >
            Pulse Store
          </Link>
          <button
            onClick={() => navigate('/store/cart')}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            <CartIcon />
            <span>Cart</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <button
          className="px-3 py-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-6 inline-flex items-center gap-1"
          onClick={() => navigate('/store')}
        >
          <ChevronLeftIcon />
          Back to all products
        </button>

        {/* Product detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product image */}
          <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {/* Category tag */}
            <span className="inline-block self-start text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-3">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-700 leading-tight">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-bold text-gray-700">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  Size
                  {selectedSizes.length > 0 && (
                    <span className="ml-2 font-normal text-gray-400">
                      — {selectedSizes.join(', ')}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes((prev) =>
                          prev.includes(size)
                            ? prev.filter((s) => s !== size)
                            : [...prev, size]
                        )
                      }
                      className={`px-3 py-1.5 text-sm rounded-lg border font-medium transition-colors ${
                        selectedSizes.includes(size)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-500 border-gray-300 hover:border-blue-400 hover:text-blue-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <div className="mt-8">
              {product.sizes && product.sizes.length > 0 && selectedSizes.length === 0 && (
                <p className="text-sm text-red-500 mb-3">Please select a size first</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!!(product.sizes && product.sizes.length > 0 && selectedSizes.length === 0)}
                className={`flex-1 sm:flex-none sm:min-w-[200px] w-full px-6 py-3 text-base font-medium text-white rounded-lg transition-colors ${
                  product.sizes && product.sizes.length > 0 && selectedSizes.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : addedToCart
                      ? 'bg-green-600 hover:bg-green-500'
                      : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {addedToCart ? 'Added!' : product.sizes && product.sizes.length > 0 && selectedSizes.length === 0 ? 'Select a Size' : 'Add to Cart'}
              </button>
              <button
                onClick={() => navigate('/store/cart')}
                className="flex-1 sm:flex-none sm:min-w-[160px] px-3 py-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
              >
                View Cart
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-5">
            You might also like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/store/product/${rel.id}`}
                className="group block"
              >
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-gray-600 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                      {rel.name}
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-700">
                      ${rel.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
