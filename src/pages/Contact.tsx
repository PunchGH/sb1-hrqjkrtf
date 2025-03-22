import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
              Let's Talk AI + Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to streamline your business and free up your time? We'll help you make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <Instagram className="h-12 w-12 text-red-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Instagram</h3>
              <p className="text-gray-400 mb-6">
                Follow us and send a DM to get started
              </p>
              <a 
                href="https://instagram.com/howie_brandz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 text-xl font-semibold"
              >
                @howie_brandz
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <Phone className="h-12 w-12 text-red-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-400 mb-6">
                Call us directly to discuss your project
              </p>
              <a 
                href="tel:+14417040601"
                className="text-red-500 hover:text-red-400 text-xl font-semibold"
              >
                +1 (441) 704-0601
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to get started?
          </h2>
          <a 
            href="https://instagram.com/howie_brandz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex text-xl"
          >
            📲 DM Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;