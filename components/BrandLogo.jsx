import React from 'react';

export default function BrandLogo({ size = 'md', className = '' }) {
  const sizes = {
    sm: { outer: 40, font1: 7, font2: 4.5, font3: 4.5 },
    md: { outer: 56, font1: 10, font2: 6, font3: 6 },
    lg: { outer: 80, font1: 14, font2: 8, font3: 8 },
    xl: { outer: 120, font1: 20, font2: 12, font3: 12 },
    hero: { outer: 180, font1: 30, font2: 16, font3: 16 },
  };

  const s = sizes[size] || sizes.md;
  const half = s.outer / 2;

  return (
    <svg
      width={s.outer}
      height={s.outer}
      viewBox={`0 0 ${s.outer} ${s.outer}`}
      className={className}
      aria-label="Candidate Help Desk Logo"
    >
      {/* Outer serrated border */}
      <circle cx={half} cy={half} r={half - 1} fill="#1A1A1A" stroke="#D4AF37" strokeWidth={s.outer * 0.03} strokeDasharray={`${s.outer * 0.04} ${s.outer * 0.02}`} />
      {/* Inner crimson ring */}
      <circle cx={half} cy={half} r={half * 0.82} fill="none" stroke="#C41230" strokeWidth={s.outer * 0.02} />
      {/* Inner gold ring */}
      <circle cx={half} cy={half} r={half * 0.72} fill="none" stroke="#D4AF37" strokeWidth={s.outer * 0.01} />
      {/* Star accents */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = half * 0.77;
        const x = half + r * Math.cos(rad);
        const y = half + r * Math.sin(rad);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#D4AF37" fontSize={s.outer * 0.06} fontFamily="Georgia, serif">★</text>
        );
      })}
      {/* CHD monogram */}
      <text x={half} y={half * 0.72} textAnchor="middle" dominantBaseline="central" fontFamily="'Playfair Display', Georgia, serif" fontWeight="bold" fontSize={s.font1} fill="#D4AF37" letterSpacing="1">CHD</text>
      {/* Candidate */}
      <text x={half} y={half * 1.05} textAnchor="middle" dominantBaseline="central" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize={s.font2} fill="#FFFFFF" letterSpacing="2">CANDIDATE</text>
      {/* Help Desk */}
      <text x={half} y={half * 1.25} textAnchor="middle" dominantBaseline="central" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize={s.font3} fill="#FFFFFF" letterSpacing="2">HELP DESK</text>
      {/* Small laurel-like arcs */}
      <path d={`M ${half * 0.4} ${half * 1.45} Q ${half} ${half * 1.6} ${half * 1.6} ${half * 1.45}`} fill="none" stroke="#D4AF37" strokeWidth={s.outer * 0.008} />
    </svg>
  );
}