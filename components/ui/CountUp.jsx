import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CountUp({ end, suffix = '', prefix = '', label, sublabel }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const dur = 2200;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center px-4"
    >
      <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gold">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 font-body text-sm text-white font-semibold uppercase tracking-wider">{label}</p>
      {sublabel && <p className="mt-1 font-body text-xs text-white/40">{sublabel}</p>}
    </motion.div>
  );
}