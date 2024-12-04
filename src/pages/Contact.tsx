import React from 'react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
      <div className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}