export type TransactionData = {
  route: string;
  description: string;
  p50: number;
  p75: number;
  p95: number;
  throughput: number;
  errorRate: number;
};

export const transactions: TransactionData[] = [
  {
    route: '/',
    description: 'Homepage',
    p50: 120,
    p75: 180,
    p95: 350,
    throughput: 45,
    errorRate: 0.2,
  },
  {
    route: '/products',
    description: 'Product listing',
    p50: 95,
    p75: 145,
    p95: 290,
    throughput: 38,
    errorRate: 0.5,
  },
  {
    route: '/products/:id',
    description: 'Product detail',
    p50: 88,
    p75: 132,
    p95: 260,
    throughput: 27,
    errorRate: 0.3,
  },
  {
    route: '/cart',
    description: 'Shopping cart',
    p50: 74,
    p75: 110,
    p95: 215,
    throughput: 21,
    errorRate: 1.1,
  },
  {
    route: '/checkout',
    description: 'Checkout — elevated error rate due to coupon bug',
    p50: 310,
    p75: 480,
    p95: 920,
    throughput: 14,
    errorRate: 8.3,
  },
  {
    route: '/api/coupon/validate',
    description: 'Coupon validation endpoint',
    p50: 42,
    p75: 68,
    p95: 140,
    throughput: 18,
    errorRate: 2.7,
  },
];
