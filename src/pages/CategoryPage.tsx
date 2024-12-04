import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function CategoryPage() {
  const { category } = useParams<{ category: keyof typeof products }>();
  const categoryProducts = category ? products[category] : [];
  
  const categoryTitles = {
    dining: 'Dining Tables',
    cupboards: 'Cupboards',
    chairs: 'Chairs',
    beds: 'Beds'
  };

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: `url(${categoryProducts[0]?.image})`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{category && categoryTitles[category]}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}