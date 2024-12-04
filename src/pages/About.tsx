import React from 'react';
import { Users, Award, Leaf, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto px-4">
              Crafting excellence in furniture since 1970
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6">Our Heritage</h2>
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              Founded in 1970, WoodCraft has been at the forefront of furniture craftsmanship in India. 
              What started as a small workshop in Mumbai has grown into one of India's most respected 
              furniture brands, while maintaining our commitment to quality and traditional craftsmanship.
            </p>
            <p className="text-amber-800 dark:text-amber-200">
              Our journey is marked by an unwavering dedication to excellence, sustainable practices, 
              and the preservation of India's rich woodworking heritage.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80"
              alt="Craftsman at work"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users, title: 'Expert Team', desc: '50+ master craftsmen with decades of experience' },
            { icon: Award, title: 'Quality First', desc: 'Premium materials and superior craftsmanship' },
            { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly practices and responsible sourcing' },
            { icon: Wrench, title: 'Custom Work', desc: 'Bespoke furniture tailored to your needs' }
          ].map((item, index) => (
            <div key={index} className="bg-amber-100 dark:bg-amber-900/40 p-6 rounded-lg">
              <item.icon className="h-8 w-8 text-amber-700 dark:text-amber-300 mb-4" />
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">{item.title}</h3>
              <p className="text-amber-800 dark:text-amber-200">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-100 dark:bg-amber-900/40 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Design', 
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
                path: '/process/design',
                desc: 'Collaborative design process with expert craftsmen'
              },
              { 
                title: 'Crafting', 
                image: 'https://images.unsplash.com/photo-1622921491193-98c1e9f40648?auto=format&fit=crop&q=80',
                path: '/process/crafting',
                desc: 'Meticulous craftsmanship with premium materials'
              },
              { 
                title: 'Delivery', 
                image: 'https://images.unsplash.com/photo-1609080814833-0e1147bc8e30?auto=format&fit=crop&q=80',
                path: '/process/delivery',
                desc: 'White glove delivery and installation service'
              }
            ].map((step, index) => (
              <Link
                key={index}
                to={step.path}
                className="group block text-center"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition duration-300" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-2">{step.title}</h3>
                <p className="text-amber-800 dark:text-amber-200">{step.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}