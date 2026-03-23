export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Denim Jacket',
    price: 89.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop',
    description:
      'A timeless denim jacket crafted from heavyweight cotton denim. Features a button-front closure, chest pockets, and a relaxed fit that pairs effortlessly with any outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    description:
      'Premium over-ear wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Foldable design for easy portability.',
  },
  {
    id: 3,
    name: 'Leather Watch',
    price: 199.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop',
    description:
      'Elegant minimalist watch with a genuine leather strap and stainless steel case. Water-resistant to 50m, featuring a sapphire crystal glass face and Japanese quartz movement.',
  },
  {
    id: 4,
    name: 'Canvas Sneakers',
    price: 79.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
    description:
      'Classic low-top canvas sneakers with a vulcanized rubber sole. Lightweight and breathable with a cushioned insole, available in a range of clean colorways.',
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 59.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    description:
      'Polarized UV400 sunglasses with a lightweight acetate frame. Provides full UVA/UVB protection with anti-glare lenses, perfect for outdoor activities.',
  },
  {
    id: 6,
    name: 'Cotton T-Shirt',
    price: 34.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    description:
      'Soft, breathable 100% organic cotton t-shirt with a relaxed fit. Pre-shrunk fabric, reinforced stitching at the collar and cuffs, and available in 12 colors.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    description:
      'Portable Bluetooth speaker with 360° surround sound, 12-hour battery life, and IPX7 waterproof rating. Compact design with a built-in carabiner for on-the-go listening.',
  },
  {
    id: 8,
    name: 'Crossbody Bag',
    price: 69.99,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    description:
      'Compact crossbody bag made from vegan leather with an adjustable strap. Features a main zip compartment, two interior slip pockets, and a front magnetic snap pocket.',
  },
];
