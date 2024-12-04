import React from 'react';
import { useParams } from 'react-router-dom';

const processContent = {
  design: {
    title: 'Design Process',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
    description: 'Our design process begins with understanding your vision. Our expert designers work closely with you to create furniture that perfectly matches your style and requirements.',
    steps: [
      'Initial consultation and requirement gathering',
      'Concept sketches and 3D visualization',
      'Material selection and design refinement',
      'Final design approval and specifications'
    ]
  },
  crafting: {
    title: 'Crafting Excellence',
    image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?auto=format&fit=crop&q=80',
    description: 'Each piece is meticulously crafted by our master artisans using traditional techniques combined with modern precision.',
    steps: [
      'Selection of premium wood and materials',
      'Hand-crafted joinery and assembly',
      'Detailed carving and customization',
      'Multiple stages of quality inspection'
    ]
  },
  delivery: {
    title: 'White Glove Delivery',
    image: 'https://images.unsplash.com/photo-1620915789336-129994d5edb5?auto=format&fit=crop&q=80',
    description: 'Our white-glove delivery service ensures your furniture arrives safely and is perfectly placed in your home.',
    steps: [
      'Careful packaging and protection',
      'Professional transportation',
      'Installation and assembly',
      'Final placement and cleanup'
    ]
  }
};

export function ProcessPage() {
  const { step } = useParams<{ step: keyof typeof processContent }>();
  const content = step ? processContent[step] : null;

  if (!content) {
    return <div>Process not found</div>;
  }

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: `url(${content.image})`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{content.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-amber-800 dark:text-amber-200 mb-8">
              {content.description}
            </p>
            <div className="space-y-6">
              {content.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-amber-800 dark:text-amber-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1580130379624 + i}-3a069adbffc5?auto=format&fit=crop&q=80`}
                  alt={`Process step ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}