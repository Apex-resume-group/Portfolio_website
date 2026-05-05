import React from 'react';

const companies = [
  'Google', 'Amazon', 'JPMorgan Chase', 'Microsoft', 'Deloitte',
  'Goldman Sachs', 'Tesla', 'Mayo Clinic', 'McKinsey', 'Apple', 'Meta', 'IBM',
  'Salesforce', 'Stripe', 'HubSpot', 'Netflix',
];

export default function CompanyLogoStrip() {
  return (
    <section className="bg-brand-black py-16 overflow-hidden border-y border-brand-gold/10">
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white">
          Our Candidates Work Here Now
        </h3>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex marquee-scroll whitespace-nowrap">
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 lg:mx-12 px-6 py-3 border border-brand-gold/10 rounded-lg bg-white/5"
            >
              <span className="font-body text-sm font-semibold text-white/60 tracking-wide">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}