import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { CategoryPage } from './pages/CategoryPage';
import { ProcessPage } from './pages/ProcessPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 dark:bg-amber-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/process/:step" element={<ProcessPage />} />
        </Routes>
      </div>
    </Router>
  );
}