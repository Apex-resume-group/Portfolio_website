import React from 'react';
import { Award, CheckCircle, TrendingUp } from 'lucide-react';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';
import BrandLogo from '../components/ui/BrandLogo';
import GoldBtn from '../components/ui/GoldBtn';

const RECOGNITIONS = [
  'Career Directors International — Member in Good Standing',
  'Professional Association of Resume Writers & Career Coaches (PARW/CC)',
  'National Resume Writers\' Association (NRWA) — Affiliate',
  'Forbes Coaches Council — Recognised Professional',
  'LinkedIn Top Career Coach — 2023 & 2024',
];

const CASE_STUDIES = [
  {
    name: 'Michael V.', from: 'Mid-Level Marketing Manager', to: 'VP of Brand Strategy at PepsiCo', time: '8 weeks',
    challenge: 'Michael had 12 years of solid marketing experience but had been passed over for VP roles three times at different companies. His resume read like a job description — responsibilities, not impact. Recruiters saw a capable manager, not a strategic leader. His self-confidence was eroding.',
    approach: 'We conducted a full career audit across all 12 years to surface the strategic decisions, brand transformations, and revenue outcomes Michael had quietly delivered. We rebuilt his resume as a leadership impact narrative, led with a powerful executive summary positioning him as a brand strategist, and rewrote every bullet point to open with measurable business outcomes rather than task descriptions. We also redesigned his LinkedIn presence and coached him on his VP interview narrative.',
    outcome: 'Within 8 weeks, Michael had three VP-level interviews. PepsiCo extended an offer for VP of Brand Strategy — a role two levels above his previous position and a 68% salary increase. He later told us the resume we built gave him the confidence to believe he deserved to be in those conversations.',
  },
  {
    name: 'Dr. Amara Osei', from: 'NHS Physician (UK) — Returning After 3-Year Career Gap', to: 'Clinical Director at Mayo Clinic USA', time: '14 weeks',
    challenge: 'Dr. Osei had taken a three-year career break to care for a terminally ill parent. Re-entering the healthcare job market in the United States with a gap — and an international credential — felt overwhelming. She had applied to 40+ roles without a single callback.',
    approach: 'We reframed the career gap as a demonstration of character — not a liability — and repositioned her international clinical credentials for the US healthcare hiring context. We built a credential-forward resume that led with her CME certifications, clinical expertise, and leadership of large patient care teams. We also provided intensive interview coaching focused on navigating the "tell me about your gap" question with confidence and honesty.',
    outcome: 'Dr. Osei received her first US callback within 12 days of sending out her new resume. Mayo Clinic offered her the Clinical Director role after two interview rounds — a senior leadership position she initially believed was beyond her reach given her circumstances.',
  },
  {
    name: 'Carlos Mendez', from: '12-Year Army Veteran, No Civilian Experience', to: 'Senior Operations Manager at Boeing', time: '10 weeks',
    challenge: 'Carlos left the Army after 12 years as a senior non-commissioned officer. He had led teams of 60+ personnel, managed multi-million dollar logistics operations, and executed complex international missions. But his resume was written in military language that civilian recruiters simply couldn\'t translate — and he had received zero callbacks from 25 applications.',
    approach: 'We built a military-to-civilian translation resume that converted his operational experience into corporate leadership language. "Led 60-person infantry platoon in high-pressure operational environments" became "Managed a 60-person cross-functional team delivering time-critical operations in dynamic, resource-constrained environments." We quantified every outcome and rebuilt his entire application profile for civilian ATS systems.',
    outcome: 'Boeing\'s HR team specifically noted his resume as "one of the strongest operations management applications we\'ve received this year." Carlos was offered the Senior Operations Manager role — a position that recognised the full depth of his leadership experience — at a salary he initially thought was reserved for candidates with MBAs.',
  },
];

export default function Credentials() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-black py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="text-center">
                <BrandLogo size="hero" className="mx-auto" />
                <p className="mt-4 font-body text-brand-gold text-sm font-semibold tracking-wider uppercase">CDI Certified Executive Resume Master</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <span className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-widest mb-4 border border-brand-gold/30 px-4 py-1.5 rounded-full">Why Certification Matters</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Credential That Sets Us <em className="text-brand-gold not-italic">Apart</em>
              </h1>
              <p className="mt-5 font-body text-sm text-white/60 leading-relaxed">
                The CDI Certified Executive Resume Master (CERM) designation is the highest professional credential in the career services industry — awarded by Career Directors International following rigorous examination, portfolio review, and demonstrated mastery of executive-level career strategy.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
                In a job market flooded with unregulated resume mills and AI-generated templates, our certification represents a commitment to the client's outcome that most services are simply unable to make. When your career is on the line, credentials are not a nice-to-have — they are the difference between an offer and a rejection.
              </p>
              <div className="mt-6 space-y-2">
                {['Passed rigorous CDI certification examinations','Demonstrated mastery of executive career strategy','Ongoing continuing education requirements','Portfolio-reviewed by industry peers','Bound by professional ethics code'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="font-body text-sm text-white/65">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognitions */}
      <section className="py-16 bg-brand-offwhite px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHead eyebrow="Industry Recognition" title="Recognised by the Profession" subtitle="Our certifications, memberships, and professional recognitions." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECOGNITIONS.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-brand-gold/12">
                  <Award className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-brand-black/70">{r}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Case Studies" title="Challenge. Approach. Outcome." subtitle="Three detailed client transformation stories — from the problem they arrived with to the result we delivered." />
          <div className="space-y-8">
            {CASE_STUDIES.map((cs, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-brand-gold/12 hover:border-brand-gold/30 transition-all duration-400 shadow-sm hover:shadow-lg">
                  {/* Header */}
                  <div className="bg-brand-black p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-white">{cs.name}</h3>
                        <p className="font-body text-white/45 text-sm mt-0.5">{cs.from}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/30 text-xl">→</span>
                        <div>
                          <p className="font-body text-brand-gold text-sm font-semibold">{cs.to}</p>
                          <p className="font-body text-white/35 text-xs">Hired in {cs.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-gold/10">
                    {[
                      { label: 'Challenge', text: cs.challenge, color: 'bg-brand-crimson/3' },
                      { label: 'Our Approach', text: cs.approach, color: 'bg-brand-offwhite' },
                      { label: 'Outcome', text: cs.outcome, color: 'bg-brand-gold/3' },
                    ].map(({ label, text, color }) => (
                      <div key={label} className={`${color} p-6`}>
                        <span className="inline-block font-body text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">{label}</span>
                        <p className="font-body text-sm text-brand-black/65 leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-crimson text-center px-4">
        <Reveal>
          <TrendingUp className="w-10 h-10 text-brand-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white">Your Transformation Story Starts Here</h2>
          <p className="font-body text-white/65 mt-3 max-w-lg mx-auto text-sm">Every case study above began with a single conversation. Let's start yours.</p>
          <div className="mt-8"><GoldBtn to="/contact" size="lg">Book a Free Consultation</GoldBtn></div>
        </Reveal>
      </section>
    </div>
  );
}