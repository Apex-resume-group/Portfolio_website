import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, UserCheck, Zap, HeartHandshake, Shield, MessageSquare, PenTool, CheckCircle, Briefcase } from 'lucide-react';
import GoldBtn from '../components/ui/GoldBtn';
import BrandLogo from '../components/ui/BrandLogo';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';
import { Preview1, Preview2, Preview3, Preview9, Preview12, Preview19 } from '../components/templates/ResumePreview';

const PROOF = [
  '✅ 12,400+ Resumes Crafted','✅ 96% Client Satisfaction Rate','✅ 89% Interview Callback Rate',
  '✅ CDI Certified Executive Resume Master','✅ Candidates Placed at Google, Amazon, JPMorgan & More',
  '✅ Trusted Across 40+ Industries','✅ 500+ Executive Placements','✅ 4.9 / 5 Average Rating',
];

const PILLARS = [
  { icon: Award,         title: 'Certified Expertise',       body: 'Our team holds CDI Certified Executive Resume Master credentials — the gold standard in career services. Every resume we craft is backed by proven methodology and recognized authority, giving you an edge that generic mills simply cannot match.' },
  { icon: Target,        title: 'ATS-Beating Results',       body: 'We engineer every resume to pass Applicant Tracking Systems with precision, not luck. Our keyword optimization process means your resume reaches human eyes — resulting in our consistent 89% interview callback rate across clients.' },
  { icon: UserCheck,     title: 'Personalized Strategy',     body: 'No two careers are alike, and neither are our strategies. Every client receives a custom roadmap built around their unique experience, industry, and goals — because a one-size template will never capture what makes you the right hire.' },
  { icon: Zap,           title: 'Fast Turnaround',           body: 'Opportunity waits for no one. Our streamlined process delivers professional-grade career documents within days, not weeks — so you can seize that perfect role the moment it appears without scrambling to update your materials.' },
  { icon: HeartHandshake,title: 'Lifetime Career Support',   body: 'Your relationship with us does not end when the resume is delivered. Every client receives ongoing access to career resources and expert guidance whenever a new opportunity or transition arises — because career growth is a lifelong journey.' },
  { icon: Shield,        title: 'Confidential & Secure',     body: 'Your career details, personal information, and job search activity are handled with absolute discretion. We use encrypted systems and strict privacy protocols to ensure your search remains private — whether exploring quietly or making a bold move.' },
];

const STEPS = [
  { n:'01', icon: MessageSquare, title: 'Share Your Career Story',            body: 'It starts with a real conversation — not a generic form. You tell us where you\'ve been, where you want to go, and what\'s been holding you back. We listen deeply to understand not just your job history, but the narrative arc of your career and the aspirations driving your next chapter. This is the foundation upon which everything else is built.' },
  { n:'02', icon: PenTool,       title: 'We Craft Your Strategy',             body: 'Our certified experts design a personalized plan tailored to your target industry, seniority level, and timeline. We build your resume, optimize your LinkedIn presence, and prepare your talking points — all engineered to position you as the obvious choice. Every word, every format decision, every keyword is intentional and deliberate.' },
  { n:'03', icon: CheckCircle,   title: 'You Review and Refine',              body: 'You receive your polished career documents with a detailed walkthrough of every strategic decision we made. You review everything, share feedback, and we refine until it feels authentically, powerfully you. This is a genuine partnership — your voice matters at every single stage of the process.' },
  { n:'04', icon: Briefcase,     title: 'You Walk Into Your Next Opportunity',body: 'With a recruiter-approved resume, compelling LinkedIn profile, and clear interview strategy in hand, you step into your job search with confidence and clarity. Our clients report higher callback rates, stronger interview performances, and faster time-to-offer — because deep preparation changes absolutely everything.' },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson via-[#8B0000] to-brand-black" />
        <div className="absolute inset-0 hero-streak overflow-hidden" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '42px 42px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="mb-8">
            <BrandLogo size="lg" />
          </motion.div>

          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-5 border border-brand-gold/30 px-4 py-1.5 rounded-full">
            CDI Certified Career Experts
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
            Stop Getting Overlooked.{' '}
            <span className="text-brand-gold italic">Start Getting Hired.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 font-body text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed">
            Certified career experts helping thousands of candidates land the roles they truly deserve — from first job to the boardroom.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4">
            <GoldBtn to="/services" size="lg">Build My Resume Today</GoldBtn>
            <GoldBtn to="/contact" variant="outline-white" size="lg">Talk to a Career Expert</GoldBtn>
          </motion.div>

          {/* Mini stats row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
            className="mt-14 flex flex-wrap gap-8">
            {['12,400+ Resumes','96% Satisfaction','89% Callbacks','4.9★ Rating'].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-2xl font-bold text-brand-gold">{s.split(' ')[0]}</p>
                <p className="font-body text-xs text-white/50 mt-1">{s.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="bg-brand-black py-4 overflow-hidden border-y border-brand-gold/15">
        <div className="flex ticker-scroll whitespace-nowrap">
          {[...PROOF, ...PROOF].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-8 text-brand-gold font-body text-sm font-medium tracking-wide">
              {item}
              <span className="text-brand-gold/25">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Why Choose Us" title="Six Pillars of Career Excellence" subtitle="Every service we deliver is built on a foundation of certification, technology, and genuine human care." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => {
              const PIcon = p.icon;
              return <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-brand-gold/8 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-crimson/8 group-hover:bg-brand-crimson flex items-center justify-center mb-5 transition-colors duration-400">
                    <PIcon className="w-6 h-6 text-brand-crimson group-hover:text-white transition-colors duration-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-brand-black/55 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="The Process" title="How It Works" subtitle="Four guided steps from where you are now to where you deserve to be." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {STEPS.map((s, i) => {
              const SIcon = s.icon;
              return <Reveal key={i} delay={i * 0.12}>
                <div className="flex gap-5 group">
                  <div className="shrink-0">
                    <div className="relative w-16 h-16 rounded-2xl bg-brand-black flex items-center justify-center">
                      <span className="font-heading text-2xl font-bold text-brand-gold">{s.n}</span>
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-crimson flex items-center justify-center">
                        <SIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-black mb-2.5 group-hover:text-brand-crimson transition-colors duration-300">{s.title}</h3>
                    <p className="font-body text-sm text-brand-black/55 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </Reveal>;
            })}
          </div>
        </div>
      </section>

      {/* ── TEMPLATE GALLERY TEASER ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead light eyebrow="Resume Templates" title="Professionally Designed. Recruiter Approved." subtitle="Every template is engineered for ATS systems and human eyes alike — choose from 20 uniquely formatted designs." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { P: Preview1,  name: 'Executive Commander',   label: 'C-Suite / VP' },
              { P: Preview2,  name: 'Modern Minimalist',     label: 'Law / Finance' },
              { P: Preview3,  name: 'Creative Portfolio',    label: 'Marketing / PR' },
              { P: Preview9,  name: 'The Sales Closer',      label: 'Sales / BizDev' },
              { P: Preview12, name: 'Banking Professional',  label: 'Finance / Banking' },
              { P: Preview19, name: 'Startup Resume',        label: 'CEO / Founder' },
            ].map(({ P, name, label }, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group cursor-pointer rounded-xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/15">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 scale-[1.0] group-hover:scale-105 transition-transform duration-500">
                      <P />
                    </div>
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
                  </div>
                  <div className="bg-[#111] px-2 py-1.5">
                    <p className="font-body text-white text-[10px] font-semibold truncate">{name}</p>
                    <p className="font-body text-brand-gold text-[9px]">{label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <GoldBtn to="/templates" size="lg">Browse All 20 Templates</GoldBtn>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION BANNER ────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-crimson" />
        <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.25), transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              From Overlooked to Offer Letter —{' '}
              <em className="text-brand-gold not-italic">We've Done It 12,000 Times</em>
            </h2>
            <p className="mt-5 font-body text-lg text-white/65 max-w-xl mx-auto">
              Your next chapter is waiting. Let's write it together.
            </p>
            <div className="mt-10">
              <GoldBtn to="/contact" size="xl">Start Your Transformation Today</GoldBtn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}