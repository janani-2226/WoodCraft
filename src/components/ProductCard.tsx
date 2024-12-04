import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-amber-900/40 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">{product.name}</h3>
        <p className="text-amber-800 dark:text-amber-200 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-amber-900 dark:text-amber-100">₹{product.price.toLocaleString()}</span>
          <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}