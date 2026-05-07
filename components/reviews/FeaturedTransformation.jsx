import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';

export default function FeaturedTransformation() {
  return (
    <section className="bg-brand-crimson py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        background: 'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.3), transparent 60%)'
      }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Featured Transformation
          </h3>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-12" />

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            {/* Before / After */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="text-center">
                <span className="font-body text-white/40 text-sm line-through">8 Months Unemployed</span>
              </div>
              <div className="text-brand-gold text-2xl">→</div>
              <div className="text-center">
                <span className="font-body text-brand-gold font-bold text-lg">Senior Product Manager at Microsoft — Hired in 6 Weeks</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="shrink-0 lg:w-32">
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center mx-auto">
                  <span className="text-brand-gold font-heading text-3xl font-bold">JT</span>
                </div>
                <p className="text-white font-body font-bold text-center mt-3">Jennifer Torres</p>
              </div>
              <div>
                <p className="text-white/90 font-body text-sm leading-relaxed italic">
                  "After eight months of applying to hundreds of jobs with nothing more than a handful of automated rejection emails, I was ready to give up. A friend recommended Apex Resume Group, and from the very first consultation, I felt like someone finally understood what I was going through. My career advisor didn't just rewrite my resume — she helped me see my own career differently. The resume they built told a story I was proud of. The interview coaching gave me confidence I hadn't felt in years. Within six weeks of sending out my new materials, I had three interviews scheduled, and Microsoft offered me the Senior Product Manager role before I even completed the other processes. I went from feeling invisible to feeling like I was exactly where I was supposed to be."
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <GoldButton to="/Contact" size="lg">
                Start Your Own Transformation
              </GoldButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}