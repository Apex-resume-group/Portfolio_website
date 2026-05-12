import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Target, UserCheck, Zap, HeartHandshake, Shield, MessageSquare, PenTool, CheckCircle, Briefcase } from 'lucide-react';
import GoldBtn from './components/ui/GoldBtn';
import BrandLogo from './components/ui/BrandLogo';
import SectionHead from './components/ui/SectionHead';
import Reveal from './components/ui/Reveal';
import { Preview1, Preview2, Preview3, Preview9, Preview12, Preview19 } from './components/templates/ResumePreview';

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

const heroVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    }
  }
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotateX: -15
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const statsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const statsItem = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotateY: -90
  },
  show: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const cardHover = {
  scale: 1.15,
  rotateY: 5,
  rotateX: 5,
  boxShadow: "0 35px 80px rgba(212, 175, 55, 0.3)",
  borderColor: "rgba(212, 175, 55, 0.8)",
  transition: { duration: 0.4, ease: "easeOut" }
};

const templateHover = {
  scale: 1.2,
  rotateY: -10,
  rotateX: 10,
  boxShadow: "0 40px 100px rgba(0, 0, 0, 0.4)",
  borderColor: "rgba(212, 175, 55, 1)",
  transition: { duration: 0.5, ease: "easeOut" }
};

const buttonHover = {
  scale: 1.25,
  rotateY: 15,
  rotateX: -5,
  boxShadow: "0 50px 120px rgba(212, 175, 55, 0.6)",
  filter: "brightness(1.3) saturate(1.2)",
  transition: { duration: 0.4, ease: "easeOut" }
};

const formatDecimal = /** @type {(value: number) => string} */ (value => value.toFixed(1));

const STATS = [
  { label: 'Resumes', value: 12400, suffix: '+' },
  { label: 'Satisfaction', value: 96, suffix: '%' },
  { label: 'Callbacks', value: 89, suffix: '%' },
  { label: 'Rating', value: 4.9, suffix: '★', formatter: formatDecimal },
];

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState(STATS.map(() => 0));
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const triggerStatsAnimation = () => {
    if (hasAnimatedStats) return;
    setHasAnimatedStats(true);

    const duration = 1500;
    const interval = 30;
    const steps = Math.ceil(duration / interval);
    let currentStep = 0;

    const timer = window.setInterval(() => {
      currentStep += 1;
      setAnimatedStats(STATS.map(({ value }) => {
        const progress = Math.min(1, currentStep / steps);
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        return Number((value * easedProgress).toFixed(1));
      }));
      if (currentStep >= steps) {
        window.clearInterval(timer);
        setAnimatedStats(STATS.map(({ value }) => value));
      }
    }, interval);
  };

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={heroVariants}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 bg-gradient-to-br from-[#1E2D3D] via-[#2C3E55] to-[#1B2D42]"
        />
        <div className="absolute inset-0 hero-streak overflow-hidden" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '42px 42px' }} />

        {/* Dramatic shimmer effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-150%' }}
          animate={{ x: '150%' }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          style={{ mixBlendMode: 'screen' }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
          initial={{ x: '-120%' }}
          animate={{ x: '120%' }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut', delay: 1 }}
          style={{ mixBlendMode: 'color-dodge' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div variants={heroItem} className="mb-8" animate={floatingAnimation}>
            <BrandLogo size="lg" />
          </motion.div>

          <motion.span
            variants={heroItem}
            className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-[0.25em] mb-5 border border-brand-gold/30 px-4 py-1.5 rounded-full"
          >
            CDI Certified Career Experts
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl"
          >
            Your Experience Is Valuable.<br />
            <span className="text-brand-gold italic">Your Resume Should Prove It.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-6 font-body text-lg sm:text-xl text-white/75 max-w-4xl leading-relaxed"
          >
            At Apex Resume Group, we transform your skills and achievements into a powerful, ATS-optimized resume that gets you noticed by the right employers — at every stage of your career.
          </motion.p>

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
            <motion.div
              whileHover={{
                scale: 1.2,
                rotateY: 10,
                boxShadow: '0 30px 60px rgba(212, 175, 55, 0.4)',
                filter: 'brightness(1.2) contrast(1.1)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GoldBtn to="/services" size="lg">Build My Resume Today</GoldBtn>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                rotateY: -10,
                boxShadow: '0 30px 60px rgba(255, 255, 255, 0.3)',
                filter: 'brightness(1.2)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GoldBtn to="/contact" variant="outline-white" size="lg">Talk to a Career Expert</GoldBtn>
            </motion.div>
          </motion.div>

          {/* Mini stats row */}
          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            onViewportEnter={triggerStatsAnimation}
            className="mt-14 flex flex-wrap gap-8"
          >
            {STATS.map((stat, i) => (
              <motion.div
                variants={statsItem}
                key={stat.label}
                className="text-center min-w-[130px]"
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="font-heading text-2xl font-bold text-brand-gold"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.5)',
                      '0 0 0px rgba(212, 175, 55, 0)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  {stat.formatter ? stat.formatter(animatedStats[i]) : Math.round(animatedStats[i]).toLocaleString()}{stat.suffix}
                </motion.p>
                <p className="font-body text-xs text-white/50 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
          <SectionHead eyebrow="Why Choose Us" title="Six Reasons Professionals Choose Apex" subtitle="We combine professional insight, proven strategy, and personalized attention to deliver results that speak for themselves." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => {
              const PIcon = p.icon;
              return <Reveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={cardHover}
                  className="bg-white rounded-2xl p-8 border border-brand-gold/8 hover:border-brand-gold/30 transition-all duration-500 group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/8 group-hover:bg-brand-gold flex items-center justify-center mb-5 transition-colors duration-400">
                    <PIcon className="w-6 h-6 text-brand-crimson group-hover:text-white transition-colors duration-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-3">{p.title}</h3>
                  <p className="font-body text-sm text-brand-black/55 leading-relaxed">{p.body}</p>
                </motion.div>
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
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                        <SIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-black mb-2.5 group-hover:text-brand-gold transition-colors duration-300">{s.title}</h3>
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
                <motion.div
                  whileHover={templateHover}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-brand-gold/15 hover:border-brand-gold/50 transition-all duration-400"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <div className="absolute inset-0 scale-[1.0] group-hover:scale-110 transition-transform duration-500">
                      <P />
                    </div>
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/25 transition-colors duration-300" />
                  </div>
                  <div className="bg-[#111] px-2 py-1.5">
                    <p className="font-body text-white text-[10px] font-semibold truncate">{name}</p>
                    <p className="font-body text-brand-gold text-[9px]">{label}</p>
                  </div>
                </motion.div>
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
        <div className="absolute inset-0 bg-brand-black" />
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.3), transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <motion.h2
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            >
              From Overlooked to Offer Letter —{' '}
              <em className="text-brand-gold not-italic">We've Done It 12,000 Times</em>
            </motion.h2>
            <motion.p
              className="mt-5 font-body text-lg text-white/65 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              Your next chapter is waiting. Let's write it together.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GoldBtn to="/contact" size="xl">Start Your Transformation Today</GoldBtn>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}