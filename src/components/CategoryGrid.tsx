import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'dining',
    name: 'Dining Tables',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80'
  },
  {
    id: 'cupboards',
    name: 'Cupboards',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80'
  },
  {
    id: 'chairs',
    name: 'Chairs',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80'
  },
  {
    id: 'beds',
    name: 'Beds',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80'
  }
];

export function CategoryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-8">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}