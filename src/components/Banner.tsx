import React from 'react';

export function Banner() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Elevate Your Living Space</h1>
            <p className="text-xl text-white mb-8">Discover our collection of handcrafted furniture</p>
            {/* <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition">
              Shop Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}