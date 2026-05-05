import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

// This component is unused - ServiceBlock in Services.jsx handles rendering
export default function ServiceSection({ title, subtitle, icon: Icon, features, reverse = false }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className={`py-20 lg:py-28 ${reverse ? 'bg-brand-offwhite' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-brand-crimson flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-black">{title}</h2>
              <p className="font-body text-brand-black/60 mt-1">{subtitle}</p>
            </div>
          </div>
          <div className="h-0.5 w-20 bg-brand-gold mt-6 mb-10" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className="border border-brand-gold/10 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all duration-300 bg-white"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <span className="text-brand-gold font-heading text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h4 className="font-body font-semibold text-brand-black text-sm">{feature.name}</h4>
                  </div>
                  {expanded === i ? (
                    <ChevronUp className="w-4 h-4 text-brand-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-black/30 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 font-body text-sm text-brand-black/60 leading-relaxed border-t border-brand-gold/10 pt-4">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}