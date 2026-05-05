import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, dir = 'up', className = '' }) {
  const init = { up: { y: 30 }, down: { y: -30 }, left: { x: 28 }, right: { x: -28 }, fade: {} };
  return (
    <motion.div
      initial={{ opacity: 0, ...(init[dir] || {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}