import { create } from 'zustand';
import { coupons } from '@/data/coupons';
import { type ErrorEvent, errorEvents } from '@/data/errors';

// Re-export CapturedError as an alias to keep the store API consistent
export type CapturedError = ErrorEvent;

// ─── Cart Types ────────────────────────────────────────────────────────────────

export type CartItem = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CouponState = {
  code: string;
  discount: number | null;
} | null;

// ─── Cart Slice ────────────────────────────────────────────────────────────────

type CartSlice = {
  items: CartItem[];
  coupon: CouponState;
  couponError: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, qty: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => void;
  getSubtotal: () => number;
  getDiscount: () => number;
  getTotal: () => number;
};

// ─── Error Events Slice ────────────────────────────────────────────────────────

type ErrorEventsSlice = {
  capturedErrors: CapturedError[];
  captureError: (error: CapturedError) => void;
  resetErrors: () => void;
};

// ─── Combined Store ────────────────────────────────────────────────────────────

type StoreState = CartSlice & ErrorEventsSlice;

export const useStore = create<StoreState>((set, get) => ({
  // ── Cart State ──────────────────────────────────────────────────────────────
  items: [],
  coupon: null,
  couponError: null,

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.productId === item.productId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }
      return { items: [...state.items, item] };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    }));
  },

  updateQuantity: (productId, qty) => {
    set((state) => ({
      items:
        qty <= 0
          ? state.items.filter((i) => i.productId !== productId)
          : state.items.map((i) =>
              i.productId === productId ? { ...i, quantity: qty } : i,
            ),
    }));
  },

  clearCart: () => {
    set({ items: [], coupon: null, couponError: null });
  },

  applyCoupon: (code) => {
    const trimmed = code.trim().toUpperCase();
    const found = coupons[trimmed];
    if (found) {
      set({
        coupon: { code: found.code, discount: found.discount },
        couponError: null,
      });
    } else {
      set({ coupon: null, couponError: `Invalid coupon code: "${code}"` });
    }
  },

  getSubtotal: () => {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  },

  // Safe: returns 0 when coupon.discount is null, so the store never throws.
  // The intentional bug lives in the checkout page's own calculateTotal, not here.
  getDiscount: () => {
    const { coupon, getSubtotal } = get();
    if (!coupon || coupon.discount === null) return 0;
    return (getSubtotal() * coupon.discount) / 100;
  },

  getTotal: () => {
    return get().getSubtotal() - get().getDiscount();
  },

  // ── Error Events State ──────────────────────────────────────────────────────
  capturedErrors: errorEvents,

  resetErrors: () => {
    set({ capturedErrors: errorEvents });
  },

  captureError: (error) => {
    set((state) => ({
      capturedErrors: [error, ...state.capturedErrors],
    }));
  },
}));
