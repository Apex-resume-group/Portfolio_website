import React from 'react';

const proofItems = [
  '✅ 12,400+ Resumes Crafted',
  '✅ 96% Client Satisfaction Rate',
  '✅ 89% Interview Callback Rate',
  '✅ CDI Certified Executive Resume Master',
  '✅ Candidates Placed at Google, Amazon, JPMorgan & More',
  '✅ Trusted Across 40+ Industries',
  '✅ 500+ Executive Placements',
  '✅ 4.9 / 5 Average Rating',
];

export default function SocialProofTicker() {
  return (
    <div className="bg-brand-black py-4 overflow-hidden border-y border-brand-gold/20">
      <div className="flex ticker-scroll whitespace-nowrap">
        {[...proofItems, ...proofItems].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8 text-brand-gold font-body text-sm font-medium tracking-wide">
            {item}
            <span className="ml-8 text-brand-gold/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}