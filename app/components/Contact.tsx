'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-slate-900 mb-8"
        >
          Get Early Access
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-600 mb-12 font-light"
        >
          Limited partnerships available for forward-thinking shops
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200"
        >
          <p className="text-xl text-slate-700 mb-8">
            For partnership inquiries, API access, or enterprise licensing:
          </p>
          <a
            href="mailto:partnerships@shopops.ai"
            className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent hover:from-teal-700 hover:to-cyan-700 transition-all"
          >
            partnerships@shopops.ai
          </a>
        </motion.div>
      </div>
    </section>
  );
}
