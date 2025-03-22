import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Workflow, Rocket, TrendingUp, Brain, 
  MessageSquare, Database, Calendar, 
  Settings, Zap, ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-8 w-8 text-red-500" />,
    title: 'AI Agents',
    description: 'Conversational bots for bookings, support, and sales—powered by GPT-style tech.'
  },
  {
    icon: <Workflow className="h-8 w-8 text-red-500" />,
    title: 'Smart Workflows',
    description: 'Connect forms, CRMs, emails, calendars, payments, and more.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-red-500" />,
    title: 'Instant Deployment',
    description: 'Go live in just days, not weeks. No coding needed.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-red-500" />,
    title: 'Scale-Ready',
    description: 'Designed for teams ready to grow with fewer manual tasks.'
  }
];

const audiences = [
  'Small Businesses & Coaches',
  'Online Service Providers',
  'Clinics, Agencies, Real Estate Pros',
  'Appointment-Based Businesses',
  'Creators & Course Sellers'
];

const workflowSteps = [
  {
    icon: <Bot className="h-8 w-8 text-red-500" />,
    title: 'Discover your workflow',
    description: 'We analyze your current process and pain points'
  },
  {
    icon: <Settings className="h-8 w-8 text-red-500" />,
    title: 'Build your AI agent',
    description: 'Custom automation tailored to your needs'
  },
  {
    icon: <Rocket className="h-8 w-8 text-red-500" />,
    title: 'Deploy and scale — fast',
    description: 'Go live quickly and grow efficiently'
  }
];

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
              AUTOMATE EVERYTHING. SCALE FASTER.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Pent5 helps modern businesses automate support, onboarding, sales, and operations—using AI agents and custom SaaS workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32">
              <a 
                href="https://instagram.com/howie_brandz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                📲 Book a Demo on Instagram
              </a>
              <a 
                href="https://instagram.com/howie_brandz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                🧠 Explore Our Tools
              </a>
            </div>

            {/* How Pent5 Works Section */}
            <div className="mb-32 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/30 rounded-2xl p-12 backdrop-blur-sm border border-gray-800"
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
                  HOW PENT5 WORKS
                </h2>
                <p className="text-xl text-gray-300 mb-16">
                  We automate your business in 3 simple steps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="card h-full flex flex-col items-center text-center p-8">
                        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                          <ArrowRight className="h-6 w-6 text-red-500" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* AI-Powered Automation Section */}
            <div className="mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-left"
                >
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
                    AI-POWERED AUTOMATION THAT WORKS
                  </h2>
                  <p className="text-xl text-red-500 mb-6">
                    Discover why businesses trust Pent5 for their automation needs.
                  </p>
                  <p className="text-lg text-gray-300">
                    Our tools aren't just smart—they're built to get results. From CRM automation to client onboarding, we use real AI to solve real business problems.
                  </p>
                  <div className="mt-8 space-y-4">
                    {['Smart Routing', 'Data Analysis', 'Process Automation'].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">
            Built for growth-minded businesses
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            who value speed, automation, and results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card flex items-center gap-4"
              >
                <Brain className="h-6 w-6 text-red-500" />
                <span className="text-lg">{audience}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">
            Custom Dashboards. Powerful Automations. Zero Code.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Visual automation flow builder
                    </h3>
                    <p className="text-gray-400">
                      Design complex workflows with our intuitive drag-and-drop interface.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Database className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Built-in CRM triggers
                    </h3>
                    <p className="text-gray-400">
                      Automate customer journeys based on behavior and data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Bot className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI chat trainer and lead routing
                    </h3>
                    <p className="text-gray-400">
                      Train your AI to handle inquiries and route leads intelligently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Real-time performance stats
                    </h3>
                    <p className="text-gray-400">
                      Monitor your automation performance with detailed analytics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <a 
                  href="https://instagram.com/howie_brandz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  👀 View Demos on Instagram
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Preview"
                className="rounded-xl shadow-2xl border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-red-900/20 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let AI handle the repetitive stuff.
            <br />
            You focus on what matters.
          </h2>
          <a 
            href="https://instagram.com/howie_brandz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex"
          >
            🚀 Start Now on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;