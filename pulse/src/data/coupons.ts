export type Coupon = {
  code: string;
  discount: number | null;
  description: string;
};

export const coupons: Record<string, Coupon> = {
  SAVE10: {
    code: 'SAVE10',
    discount: 10,
    description: '10% off your entire order',
  },
  // BUG: discount is null — calling .toFixed() on this value throws:
  // TypeError: Cannot read properties of null (reading 'toFixed')
  SUMMER25: {
    code: 'SUMMER25',
    discount: null,
    description: '25% off summer styles',
  },
};
