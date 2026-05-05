import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldButton({ children, to, href, onClick, variant = 'gold', className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    gold: 'gold-shimmer text-brand-black font-semibold hover:scale-105',
    crimson: 'bg-brand-crimson text-white font-semibold hover:bg-brand-crimson-dark hover:scale-105',
    'crimson-outline': 'border-2 border-brand-crimson text-brand-crimson font-semibold hover:bg-brand-crimson hover:text-white',
    'gold-outline': 'border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-black',
  };

  const cls = `inline-flex items-center justify-center gap-2 rounded-md font-body transition-all duration-300 ${sizeClasses[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}