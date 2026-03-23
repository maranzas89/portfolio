import { Link, Outlet } from 'react-router-dom';
import { useStore } from '@/store/useStore';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
      />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
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

export function StorefrontLayout() {
  const itemCount = useStore((s) => s.items.length);

  return (
    <div className="pt-10 min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-[var(--lg-glass-border)] sticky top-10 z-40 shadow-[var(--lg-shadow-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-6">
          {/* Logo */}
          <Link to="/store" className="text-xl font-bold font-display text-gray-700 shrink-0">
            TechStyle
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-xl relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              readOnly
            />
          </div>

          {/* Cart icon */}
          <Link
            to="/store/cart"
            className="relative text-gray-500 hover:text-gray-700 transition-colors shrink-0"
            aria-label={`Cart, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
          >
            <ShoppingCartIcon />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center leading-none">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-400">
          © 2024 TechStyle
        </div>
      </footer>
    </div>
  );
}
