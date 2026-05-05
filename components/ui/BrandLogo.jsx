import React from 'react';

const sizes = {
  xs:   { w: 36,  h: 36  },
  sm:   { w: 48,  h: 48  },
  md:   { w: 64,  h: 64  },
  lg:   { w: 96,  h: 96  },
  xl:   { w: 140, h: 140 },
  hero: { w: 200, h: 200 },
};

export default function BrandLogo({ size = 'md', className = '' }) {
  const { w, h } = sizes[size] || sizes.md;
  const cx = w / 2, cy = h / 2;
  const r = Math.min(w, h) / 2 - 2;

  // Star positions around inner ring
  const stars = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8 - 90;
    const rad = (angle * Math.PI) / 180;
    const sr = r * 0.76;
    return { x: cx + sr * Math.cos(rad), y: cy + sr * Math.sin(rad) };
  });

  const fs1 = Math.max(7, r * 0.22);
  const fs2 = Math.max(4, r * 0.11);
  const fs3 = Math.max(4, r * 0.105);

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className={className} aria-label="Candidate Help Desk">
      {/* Outer serrated/rope border */}
      <circle cx={cx} cy={cy} r={r} fill="#1A1A1A" stroke="#D4AF37" strokeWidth={Math.max(1.5, r * 0.04)} strokeDasharray={`${r * 0.09} ${r * 0.05}`} />
      {/* Crimson ring */}
      <circle cx={cx} cy={cy} r={r * 0.86} fill="none" stroke="#C41230" strokeWidth={Math.max(1, r * 0.028)} />
      {/* Gold inner ring */}
      <circle cx={cx} cy={cy} r={r * 0.68} fill="none" stroke="#D4AF37" strokeWidth={Math.max(0.5, r * 0.012)} />
      {/* Stars */}
      {stars.map((s, i) => (
        <text key={i} x={s.x} y={s.y} textAnchor="middle" dominantBaseline="central" fill="#D4AF37" fontSize={Math.max(4, r * 0.12)}>★</text>
      ))}
      {/* Monogram */}
      <text x={cx} y={cy - r * 0.14} textAnchor="middle" dominantBaseline="central" fontFamily="'Playfair Display',Georgia,serif" fontWeight="800" fontSize={fs1} fill="#D4AF37" letterSpacing="1">CHD</text>
      {/* CANDIDATE */}
      <text x={cx} y={cy + r * 0.15} textAnchor="middle" dominantBaseline="central" fontFamily="'Inter',Arial,sans-serif" fontWeight="600" fontSize={fs2} fill="#FFFFFF" letterSpacing="1.5">CANDIDATE</text>
      {/* HELP DESK */}
      <text x={cx} y={cy + r * 0.33} textAnchor="middle" dominantBaseline="central" fontFamily="'Inter',Arial,sans-serif" fontWeight="600" fontSize={fs3} fill="#FFFFFF" letterSpacing="1.5">HELP DESK</text>
      {/* Laurel arc */}
      <path d={`M ${cx - r*0.38} ${cy + r*0.52} Q ${cx} ${cy + r*0.68} ${cx + r*0.38} ${cy + r*0.52}`} fill="none" stroke="#D4AF37" strokeWidth={Math.max(0.5, r*0.015)} />
    </svg>
  );
}