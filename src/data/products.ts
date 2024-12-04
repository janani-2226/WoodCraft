import { Product } from '../types';

const diningProducts: Product[] = [
  {
    id: 'dt1',
    name: 'Royal Teak Dining Set',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
    category: 'dining',
    description: 'Elegant 6-seater dining set made from premium teak wood with intricate carved details.'
  },
  {
    id: 'dt2',
    name: 'Modern Walnut Dining Table',
    price: 64999,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80',
    category: 'dining',
    description: 'Contemporary 4-seater dining table with walnut finish and sleek metal legs.'
  }
];

const cupboardProducts: Product[] = [
  {
    id: 'cb1',
    name: 'Classic Wardrobe',
    price: 74999,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
    category: 'cupboards',
    description: 'Spacious 3-door wardrobe with mirror and built-in organizers.'
  },
  {
    id: 'cb2',
    name: 'Modern Storage Cabinet',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80',
    category: 'cupboards',
    description: 'Contemporary storage solution with adjustable shelves and soft-close doors.'
  }
];

const chairProducts: Product[] = [
  {
    id: 'ch1',
    name: 'Ergonomic Office Chair',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80',
    category: 'chairs',
    description: 'Premium office chair with lumbar support and adjustable features.'
  },
  {
    id: 'ch2',
    name: 'Vintage Accent Chair',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80',
    category: 'chairs',
    description: 'Elegant accent chair with premium upholstery and solid wood frame.'
  }
];

const bedProducts: Product[] = [
  {
    id: 'bd1',
    name: 'King Size Platform Bed',
    price: 94999,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    category: 'beds',
    description: 'Modern platform bed with integrated storage and upholstered headboard.'
  },
  {
    id: 'bd2',
    name: 'Classic Queen Bed',
    price: 79999,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80',
    category: 'beds',
    description: 'Traditional queen-size bed with solid wood construction and detailed craftsmanship.'
  }
];

export const products = {
  dining: diningProducts,
  cupboards: cupboardProducts,
  chairs: chairProducts,
  beds: bedProducts
};