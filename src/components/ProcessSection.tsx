import React from 'react';
import { Link } from 'react-router-dom';

const processes = [
  {
    title: 'Design',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
    description: 'Collaborative design process with expert craftsmen',
    path: '/process/design'
  },
  {
    title: 'Crafting',
    image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&q=80',
    description: 'Meticulous craftsmanship with premium materials',
    path: '/process/crafting'
  },
  {
    title: 'Delivery',
    image: 'https://images.unsplash.com/photo-1620915789336-129994d5edb5?auto=format&fit=crop&q=80',
    description: 'White glove delivery and installation service',
    path: '/process/delivery'
  }
];

export function ProcessSection() {
  return (
    <div className="bg-amber-100 dark:bg-amber-900/40 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-12 text-center">
          Our Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <Link
              key={index}
              to={process.path}
              className="group bg-white dark:bg-amber-900/40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-48">
                <img
                  src={process.image}
                  alt={process.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                  {process.title}
                </h3>
                <p className="text-amber-800 dark:text-amber-200">
                  {process.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}