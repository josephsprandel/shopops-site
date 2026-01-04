'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: "AI Photo Intake",
    description: "Snap VIN and odometer photos. AI extracts data instantly—no manual entry.",
    icon: "📸",
    gradient: "from-blue-500 to-cyan-500",
    size: "large" // spans 2 columns
  },
  {
    title: "Service Recommendations",
    description: "AI analyzes 23K+ service records to recommend maintenance based on mileage and history.",
    icon: "🤖",
    gradient: "from-teal-500 to-emerald-500",
    size: "small"
  },
  {
    title: "Title Normalization",
    description: "Enforces position specificity (LF/RF/LR/RR) to prevent warranty disputes.",
    icon: "✅",
    gradient: "from-purple-500 to-pink-500",
    size: "small"
  },
  {
    title: "Natural Language Service Creation",
    description: "Type 'customer needs oil change'—AI generates complete service with parts and labor.",
    icon: "💬",
    gradient: "from-orange-500 to-red-500",
    size: "large"
  },
  {
    title: "Parts Catalog Integration",
    description: "Real-time pricing and availability from WorldPac, PartsTech, and more.",
    icon: "🔧",
    gradient: "from-indigo-500 to-blue-500",
    size: "small"
  },
  {
    title: "Approval Workflow",
    description: "Track customer approvals via phone, SMS, email—full audit trail for liability.",
    icon: "📋",
    gradient: "from-green-500 to-teal-500",
    size: "small"
  },
];

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built Different
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every feature designed to eliminate manual work and prevent costly mistakes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${feature.size === 'large' ? 'md:col-span-2' : 'col-span-1'}
                bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow
                border border-slate-200
              `}
            >
              <div className={`text-5xl mb-4 bg-gradient-to-br ${feature.gradient} bg-clip-text`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
