import React from 'react';
import { Award, Heart, Lock, TrendingUp } from 'lucide-react';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';
import BrandLogo from '../components/ui/BrandLogo';
import GoldBtn from '../components/ui/GoldBtn';

const TEAM = [
  { name: 'Sarah Mitchell',      role: 'Founder & Lead Career Strategist',       cred: 'CDI Certified Executive Resume Master',    bio: 'Sarah founded Candidate Help Desk after 15 years as a corporate recruiter and hiring director at Fortune 500 companies. She has personally reviewed over 50,000 resumes and coached hundreds of executives into their defining career moments.' },
  { name: 'James Harrington',    role: 'Director of Career Coaching',             cred: 'Certified Career Coach | MBTI Practitioner', bio: 'James brings 12 years of career counselling experience across technology, finance, and consulting sectors. He specialises in executive career transitions, leadership positioning, and interview performance coaching.' },
  { name: 'Rebecca Torres',      role: 'Executive Resume Master',                 cred: 'CERM | Career Management Alliance Member',   bio: 'Rebecca has written over 3,000 executive resumes and coached C-suite candidates at Google, McKinsey, and Goldman Sachs. Her speciality is translating career complexity into clear, compelling leadership narratives.' },
  { name: 'Marcus Webb',         role: 'LinkedIn & Digital Brand Strategist',     cred: 'LinkedIn Certified Professional',            bio: 'Marcus has optimised over 5,000 LinkedIn profiles and consulted with hiring teams across multiple industries on digital talent attraction. He understands both sides of the recruiter-candidate relationship intimately.' },
];

const VALUES = [
  { icon: Award,       title: 'Excellence',       body: 'We hold ourselves to the same standard we set for our clients — the absolute highest. Every document, every coaching session, and every recommendation we make is the product of deep expertise and genuine care for the outcome.' },
  { icon: Heart,       title: 'Empowerment',      body: 'We believe every person deserves to work in a role that energises and challenges them. Our mission is not just to help you get hired — it is to help you get hired into work that genuinely matters to you.' },
  { icon: Lock,        title: 'Confidentiality',  body: 'Your career decisions are private. Whether you are quietly exploring options or openly making a bold leap, everything you share with us stays with us — protected by strict confidentiality protocols and genuine professional ethics.' },
  { icon: TrendingUp,  title: 'Results',          body: 'We are obsessed with measurable outcomes — not warm feelings about the process. Our success is defined by your offer letter, your salary increase, and the speed at which you land. That is the only metric that matters.' },
];

const MILESTONES = [
  { year: '2015', event: 'Candidate Help Desk founded by Sarah Mitchell, serving 50 clients in year one.' },
  { year: '2017', event: 'Achieved CDI Certified Executive Resume Master status — the highest credential in the industry.' },
  { year: '2019', event: 'Reached 2,000 resumes crafted milestone. Expanded team to include specialist coaches and LinkedIn strategists.' },
  { year: '2021', event: '5,000 resumes milestone. Launched Interview Prep and Career Coaching service lines.' },
  { year: '2023', event: 'Crossed 10,000 resumes. Named among Top Career Services Firms by Career Directors International.' },
  { year: '2025', event: '12,400+ resumes, 40+ industries, clients placed at Google, Amazon, McKinsey, and beyond.' },
];

export default function About() {
  return (
    <div>
      {/* Origin Story */}
      <section className="bg-brand-black py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <BrandLogo size="xl" className="mx-auto lg:mx-0" />
            </Reveal>
            <Reveal delay={0.2}>
              <span className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-widest mb-4 border border-brand-gold/30 px-4 py-1.5 rounded-full">Our Story</span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
                Born from the Belief That Every Candidate Deserves a <em className="text-brand-gold not-italic">Fair Chance</em>
              </h1>
              <p className="mt-5 font-body text-sm text-white/60 leading-relaxed">
                Candidate Help Desk was founded in 2015 by Sarah Mitchell after 15 years inside corporate hiring — reviewing resumes, conducting interviews, and watching qualified candidates get overlooked because their documents didn't reflect their true capability. She had seen too many talented professionals lose life-changing opportunities to a badly formatted PDF.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
                What started as a small consultancy serving 50 clients in year one has grown into a team of certified career experts that has now crafted over 12,400 resumes, placed 500+ executives, and maintained a 96% client satisfaction rate across 40+ industries worldwide.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
                The mission has never changed: help every candidate show up in the job market as the best, most accurate version of themselves — and get the outcome they have earned.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-offwhite px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="The Team" title="The Experts Behind Your Success" subtitle="Every member of our team is a certified career professional with deep real-world hiring experience." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-400 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
                    <span className="text-brand-gold font-heading text-2xl font-bold">{m.name.split(' ').map(n=>n[0]).join('')}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-black">{m.name}</h3>
                  <p className="font-body text-brand-crimson text-xs font-semibold mt-1">{m.role}</p>
                  <p className="font-body text-brand-gold text-xs italic mt-1">{m.cred}</p>
                  <p className="font-body text-brand-black/50 text-xs mt-3 leading-relaxed">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Our Values" title="What We Stand For" subtitle="Four commitments that guide every decision we make on behalf of our clients." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const ValIcon = v.icon;
              return <Reveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-brand-offwhite border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-400 h-full group">
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 group-hover:bg-brand-gold flex items-center justify-center mx-auto mb-4 transition-colors duration-400">
                    <ValIcon className="w-6 h-6 text-brand-gold group-hover:text-brand-black transition-colors duration-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-brand-black/55 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-offwhite px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHead eyebrow="Our Journey" title="10 Years of Transformations" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-gold/20" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-6 relative">
                    <div className="w-16 shrink-0 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-brand-gold border-2 border-white shadow-md z-10 mt-1" />
                    </div>
                    <div className="flex-1 pb-4">
                      <span className="inline-block gold-shimmer text-brand-black font-body text-xs font-bold px-3 py-1 rounded-full mb-2">{m.year}</span>
                      <p className="font-body text-sm text-brand-black/65 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="py-24 bg-brand-crimson px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.4), transparent 60%)' }} />
        <Reveal>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight italic">
              "We exist to close the gap between the talent you have and the opportunities you deserve."
            </h2>
            <p className="mt-6 font-body text-white/70 text-lg">— Sarah Mitchell, Founder, Candidate Help Desk</p>
            <div className="mt-10">
              <GoldBtn to="/contact" size="lg">Start Working With Us</GoldBtn>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}