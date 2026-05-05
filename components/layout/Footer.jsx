import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const SOCIAL_ICONS = [Linkedin, Twitter, Facebook, Instagram];
import BrandLogo from '../ui/BrandLogo';

const SERVICES = [
  ['Resume Building', '/services'],
  ['Interview Prep', '/services'],
  ['Career Coaching', '/services'],
  ['Job Matching', '/services'],
  ['Templates Gallery', '/templates'],
];
const COMPANY = [
  ['About Us', '/about'],
  ['Credentials', '/credentials'],
  ['Reviews', '/reviews'],
  ['Blog', '/blog'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <div>
                <p className="font-heading text-brand-gold font-bold text-base leading-tight">Candidate Help Desk</p>
                <p className="font-body text-white/40 text-xs tracking-widest mt-0.5">CDI CERTIFIED</p>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Certified career experts helping thousands of candidates land the roles they truly deserve — from first job to the boardroom.
            </p>
            <div className="flex gap-2">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-brand-gold font-bold text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(([l, p]) => (
                <li key={l}><Link to={p} className="font-body text-sm text-white/50 hover:text-brand-gold transition-colors duration-200">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-brand-gold font-bold text-base mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map(([l, p]) => (
                <li key={l}><Link to={p} className="font-body text-sm text-white/50 hover:text-brand-gold transition-colors duration-200">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div className="space-y-5">
            <h4 className="font-heading text-brand-gold font-bold text-base">Stay Ahead</h4>
            <p className="font-body text-xs text-white/40">Get free career tips & resources — no spam.</p>
            <div className="flex rounded-lg overflow-hidden border border-brand-gold/25 focus-within:border-brand-gold transition-colors">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 py-2.5 text-sm font-body text-white placeholder:text-white/30 focus:outline-none" />
              <button className="gold-shimmer px-4 flex items-center">
                <Send className="w-4 h-4 text-brand-black" />
              </button>
            </div>
            <a href="mailto:candidate.helpdesk.9@gmail.com" className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors group">
              <Mail className="w-4 h-4" />
              <span className="font-body text-xs group-hover:underline">candidate.helpdesk.9@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-gold/50">© {new Date().getFullYear()} Candidate Help Desk. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="font-body text-xs text-white/30 hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-white/30 hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}