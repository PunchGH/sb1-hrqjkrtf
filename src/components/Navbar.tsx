import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/pent5-logo.svg" 
              alt="Pent5" 
              className="h-8 w-8 logo"
            />
            <span className="text-2xl font-bold text-white">Pent5</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <a 
              href="https://instagram.com/howie_brandz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="https://instagram.com/howie_brandz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-red-500 hover:text-red-400"
              onClick={() => setIsOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;