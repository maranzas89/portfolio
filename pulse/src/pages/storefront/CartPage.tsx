import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/store/useStore';

export function CartPage() {
  const navigate = useNavigate();
  const items = useStore((s) => s.items);
  const coupon = useStore((s) => s.coupon);
  const couponError = useStore((s) => s.couponError);
  const removeItem = useStore((s) => s.removeItem);
  const updateQuantity = useStore((s) => s.updateQuantity);
  const applyCoupon = useStore((s) => s.applyCoupon);
  const getSubtotal = useStore((s) => s.getSubtotal);
  const getDiscount = useStore((s) => s.getDiscount);
  const getTotal = useStore((s) => s.getTotal);

  const [couponInput, setCouponInput] = useState('');
  const [checkoutError, setCheckoutError] = useState(false);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const total = getTotal();

  const handleProceedToCheckout = () => {
    // Re-check at click time in case state changed
    const storeHasSummer = useStore.getState().coupon?.code === 'SUMMER25';
    const inputHasSummer = couponInput.trim().toUpperCase() === 'SUMMER25';

    if (storeHasSummer || inputHasSummer) {
      setCheckoutError(true);
      // Auto-dismiss after 5 seconds
      setTimeout(() => setCheckoutError(false), 5000);

      // Capture the error so the dashboard reflects it immediately
      useStore.getState().captureError({
        id: 'ERR-LIVE-001',
        title: "TypeError: Cannot read properties of null (reading 'toFixed')",
        culprit: 'CheckoutPage.tsx in calculateTotal',
        status: 'unresolved',
        priority: 'high',
        count: 1,
        usersAffected: 1,
        firstSeen: 'just now',
        lastSeen: 'just now',
        tags: {
          browser: navigator.userAgent.split(' ').slice(-1)[0] ?? 'unknown',
          url: '/store/cart',
          coupon: 'SUMMER25',
        },
        stackTrace: [
          '  at applyDiscount (checkout.tsx:84:32)',
          '  at handlePlaceOrder (checkout.tsx:121:5)',
          '  at HTMLButtonElement.onClick (checkout.tsx:203:18)',
        ],
        breadcrumbs: [
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'navigation',
            message: 'Navigated to /store/cart',
            level: 'info',
          },
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'ui.input',
            message: 'User entered coupon code "SUMMER25"',
            level: 'info',
          },
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'ui.click',
            message: 'User clicked "Proceed to Checkout"',
            level: 'info',
          },
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'error',
            message: "TypeError: Cannot read properties of null (reading 'toFixed')",
            level: 'error',
          },
        ],
      });

      return;
    }
    navigate('/store/checkout');
  };

  // Determine coupon display text — UI lies for SUMMER25 (discount is null in data)
  function couponDisplayText(): string {
    if (!coupon) return '';
    if (coupon.code === 'SUMMER25') return '25% discount applied!';
    if (coupon.code === 'SAVE10') return '10% discount applied!';
    return 'Discount applied!';
  }

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <StoreHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <CartIcon className="h-8 w-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-400 text-sm">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/store"
            className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <StoreHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-700 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.productId}
                className="border border-gray-100 rounded-lg p-4 flex gap-4"
              >
                {/* Product image */}
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-gray-700 leading-snug">
                      {item.name}
                    </p>
                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                      aria-label={`Remove ${item.name}`}
                    >
                      <XIcon />
                    </button>
                  </div>

                  <p className="mt-0.5 text-sm text-gray-400">
                    ${item.price.toFixed(2)} each
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-400 hover:bg-gray-100 transition-colors text-lg font-medium"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-sm font-semibold text-gray-700 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-400 hover:bg-gray-100 transition-colors text-lg font-medium"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Line subtotal */}
                    <p className="text-sm font-bold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue shopping */}
            <button
              onClick={() => {}}
              className="mt-2 px-4 py-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Link to="/store" className="inline-flex items-center gap-1">
                <ChevronLeftIcon />
                Continue Shopping
              </Link>
            </button>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-xl p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-700 mb-5">
                Order Summary
              </h2>

              {/* Coupon code */}
              <div className="mb-5">
                <label
                  htmlFor="coupon"
                  className="block text-sm font-medium text-gray-500 mb-1.5"
                >
                  Coupon code
                </label>
                <div className="flex gap-2">
                  <input
                    id="coupon"
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') applyCoupon(couponInput);
                    }}
                    placeholder="e.g. SAVE10"
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                  <button
                    onClick={() => applyCoupon(couponInput)}
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {/* Coupon success */}
                {coupon && (
                  <p className="mt-2 text-sm text-[var(--lg-status-success)] font-medium">
                    {couponDisplayText()}
                  </p>
                )}

                {/* Coupon error */}
                {couponError && (
                  <p className="mt-2 text-sm text-[var(--lg-status-error)]">{couponError}</p>
                )}
              </div>

              {/* Price breakdown */}
              <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {coupon && discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount ({coupon.code})</span>
                    <span>−${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-gray-700 text-base border-t border-gray-200 pt-3 mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {checkoutError && (
                <div className="mt-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  Something went wrong. Please remove the coupon and try again.
                </div>
              )}

              <button
                onClick={handleProceedToCheckout}
                disabled={checkoutError}
                className={`mt-4 w-full px-6 py-3 text-base font-medium text-white rounded-lg transition-colors ${
                  checkoutError
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StoreHeader() {
  const navigate = useNavigate();
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          to="/store"
          className="text-2xl font-bold text-gray-700 tracking-tight hover:text-blue-600 transition-colors"
        >
          Pulse Store
        </Link>
        <button
          onClick={() => navigate('/store/cart')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          <CartIcon className="h-5 w-5" />
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-5 w-5'}
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

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
