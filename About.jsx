import React from 'react';
import { Award, Heart, Lock, TrendingUp } from 'lucide-react';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';
import BrandLogo from '../components/ui/BrandLogo';
import GoldBtn from '../components/ui/GoldBtn';

const TEAM = [
  { name: 'Alexis Mathis',    img: '/alexis.jpeg',    gmail: 'Alexismathis.resume.careers@gmail.com',    cred: '',    bio: 'Alexis founded Apex Resume Group after 30 years as a corporate recruiter and hiring director at Fortune 500 companies. She has personally reviewed over 50,000 resumes and coached hundreds of executives into their defining career moments.' },
  { name: 'Jennifer Patras',  img: '/jeniffer.jpeg',  gmail: 'jpatras.expert@gmail.com',  cred: 'Certified Career Coach | MBTI Practitioner', bio: 'Resume Management Writer.She specialises in executive career transitions, leadership positioning, and interview performance coaching.' },
  { name: 'Allision Davis',   img: '/allison.jpeg',   gmail: 'allison.davis.career.s.expert@gmail.com',  cred: 'CERM | Career Management Alliance Member',   bio: 'Career Transition Expert | Resume Writer & LinkedIn Strategist | Former Senior HR Leader | Helping People Navigate Career Change and Land Interviews Faster' },
  { name: 'Virginia Franco',  img: '/virginia.jpeg',  gmail: 'virginia.franco.resume.solutions@gmail.com',  cred: 'LinkedIn Certified Professional',            bio: 'Franco’s work emphasizes clarity, keyword optimization for applicant-tracking systems, and emotional resonance through narrative. Her documents reportedly generate interviews within 30 days for nearly all clients, making her a recognized voice in contemporary resume writing and LinkedIn optimization.' },
];

const VALUES = [
  { icon: Award,       title: 'Excellence',       body: 'We hold ourselves to the same standard we set for our clients — the absolute highest. Every document, every coaching session, and every recommendation we make is the product of deep expertise and genuine care for the outcome.' },
  { icon: Heart,       title: 'Empowerment',      body: 'We believe every person deserves to work in a role that energises and challenges them. Our mission is not just to help you get hired — it is to help you get hired into work that genuinely matters to you.' },
  { icon: Lock,        title: 'Confidentiality',  body: 'Your career decisions are private. Whether you are quietly exploring options or openly making a bold leap, everything you share with us stays with us — protected by strict confidentiality protocols and genuine professional ethics.' },
  { icon: TrendingUp,  title: 'Results',          body: 'We are obsessed with measurable outcomes — not warm feelings about the process. Our success is defined by your offer letter, your salary increase, and the speed at which you land. That is the only metric that matters.' },
];

const MILESTONES = [
  { year: '2015', event: 'Apex Resume Group founded by Alexis Mathis, serving 50 clients in year one.' },
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
                Built on the Belief That Talent Should <em className="text-brand-gold not-italic">Never Go Unnoticed</em>
              </h1>
              <p className="mt-5 font-body text-sm text-white/60 leading-relaxed">
                Apex Resume Group was founded with a single observation: too many qualified professionals were being overlooked — not because of their abilities, but because their resumes failed to tell their story.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
                What began as a boutique career consultancy has grown into a team of dedicated resume strategists and career experts serving professionals across every industry and career stage. From entry-level candidates to C-suite executives, we have helped thousands land roles they truly deserved.
              </p>
              <p className="mt-4 font-body text-sm text-white/60 leading-relaxed">
                Our mission has never changed: to ensure every professional walks into the job market with a resume that accurately reflects their value, commands attention, and opens the right doors.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-brand-offwhite px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="The Team" title="The Experts Behind Your Success" subtitle="Every member of our team is a certified career professional with deep real-world hiring experience." />
          {/* Founder - standalone featured card */}
<Reveal>
  <div className="max-w-2xl mx-auto mb-12">
    <div className="bg-brand-black rounded-2xl p-8 border border-brand-gold/30 shadow-2xl flex flex-col sm:flex-row items-center gap-8">
      <div className="w-36 h-36 rounded-full border-4 border-brand-gold mx-auto shrink-0 overflow-hidden shadow-lg shadow-brand-gold/20">
        <img src={TEAM[0].img} alt={TEAM[0].name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center sm:text-left">
        <span className="inline-block gold-shimmer text-brand-black font-body text-xs font-bold px-4 py-1.5 rounded-full mb-3">Founder</span>
        <h3 className="font-heading text-2xl font-bold text-white">{TEAM[0].name}</h3>
        <a href={`mailto:${TEAM[0].gmail}`} className="font-body text-brand-gold text-sm mt-1 hover:underline block">{TEAM[0].gmail}</a>
        <p className="font-body text-xs italic text-brand-gold/60 mt-1">{TEAM[0].cred}</p>
        <p className="font-body text-sm text-white/60 mt-3 leading-relaxed">{TEAM[0].bio}</p>
      </div>
    </div>
  </div>
</Reveal>

{/* Remaining 3 team members */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {TEAM.slice(1).map((m, i) => (
    <Reveal key={i} delay={i * 0.1}>
      <div className="bg-white rounded-2xl p-6 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-400 text-center h-full">
        <div className="w-24 h-24 rounded-full border-2 border-brand-gold mx-auto mb-4 overflow-hidden">
          <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-heading text-lg font-bold text-brand-black">{m.name}</h3>
        <a href={`mailto:${m.gmail}`} className="font-body text-brand-gold text-xs mt-1 hover:underline block">{m.gmail}</a>
        <p className="font-body text-xs italic text-brand-gold/60 mt-1">{m.cred}</p>
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
            <p className="mt-6 font-body text-white/70 text-lg">— Alexis Mathis, Founder, Apex resume group</p>
            <div className="mt-10">
              <GoldBtn to="/contact" size="lg">Start Working With Us</GoldBtn>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}