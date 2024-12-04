import React from 'react';

export function AboutSection() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6">About WoodCraft</h2>
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              We're passionate about creating beautiful, sustainable furniture that transforms your living spaces into
              extraordinary environments.
            </p>
            <p className="text-amber-800 dark:text-amber-200">
              With over 20 years of experience in crafting premium furniture, we combine traditional woodworking
              techniques with modern design aesthetics.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80"
              alt="Craftsman working"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}