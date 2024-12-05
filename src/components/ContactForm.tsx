import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-amber-100 dark:bg-amber-900/40 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-amber-800 dark:text-amber-200 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-amber-900 text-amber-900 dark:text-amber-100"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-amber-800 dark:text-amber-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-amber-900 text-amber-900 dark:text-amber-100"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-amber-800 dark:text-amber-200 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-amber-900 text-amber-900 dark:text-amber-100"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-amber-800 dark:text-amber-200">
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <p>Tamilnadu</p>
              </div>
              <div className="flex items-center gap-4 text-amber-800 dark:text-amber-200">
                <Phone className="h-6 w-6 flex-shrink-0" />
                <p>+91 8248521010</p>
              </div>
              <div className="flex items-center gap-4 text-amber-800 dark:text-amber-200">
                <Mail className="h-6 w-6 flex-shrink-0" />
                <p>contact@furnilux.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4">Store Hours</h3>
            <div className="space-y-2 text-amber-800 dark:text-amber-200">
              <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: 11:00 AM - 5:00 PM</p>
            </div>
          </div>

          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
              alt="Store interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}