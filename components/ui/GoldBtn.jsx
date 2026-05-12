/**
 * @typedef {{
 *   children: import('react').ReactNode,
 *   to?: string,
 *   href?: string,
 *   onClick?: import('react').MouseEventHandler<HTMLButtonElement>,
 *   variant?: string,
 *   size?: string,
 *   className?: string,
 *   [x: string]: any
 * }} GoldBtnProps
 */

import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  gold:           'gold-shimmer text-brand-black font-semibold hover:scale-105 shadow-lg shadow-brand-gold/20',
  crimson:        'bg-brand-crimson text-white font-semibold hover:bg-brand-crimson-dark hover:scale-105 shadow-lg shadow-brand-crimson/30',
  'outline-gold': 'border-2 border-brand-gold text-brand-gold font-semibold hover:bg-brand-gold hover:text-brand-black',
  'outline-white':'border-2 border-white/40 text-white font-semibold hover:bg-white/10',
  ghost:          'text-brand-gold font-semibold hover:underline',
};
const szs = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
};

/**
 * @param {GoldBtnProps} props
 */
export default function GoldBtn(props) {
  const { children, to, href, onClick, variant = 'gold', size = 'md', className = '', ...rest } = props;
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg font-body transition-all duration-300 ${szs[size]} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>{children}</a>;
  return <button onClick={onClick} className={cls} {...rest}>{children}</button>;
}