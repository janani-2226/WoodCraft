import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Sofa } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-amber-50 dark:bg-amber-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sofa className="h-8 w-8 text-amber-800 dark:text-amber-100" />
            <span className="text-xl font-bold text-amber-800 dark:text-amber-100">WoodCraft</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-amber-800 dark:text-amber-100 hover:text-amber-600">Home</Link>
            <Link to="/about" className="text-amber-800 dark:text-amber-100 hover:text-amber-600">About Us</Link>
            <Link to="/contact" className="text-amber-800 dark:text-amber-100 hover:text-amber-600">Contact</Link>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-amber-100 dark:bg-amber-800"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-amber-800 dark:text-amber-100" />
            ) : (
              <Moon className="h-5 w-5 text-amber-800 dark:text-amber-100" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}