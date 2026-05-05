import React from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../shared/GoldButton';
import BrandLogo from '../BrandLogo';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson via-brand-crimson-dark to-brand-black" />
      
      {/* Diagonal overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        background: 'linear-gradient(135deg, transparent 40%, rgba(26,26,26,0.8) 100%)'
      }} />

      {/* Animated light streak */}
      <div className="absolute inset-0 light-streak overflow-hidden pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <BrandLogo size="lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Stop Getting Overlooked.{' '}
            <span className="text-brand-gold">Start Getting Hired.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-body text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Certified career experts helping thousands of candidates land the roles they truly deserve — from first job to the boardroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <GoldButton to="/Services" size="lg">
              Build My Resume Today
            </GoldButton>
            <GoldButton to="/Contact" variant="crimson-outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Talk to a Career Expert
            </GoldButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}