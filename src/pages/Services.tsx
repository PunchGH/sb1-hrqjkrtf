import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Database, Calendar, Layout,
  Users, Plug 
} from 'lucide-react';

const services = [
  {
    icon: <Bot className="h-12 w-12 text-red-500" />,
    title: 'AI Chatbots',
    description: 'GPT-powered bots for 24/7 support, sales, appointment booking, and lead capture.'
  },
  {
    icon: <Database className="h-12 w-12 text-red-500" />,
    title: 'CRM Automation',
    description: 'Smart email & SMS flows, lead tagging, segmentation, and routing—on autopilot.'
  },
  {
    icon: <Calendar className="h-12 w-12 text-red-500" />,
    title: 'Booking & Scheduling Systems',
    description: 'Integrated with Google Calendar, Calendly, or your native tools.'
  },
  {
    icon: <Layout className="h-12 w-12 text-red-500" />,
    title: 'Admin Dashboards',
    description: 'Custom dashboards to manage KPIs, team workflows, and client progress.'
  },
  {
    icon: <Users className="h-12 w-12 text-red-500" />,
    title: 'Client Portals',
    description: 'Give your users a secure, branded experience for access, communication, and billing.'
  },
  {
    icon: <Plug className="h-12 w-12 text-red-500" />,
    title: 'API + SaaS Integration',
    description: 'Connect the dots—Stripe, Notion, Zapier, Twilio, CRMs, and more.'
  }
];

const Services = () => {
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
              What We Can Build For You
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From AI-powered chatbots to seamless backend automation—Pent5 creates systems that run while you sleep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Have a workflow in mind? We'll build it.
          </h2>
          <a 
            href="https://instagram.com/howie_brandz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex"
          >
            💬 Message Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;