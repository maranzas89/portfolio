import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/store/useStore';

// ─── Intentional Bug ──────────────────────────────────────────────────────────
// When coupon.discount is null (SUMMER25), calling .toFixed() on null throws:
// TypeError: Cannot read properties of null (reading 'toFixed')
function calculateTotal(
  subtotal: number,
  coupon: { discount: number | null } | null,
) {
  if (!coupon) return subtotal;
  const discount = coupon.discount;
  const discountAmount =
    subtotal * (discount!.toFixed(2) as unknown as number / 100); // crashes if discount is null
  return subtotal - discountAmount;
}
// ─────────────────────────────────────────────────────────────────────────────

type FormFields = {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

const EMPTY_FORM: FormFields = {
  name: '',
  email: '',
  address: '',
  city: '',
  zip: '',
  phone: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
};

export function CheckoutPage() {
  const navigate = useNavigate();
  const items = useStore((s) => s.items);
  const coupon = useStore((s) => s.coupon);
  const clearCart = useStore((s) => s.clearCart);
  const getSubtotal = useStore((s) => s.getSubtotal);

  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [displayTotal, setDisplayTotal] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const subtotal = getSubtotal();

  // Safe discount for the summary sidebar (store's getDiscount never throws)
  const safeDiscount = useStore((s) => s.getDiscount)();
  const safeTotal = subtotal - safeDiscount;

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handlePlaceOrder(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOrderError(null);

    try {
      const total = calculateTotal(subtotal, coupon);
      setDisplayTotal(total.toFixed(2));
      // Success path
      alert('Order placed!');
      clearCart();
      setOrderPlaced(true);
      navigate('/store');
    } catch (err) {
      const error = err as Error;
      const errorMessage = 'Something went wrong. Please try again.';
      setOrderError(errorMessage);
      setDisplayTotal('NaN');
      setButtonDisabled(true);

      // Capture the error in the store so it appears in the observability dashboard
      useStore.getState().captureError({
        id: 'ERR-LIVE-001',
        title: error.message ?? 'Unknown error in calculateTotal',
        culprit: 'CheckoutPage.tsx in calculateTotal',
        status: 'unresolved',
        priority: 'high',
        count: 1,
        usersAffected: 1,
        firstSeen: 'just now',
        lastSeen: 'just now',
        tags: {
          browser: navigator.userAgent.split(' ').slice(-1)[0] ?? 'unknown',
          url: '/store/checkout',
          coupon: coupon?.code ?? 'none',
        },
        stackTrace: error.stack ? error.stack.split('\n').slice(0, 6) : [],
        breadcrumbs: [
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'navigation',
            message: 'Navigated to /store/checkout',
            level: 'info',
          },
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'ui.click',
            message: 'User clicked "Place Order"',
            level: 'info',
          },
          {
            timestamp: new Date().toLocaleTimeString(),
            category: 'error',
            message: error.message,
            level: 'error',
          },
        ],
      });
    }
  }

  if (orderPlaced) {
    return null; // navigating away; avoid flash
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/store"
            className="text-2xl font-bold text-gray-700 tracking-tight hover:text-blue-600 transition-colors"
          >
            Pulse Store
          </Link>
          <span className="text-sm text-gray-400">Secure Checkout</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <button
          className="px-3 py-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-6 inline-flex items-center gap-1"
          onClick={() => navigate('/store/cart')}
        >
          <ChevronLeftIcon />
          Back to cart
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Left: Form ── */}
          <div className="lg:col-span-3 space-y-8">
            {/* Shipping */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-700 mb-5">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  label="Full name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleFieldChange}
                />
                <FormField
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleFieldChange}
                />
                <div className="sm:col-span-2">
                  <FormField
                    label="Street address"
                    name="address"
                    type="text"
                    placeholder="123 Main St"
                    value={form.address}
                    onChange={handleFieldChange}
                  />
                </div>
                <FormField
                  label="City"
                  name="city"
                  type="text"
                  placeholder="San Francisco"
                  value={form.city}
                  onChange={handleFieldChange}
                />
                <FormField
                  label="ZIP / Postal code"
                  name="zip"
                  type="text"
                  placeholder="94102"
                  value={form.zip}
                  onChange={handleFieldChange}
                />
                <div className="sm:col-span-2">
                  <FormField
                    label="Phone number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleFieldChange}
                  />
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-gray-700 mb-1">Payment</h2>
              <p className="text-xs text-gray-400 mb-5">
                Mock credit card — no real payment is processed.
              </p>

              {/* Mock card visual */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 mb-6 text-white shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-blue-200 mb-0.5">Card number</p>
                    <p className="font-mono text-base tracking-widest">
                      {form.cardNumber
                        ? form.cardNumber.replace(/(.{4})/g, '$1 ').trim()
                        : '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022'}
                    </p>
                  </div>
                  <ChipIcon />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-blue-200 mb-0.5">Cardholder</p>
                    <p className="text-sm font-semibold">
                      {form.name || 'YOUR NAME'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-blue-200 mb-0.5">Expires</p>
                    <p className="text-sm font-semibold font-mono">
                      {form.expiry || 'MM/YY'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <FormField
                    label="Card number"
                    name="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={handleFieldChange}
                    maxLength={16}
                  />
                </div>
                <FormField
                  label="Expiry"
                  name="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={form.expiry}
                  onChange={handleFieldChange}
                  maxLength={5}
                />
                <FormField
                  label="CVV"
                  name="cvv"
                  type="text"
                  placeholder="•••"
                  value={form.cvv}
                  onChange={handleFieldChange}
                  maxLength={4}
                />
              </div>
            </section>
          </div>

          {/* ── Right: Order summary ── */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-700 mb-5">
                Order Summary
              </h2>

              {/* Items list */}
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.productId} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-700 leading-snug truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">Qty {item.quantity}</p>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price breakdown */}
              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {coupon && safeDiscount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount ({coupon.code})</span>
                    <span>−${safeDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-gray-700 text-base border-t border-gray-200 pt-3 mt-1">
                  <span>Total</span>
                  <span>
                    {displayTotal !== null
                      ? `$${displayTotal}`
                      : `$${safeTotal.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Error toast */}
              {orderError && (
                <div className="mt-4 flex items-start gap-2 bg-[var(--lg-status-error-light)] border border-[var(--lg-status-error-border)] rounded-lg px-4 py-3">
                  <AlertIcon />
                  <p className="text-sm text-[var(--lg-status-error)] font-medium">{orderError}</p>
                </div>
              )}

              {/* Place order button */}
              <button
                onClick={handlePlaceOrder}
                disabled={buttonDisabled}
                className="mt-6 w-full px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                By placing your order you agree to our Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-gray-500 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
      />
    </div>
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

function ChipIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-yellow-300 opacity-80"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </svg>
  );
}
