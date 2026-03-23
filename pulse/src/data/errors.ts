export type Breadcrumb = {
  timestamp: string;
  category: 'navigation' | 'ui.click' | 'ui.input' | 'http' | 'error';
  message: string;
  level: 'info' | 'warning' | 'error';
};

export type ErrorEvent = {
  id: string;
  title: string;
  culprit: string;
  status: 'unresolved' | 'resolved' | 'ignored';
  priority: 'critical' | 'high' | 'medium' | 'low';
  count: number;
  usersAffected: number;
  firstSeen: string;
  lastSeen: string;
  tags: Record<string, string>;
  stackTrace: string[];
  breadcrumbs: Breadcrumb[];
};

export const errorEvents: ErrorEvent[] = [
  {
    id: 'ERR-001',
    title: "TypeError: Cannot read properties of null (reading 'toFixed')",
    culprit: 'checkout.tsx in applyDiscount',
    status: 'resolved',
    priority: 'medium',
    count: 37,
    usersAffected: 12,
    firstSeen: '2 days ago',
    lastSeen: '12 minutes ago',
    tags: {
      browser: 'Chrome 120',
      os: 'macOS 14.2',
      url: '/checkout',
      coupon: 'SUMMER25',
    },
    stackTrace: [
      '  at applyDiscount (checkout.tsx:84:32)',
      '  at handlePlaceOrder (checkout.tsx:121:5)',
      '  at HTMLButtonElement.onClick (checkout.tsx:203:18)',
      '  at callCallback (react-dom.development.js:4164:14)',
      '  at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)',
      '  at invokeGuardedCallback (react-dom.development.js:4277:31)',
      '  at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:25)',
      '  at executeDispatch (react-dom.development.js:9041:3)',
      '  at processDispatchQueueItemsInOrder (react-dom.development.js:9073:7)',
    ],
    breadcrumbs: [
      {
        timestamp: '10:31:44',
        category: 'navigation',
        message: 'Navigated to /products',
        level: 'info',
      },
      {
        timestamp: '10:32:01',
        category: 'ui.click',
        message: 'User clicked "Add to Cart" on Crossbody Bag',
        level: 'info',
      },
      {
        timestamp: '10:32:04',
        category: 'navigation',
        message: 'Navigated to /cart',
        level: 'info',
      },
      {
        timestamp: '10:32:18',
        category: 'ui.input',
        message: 'User entered coupon code "SUMMER25"',
        level: 'info',
      },
      {
        timestamp: '10:32:19',
        category: 'http',
        message: 'POST /api/coupon/validate — 200 OK',
        level: 'info',
      },
      {
        timestamp: '10:32:20',
        category: 'navigation',
        message: 'Navigated to /checkout',
        level: 'info',
      },
      {
        timestamp: '10:32:35',
        category: 'ui.click',
        message: 'User clicked "Place Order"',
        level: 'info',
      },
      {
        timestamp: '10:32:35',
        category: 'error',
        message:
          "TypeError: Cannot read properties of null (reading 'toFixed')",
        level: 'error',
      },
    ],
  },
  {
    id: 'ERR-002',
    title: 'ReferenceError: cartItems is not defined',
    culprit: 'cart.tsx in CartSummary',
    status: 'resolved',
    priority: 'medium',
    count: 8,
    usersAffected: 4,
    firstSeen: '5 days ago',
    lastSeen: '3 days ago',
    tags: {
      browser: 'Firefox 121',
      os: 'Windows 11',
      url: '/cart',
    },
    stackTrace: [
      '  at CartSummary (cart.tsx:56:12)',
      '  at renderWithHooks (react-dom.development.js:14985:18)',
      '  at mountIndeterminateComponent (react-dom.development.js:17811:13)',
      '  at beginWork (react-dom.development.js:19049:20)',
    ],
    breadcrumbs: [
      {
        timestamp: '14:10:02',
        category: 'navigation',
        message: 'Navigated to /cart',
        level: 'info',
      },
      {
        timestamp: '14:10:03',
        category: 'error',
        message: 'ReferenceError: cartItems is not defined',
        level: 'error',
      },
    ],
  },
  {
    id: 'ERR-003',
    title: 'Error: Network request failed — POST /api/orders',
    culprit: 'api/orders.ts in submitOrder',
    status: 'resolved',
    priority: 'medium',
    count: 14,
    usersAffected: 9,
    firstSeen: '1 day ago',
    lastSeen: '2 hours ago',
    tags: {
      browser: 'Safari 17',
      os: 'iOS 17.2',
      url: '/checkout',
    },
    stackTrace: [
      '  at submitOrder (api/orders.ts:34:11)',
      '  at handlePlaceOrder (checkout.tsx:130:7)',
      '  at async Promise.all (index 0)',
    ],
    breadcrumbs: [
      {
        timestamp: '09:05:11',
        category: 'navigation',
        message: 'Navigated to /checkout',
        level: 'info',
      },
      {
        timestamp: '09:05:44',
        category: 'ui.click',
        message: 'User clicked "Place Order"',
        level: 'info',
      },
      {
        timestamp: '09:05:45',
        category: 'http',
        message: 'POST /api/orders — Network Error',
        level: 'error',
      },
      {
        timestamp: '09:05:45',
        category: 'error',
        message: 'Error: Network request failed — POST /api/orders',
        level: 'error',
      },
    ],
  },
  {
    id: 'ERR-004',
    title: "TypeError: Cannot read properties of undefined (reading 'map')",
    culprit: 'pages/products.tsx in ProductGrid',
    status: 'resolved',
    priority: 'low',
    count: 3,
    usersAffected: 2,
    firstSeen: '1 week ago',
    lastSeen: '6 days ago',
    tags: {
      browser: 'Chrome 119',
      os: 'Ubuntu 22.04',
      url: '/products',
    },
    stackTrace: [
      '  at ProductGrid (pages/products.tsx:29:22)',
      '  at renderWithHooks (react-dom.development.js:14985:18)',
      '  at updateFunctionComponent (react-dom.development.js:17798:20)',
    ],
    breadcrumbs: [
      {
        timestamp: '11:44:30',
        category: 'navigation',
        message: 'Navigated to /products',
        level: 'info',
      },
      {
        timestamp: '11:44:31',
        category: 'http',
        message: 'GET /api/products — 500 Internal Server Error',
        level: 'error',
      },
      {
        timestamp: '11:44:31',
        category: 'error',
        message:
          "TypeError: Cannot read properties of undefined (reading 'map')",
        level: 'error',
      },
    ],
  },
  {
    id: 'ERR-005',
    title: 'SyntaxError: Unexpected token in JSON at position 0',
    culprit: 'api/coupon.ts in validateCoupon',
    status: 'ignored',
    priority: 'low',
    count: 5,
    usersAffected: 3,
    firstSeen: '4 days ago',
    lastSeen: '4 days ago',
    tags: {
      browser: 'Edge 120',
      os: 'Windows 10',
      url: '/cart',
    },
    stackTrace: [
      '  at JSON.parse (<anonymous>)',
      '  at validateCoupon (api/coupon.ts:18:24)',
      '  at async handleCouponSubmit (cart.tsx:92:5)',
    ],
    breadcrumbs: [
      {
        timestamp: '16:22:05',
        category: 'navigation',
        message: 'Navigated to /cart',
        level: 'info',
      },
      {
        timestamp: '16:22:14',
        category: 'ui.input',
        message: 'User entered coupon code "SAVE10"',
        level: 'info',
      },
      {
        timestamp: '16:22:15',
        category: 'http',
        message: 'POST /api/coupon/validate — 200 OK',
        level: 'info',
      },
      {
        timestamp: '16:22:15',
        category: 'error',
        message: 'SyntaxError: Unexpected token in JSON at position 0',
        level: 'error',
      },
    ],
  },
];
