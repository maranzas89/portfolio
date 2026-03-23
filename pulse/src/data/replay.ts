export type ReplayStep = {
  timestamp: string;
  type: 'navigation' | 'click' | 'input' | 'http' | 'error';
  description: string;
  screenshotDescription: string;
};

export const replaySteps: ReplayStep[] = [
  {
    timestamp: '10:31:44',
    type: 'navigation',
    description: 'User navigated to /products',
    screenshotDescription:
      'Products listing page showing a 4-column grid of 8 items. The Crossbody Bag card is visible in the bottom-right. The page header shows a cart icon with 0 items.',
  },
  {
    timestamp: '10:31:58',
    type: 'click',
    description: 'User clicked on the Crossbody Bag product card',
    screenshotDescription:
      "Product detail page for the Crossbody Bag ($69.99). The page shows the placeholder product image on the left, product name, price, and description on the right. An \"Add to Cart\" button is prominently displayed below the description.",
  },
  {
    timestamp: '10:32:01',
    type: 'click',
    description: 'User clicked "Add to Cart"',
    screenshotDescription:
      'Same product detail page. A green success toast notification slides in from the top-right: "Crossbody Bag added to cart." The cart icon in the header now shows a badge with the number 1.',
  },
  {
    timestamp: '10:32:04',
    type: 'navigation',
    description: 'User navigated to /cart',
    screenshotDescription:
      'Shopping cart page. The cart shows one line item: Crossbody Bag, Qty 1, $69.99. A subtotal of $69.99 is shown. Below the item list is a coupon code input field with an "Apply" button and a "Proceed to Checkout" button.',
  },
  {
    timestamp: '10:32:18',
    type: 'input',
    description: 'User typed coupon code "SUMMER25" into the coupon field',
    screenshotDescription:
      'Shopping cart page. The coupon input field now contains the text "SUMMER25". The "Apply" button is highlighted, indicating it is ready to be clicked.',
  },
  {
    timestamp: '10:32:19',
    type: 'http',
    description: 'POST /api/coupon/validate — 200 OK (coupon accepted by API)',
    screenshotDescription:
      'Shopping cart page. A green confirmation banner appears below the coupon field: "Coupon SUMMER25 applied — 25% off!" The subtotal area briefly shows a spinner before updating.',
  },
  {
    timestamp: '10:32:20',
    type: 'navigation',
    description: 'User navigated to /checkout',
    screenshotDescription:
      'Checkout page with three sections: Shipping Address (pre-filled), Order Summary, and Payment Details. The Order Summary panel shows: Crossbody Bag $69.99, Coupon SUMMER25 applied, and a Discount row that is blank/empty where the discount amount should appear. Total shows $69.99 — unchanged despite the coupon being "applied".',
  },
  {
    timestamp: '10:32:35',
    type: 'click',
    description: 'User clicked "Place Order"',
    screenshotDescription:
      'Checkout page. The "Place Order" button shows a loading spinner for a brief moment, then the page freezes with the button still in a loading state.',
  },
  {
    timestamp: '10:32:35',
    type: 'error',
    description:
      "TypeError thrown: Cannot read properties of null (reading 'toFixed')",
    screenshotDescription:
      'Checkout page in a broken state. The loading spinner on the "Place Order" button has stopped. A red error banner now spans the top of the page: "Something went wrong. Please try again." The order summary still shows $69.99 as the total. The browser console (if open) would display the full stack trace originating from checkout.tsx line 84.',
  },
];
