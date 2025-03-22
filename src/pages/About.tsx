import React from 'react';
import { motion } from 'framer-motion';
import { Zap, HandshakeIcon, Brain, BarChart as ChartBar } from 'lucide-react';

const values = [
  {
    icon: <Zap className="h-8 w-8 text-red-500" />,
    title: 'Speed over Perfection',
    description: 'Build fast. Launch fast. Learn fast.'
  },
  {
    icon: <HandshakeIcon className="h-8 w-8 text-red-500" />,
    title: 'Real Partnership',
    description: 'We think long-term with every client.'
  },
  {
    icon: <Brain className="h-8 w-8 text-red-500" />,
    title: 'Practical AI',
    description: 'No fluff. We use AI to actually save you time and money.'
  },
  {
    icon: <ChartBar className="h-8 w-8 text-red-500" />,
    title: 'Performance Focused',
    description: 'Every tool we build is made to deliver real results.'
  }
];

const About = () => {
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
              We build systems that scale your time using smart, modern AI.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              At Pent5, we believe growth shouldn't mean burnout. That's why we help businesses streamline repetitive tasks using AI and automation systems tailored to how you work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                Pent5 was born from the belief that AI shouldn't be reserved for big tech companies. We're here to bring advanced automation to lean teams—faster, simpler, smarter.
              </p>
              <a 
                href="https://instagram.com/howie_brandz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📲 Start Your Journey on Instagram
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to transform your business with AI?
          </h2>
          <a 
            href="https://instagram.com/howie_brandz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex"
          >
            📲 Start Your Journey on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;