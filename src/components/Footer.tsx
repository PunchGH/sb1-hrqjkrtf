import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-white">Pent5</span>
            </Link>
            <p className="text-gray-400">
              Automate everything. Scale faster.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="tel:+14417040601" 
                className="nav-link flex items-center gap-2"
              >
                <Phone size={16} />
                +1 (441) 704-0601
              </a>
              <a 
                href="https://instagram.com/howie_brandz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link flex items-center gap-2"
              >
                <Instagram size={16} />
                @howie_brandz
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <a 
              href="https://instagram.com/howie_brandz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pent5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;