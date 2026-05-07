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
  return (
    <img
      src="/apex logo final.png"
      alt="Apex Resume Group"
      width={w}
      height={h}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}