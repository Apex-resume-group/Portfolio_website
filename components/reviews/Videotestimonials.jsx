import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

const videos = [
  { name: 'Sarah Mitchell', before: 'Unemployed 9 Months', after: 'Senior Data Analyst at Deloitte', quote: 'They completely rewrote my career narrative. Within weeks, recruiters were reaching out to me.', color: 'from-brand-crimson/60 to-brand-black/80' },
  { name: 'James Rodriguez', before: 'Stuck at Mid-Level for 5 Years', after: 'VP of Operations at Amazon', quote: 'The executive resume they built for me opened doors I didn\'t even know existed.', color: 'from-brand-gold/30 to-brand-black/80' },
  { name: 'Priya Kapoor', before: 'Career Changer from Teaching', after: 'Product Manager at Google', quote: 'They helped me translate my skills into tech language. I got three offers in one month.', color: 'from-brand-crimson/40 to-brand-black/80' },
  { name: 'Michael Chen', before: 'Recent MBA Graduate', after: 'Strategy Consultant at McKinsey', quote: 'The interview coaching alone was worth every penny. I walked in prepared and walked out with an offer.', color: 'from-brand-gold/20 to-brand-black/80' },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-brand-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[3/4] border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500"
                onClick={() => setActiveVideo(i)}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${video.color}`} />
                <div className="absolute inset-0 bg-brand-black/40" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                    <Play className="w-6 h-6 text-brand-gold ml-1" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-body font-semibold text-sm">{video.name}</p>
                  <p className="text-brand-gold font-body text-xs mt-1">
                    {video.before} → {video.after}
                  </p>
                  <p className="text-white/60 font-body text-xs mt-2 italic">"{video.quote}"</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-crimson flex items-center justify-center text-white hover:bg-brand-crimson-dark transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="bg-brand-black rounded-xl p-8 max-w-lg w-full text-center" onClick={e => e.stopPropagation()}>
              <div className="w-24 h-24 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-brand-gold ml-1" />
              </div>
              <h3 className="text-white font-heading text-2xl font-bold">{videos[activeVideo].name}</h3>
              <p className="text-brand-gold font-body text-sm mt-2">
                {videos[activeVideo].before} → {videos[activeVideo].after}
              </p>
              <p className="text-white/70 font-body text-sm mt-4 italic">"{videos[activeVideo].quote}"</p>
              <p className="text-white/40 font-body text-xs mt-6">Video testimonial preview — full video coming soon</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}