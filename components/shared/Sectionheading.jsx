import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, light = false, centered = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}
    >
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-brand-gold' : 'text-brand-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-body text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-brand-black/60'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-0.5 w-20 ${centered ? 'mx-auto' : ''} bg-brand-gold`} />
    </motion.div>
  );
}