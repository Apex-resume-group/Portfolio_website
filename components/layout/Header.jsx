import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '../ui/BrandLogo';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Templates', to: '/templates' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Credentials', to: '/credentials' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/97 shadow-xl shadow-black/30 backdrop-blur-md' : 'bg-brand-black/85 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <BrandLogo size="xs" />
            <span className="hidden sm:block font-heading text-brand-gold text-sm font-bold tracking-wide leading-tight">
  Apex<br /><span className="text-white/80 font-body text-xs font-medium tracking-widest">RESUME GROUP</span>
</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map(n => (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 text-xs font-body font-medium rounded-md transition-all duration-200 ${loc.pathname === n.to ? 'text-brand-gold' : 'text-white/70 hover:text-brand-gold'}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex gold-shimmer text-brand-black font-body font-semibold text-xs px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-gold/20"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpen(v => !v)}
              className="xl:hidden p-2 text-white/80 hover:text-brand-gold transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-brand-black border-t border-brand-gold/15"
          >
            <nav className="px-4 py-4 space-y-1">
              {NAV.map(n => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${loc.pathname === n.to ? 'text-brand-gold bg-brand-gold/8' : 'text-white/75 hover:text-brand-gold hover:bg-white/5'}`}
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="block mt-3 gold-shimmer text-brand-black text-sm font-semibold py-3 rounded-lg text-center font-body">
                Get Started Free
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}