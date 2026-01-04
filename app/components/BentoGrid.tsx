'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "AI Photo Intake",
    description: "VIN decode and vehicle data extraction in seconds.",
    gradient: "from-blue-500 to-cyan-500",
    size: "large"
  },
  {
    title: "Predictive Maintenance",
    description: "AI recommendations from 20K+ service patterns.",
    gradient: "from-teal-500 to-emerald-500",
    size: "small"
  },
  {
    title: "Position Enforcement",
    description: "Eliminate warranty disputes with automated specificity.",
    gradient: "from-purple-500 to-pink-500",
    size: "small"
  },
  {
    title: "Natural Language Processing",
    description: "Generate complete services from plain English.",
    gradient: "from-orange-500 to-red-500",
    size: "large"
  },
  {
    title: "Real-Time Catalog",
    description: "Live pricing across all major distributors.",
    gradient: "from-indigo-500 to-blue-500",
    size: "small"
  },
  {
    title: "Compliance Tracking",
    description: "Full audit trails for every customer interaction.",
    gradient: "from-green-500 to-teal-500",
    size: "small"
  },
];

export default function BentoGrid() {
  return (
    <section id="platform" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Enterprise-Grade Intelligence
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
            Purpose-built for the modern automotive service industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${feature.size === 'large' ? 'md:col-span-2' : 'col-span-1'}
                bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all
                border border-slate-100 relative overflow-hidden group
              `}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${feature.gradient}`} />
              
              <h3 className="text-3xl font-bold text-slate-900 mb-4 pl-4">
                {feature.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed pl-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
