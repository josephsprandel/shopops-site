'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-teal-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Replace Shop-Ware?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-300 mb-12"
        >
          Open source. Self-hosted. Built by a shop owner who got tired of monthly subscription fees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/jsprandel/shopops3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-lg font-bold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-2xl"
          >
            Get Started on GitHub →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-slate-400 text-sm"
        >
          MIT License • No tracking • No subscriptions
        </motion.p>
      </div>
    </section>
  );
}
