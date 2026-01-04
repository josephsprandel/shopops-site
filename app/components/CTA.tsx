'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-teal-900">
      <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-8"
        >
          Ready to Transform Your Shop?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-300 mb-16 max-w-2xl mx-auto font-light"
        >
          Join the next generation of automotive intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:partnerships@shopops.ai"
            className="inline-block px-14 py-6 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xl font-bold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-2xl"
          >
            Request Partnership Info →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-slate-400 text-lg"
        >
          Enterprise API access • White-label options • Priority support
        </motion.p>
      </div>
    </section>
  );
}
