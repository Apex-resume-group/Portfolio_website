import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHead({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65 }}
      className={`mb-14 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-brand-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-body text-base lg:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-brand-black/55'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-0.5 w-16 bg-brand-gold ${center ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}