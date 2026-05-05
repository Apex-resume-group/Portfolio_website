import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';

export default function TransformationBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-brand-crimson" />
      <div className="absolute inset-0 opacity-20" style={{
        background: 'linear-gradient(135deg, transparent 30%, rgba(26,26,26,0.5) 100%)'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
        >
          From Overlooked to Offer Letter —{' '}
          <span className="text-brand-gold">We've Done It 12,000 Times</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <GoldButton to="/Contact" size="lg">
            Start Your Transformation Today
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}