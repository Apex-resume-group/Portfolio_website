import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, dir = 'up', className = '' }) {
  const init = { up: { y: 50 }, down: { y: -50 }, left: { x: 50 }, right: { x: -50 }, fade: {} };
  return (
    <motion.div
      initial={{ opacity: 0, ...(init[dir] || {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}