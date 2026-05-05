import React, { useState, useEffect } from 'react';
import { Star, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../components/ui/SectionHead';
import CountUp from '../components/ui/CountUp';
import Reveal from '../components/ui/Reveal';
import GoldBtn from '../components/ui/GoldBtn';

const VIDEOS = [
  { name: 'James Rodriguez',  before: 'Stuck at Mid-Level for 5 Years',   after: 'VP of Operations at Amazon',             quote: 'The executive resume they built opened doors I didn\'t even know existed.' },
  { name: 'Priya Kapoor',     before: 'Career Changer from Teaching',     after: 'Product Manager at Google',              quote: 'They translated my skills into tech language. Three offers in one month.' },
  { name: 'Michael Chen',     before: 'Recent MBA Graduate',              after: 'Strategy Consultant at McKinsey',        quote: 'The interview coaching alone was worth every penny. I walked out with an offer.' },
  { name: 'Elena Petrova',    before: 'PhD Academic, No Industry Experience', after: 'Data Science Lead at Netflix',      quote: 'They made me believe I had something valuable to offer — and proved it to employers.' },
];

const REVIEWS = [
  { name: 'Amanda Torres',   title: 'Marketing Director at HubSpot',     service: 'Executive Resume + Career Coaching', rating: 5, text: 'Before Candidate Help Desk, I had submitted over 200 applications with the same tired resume and received nothing but rejection emails. The team rewrote my resume from scratch, repositioned my experience around measurable outcomes, and coached me through three interview rounds at HubSpot. I received an offer within five weeks at a salary 35% higher than my previous role. This service genuinely changed my life trajectory.' },
  { name: 'David Kim',       title: 'Senior Software Engineer at Microsoft', service: 'Tech Resume + Interview Prep',     rating: 5, text: 'My technical skills were strong but I couldn\'t get past resume screening at top tech companies. Candidate Help Desk rebuilt my resume with exactly the keyword patterns FAANG ATS systems reward, and their mock sessions prepared me for behavioral questions I had always stumbled on. I got callbacks from Microsoft, Google, and Amazon within two weeks. Microsoft made an offer before I even finished the other loops.' },
  { name: 'Rachel Foster',   title: 'Chief Nursing Officer at Mayo Clinic', service: 'Healthcare Executive Resume',     rating: 5, text: 'As a healthcare professional I needed a resume that communicated both clinical expertise and leadership capability. The team understood the unique language of healthcare hiring and produced a document that positioned me as a strategic leader, not just a skilled nurse. Within three months I was offered the CNO role at one of the most prestigious medical institutions in the country. Truly exceptional understanding of my field.' },
  { name: 'Marcus Williams', title: 'VP of Sales at Salesforce',          service: 'Executive Resume + LinkedIn Optimization', rating: 5, text: 'I was a top performer being consistently overlooked for VP-level roles because my resume read like a list of duties instead of a revenue track record. Candidate Help Desk transformed my materials into a compelling executive narrative where every bullet tied to a number. Recruiters started reaching out within days of my LinkedIn update. Three months later, I accepted the VP of Sales position at Salesforce.' },
  { name: 'Robert Chen',     title: 'Managing Director at Goldman Sachs', service: 'Executive Board Portfolio Resume', rating: 5, text: 'At Managing Director level your resume must tell a story of institutional impact, not individual contribution. The team crafted a two-page executive dossier that positioned my 20-year career as a coherent narrative of strategic value creation. The board-level formatting was impeccable. Two executive recruiters told me it was the most polished resume they had ever received in financial services.' },
  { name: 'Lauren Brooks',   title: 'Head of Product at Stripe',          service: 'Career Coaching + Resume',          rating: 5, text: 'I had been stuck in a senior role for four years, unsure how to make the leap into Head of Product. The coaching sessions were genuinely transformational — they helped me see my career story from the outside and articulate my leadership philosophy with clarity. Within two months of working together I had an offer from Stripe at a 40% salary increase. Best investment I have ever made in myself.' },
];

const COMPANIES = ['Google','Amazon','JPMorgan Chase','Microsoft','Deloitte','Goldman Sachs','Tesla','Mayo Clinic','McKinsey & Co','Apple','Meta','IBM','Salesforce','Stripe','HubSpot','Netflix','Adobe','Spotify'];

export default function Reviews() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="bg-brand-black">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-gold leading-tight">
            Real Candidates. Real Transformations. Real Results.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-5 font-body text-lg text-white/60">
            Don't take our word for it — hear directly from the people whose careers we've changed.
          </motion.p>
          <div className="mt-5 h-px w-24 bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-white text-center mb-10">Video Testimonials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {VIDEOS.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div onClick={() => setActiveVideo(i)}
                  className="group cursor-pointer rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-gold/10">
                  <div className="aspect-[3/4] relative bg-gradient-to-b from-brand-crimson/40 to-brand-black flex items-end">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-2 border-brand-gold bg-brand-black/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/20 transition-all duration-300">
                        <Play className="w-5 h-5 text-brand-gold ml-0.5" />
                      </div>
                    </div>
                    <div className="relative p-4 z-10 w-full bg-gradient-to-t from-brand-black/90 to-transparent pt-10">
                      <p className="text-white font-body text-sm font-semibold">{v.name}</p>
                      <p className="text-brand-gold font-body text-xs mt-1 leading-snug">{v.before} → <br/>{v.after}</p>
                      <p className="text-white/50 font-body text-xs mt-2 italic">"{v.quote}"</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Lightbox */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}>
            <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-brand-crimson flex items-center justify-center text-white hover:bg-brand-crimson-dark transition-colors">
              <X className="w-5 h-5" />
            </button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-brand-black border border-brand-gold/20 rounded-2xl p-10 max-w-md w-full text-center" onClick={e => e.stopPropagation()}>
              <div className="w-20 h-20 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center mx-auto mb-5">
                <Play className="w-8 h-8 text-brand-gold ml-1" />
              </div>
              <h3 className="text-white font-heading text-2xl font-bold">{VIDEOS[activeVideo].name}</h3>
              <p className="text-brand-gold font-body text-sm mt-2">{VIDEOS[activeVideo].before} → {VIDEOS[activeVideo].after}</p>
              <p className="text-white/60 font-body text-sm mt-4 italic">"{VIDEOS[activeVideo].quote}"</p>
              <p className="text-white/30 text-xs mt-6 font-body">Full video testimonial — coming soon</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Review Carousel */}
      <section className="py-14 px-4 bg-brand-black/80 border-y border-brand-gold/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-3xl font-bold text-brand-gold text-center mb-2">Real People. Real Results.</h3>
          <div className="h-px w-16 bg-brand-gold mx-auto mb-10" />
          <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.45 }}
                className="relative bg-[#0e0e0e] border border-brand-gold/15 rounded-2xl p-8 lg:p-10 overflow-hidden shadow-2xl">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-crimson rounded-l-2xl" />
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-gold bg-brand-gold/10 flex items-center justify-center">
                      <span className="text-brand-gold font-heading text-2xl font-bold">{REVIEWS[current].name[0]}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-body font-bold text-base">{REVIEWS[current].name}</p>
                    <p className="text-brand-gold font-body text-sm italic mt-0.5">{REVIEWS[current].title}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {Array(5).fill(0).map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />)}
                    </div>
                    <span className="inline-block mt-2 px-3 py-0.5 bg-brand-crimson/15 text-brand-crimson font-body text-xs font-medium rounded-full border border-brand-crimson/20">
                      {REVIEWS[current].service}
                    </span>
                    <p className="text-white/75 font-body text-sm leading-relaxed mt-4">"{REVIEWS[current].text}"</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => { setPaused(true); setCurrent(c => (c-1+REVIEWS.length)%REVIEWS.length); }}
                className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {REVIEWS.map((_,i) => (
                  <button key={i} onClick={() => { setPaused(true); setCurrent(i); }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i===current ? 'bg-brand-gold w-6' : 'bg-brand-gold/25 w-1.5'}`} />
                ))}
              </div>
              <button onClick={() => { setPaused(true); setCurrent(c => (c+1)%REVIEWS.length); }}
                className="w-9 h-9 rounded-full border border-brand-gold/25 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <SectionHead light eyebrow="Impact" title="By the Numbers" subtitle="Measured outcomes that prove what we claim." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <CountUp end={12400} suffix="+" label="Resumes Crafted" />
            <CountUp end={96}    suffix="%" label="Client Satisfaction" />
            <CountUp end={89}    suffix="%" label="Interview Callbacks" />
            <CountUp end={500}   suffix="+" label="Executive Placements" />
            <CountUp end={40}    suffix="+" label="Industries Served" />
            <CountUp end={4.9}   suffix="" label="Average Rating / 5" />
          </div>
        </div>
      </section>

      {/* Company Logo Strip */}
      <section className="py-14 bg-[#0d0d0d] border-y border-brand-gold/8 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center mb-8">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white">Our Candidates Work Here Now</h3>
        </div>
        <div className="flex marquee-scroll whitespace-nowrap">
          {[...COMPANIES, ...COMPANIES].map((c, i) => (
            <div key={i} className="inline-flex items-center mx-6 px-5 py-2.5 border border-brand-gold/10 rounded-lg bg-white/3">
              <span className="font-body text-sm font-semibold text-white/45 tracking-wide">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Transformation */}
      <section className="py-20 px-4 bg-brand-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at 75% 50%, rgba(212,175,55,0.4), transparent 60%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Reveal>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white text-center mb-10">Featured Transformation Story</h3>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 lg:p-12">
              {/* Before / After Panel */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <div className="text-center px-6 py-4 bg-brand-black/30 rounded-xl border border-white/10">
                  <p className="font-body text-white/40 text-sm line-through">8 Months Unemployed</p>
                  <p className="font-body text-white/30 text-xs mt-1">Unable to get callbacks</p>
                </div>
                <div className="text-brand-gold text-3xl font-bold">→</div>
                <div className="text-center px-6 py-4 bg-brand-gold/10 rounded-xl border border-brand-gold/30">
                  <p className="font-body text-brand-gold font-bold text-sm">Senior Product Manager at Microsoft</p>
                  <p className="font-body text-white/70 text-xs mt-1">Hired in 6 Weeks</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="shrink-0 text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-brand-gold bg-brand-gold/15 flex items-center justify-center mx-auto">
                    <span className="text-brand-gold font-heading text-4xl font-bold">JT</span>
                  </div>
                  <p className="text-white font-body font-bold text-sm mt-2">Jennifer Torres</p>
                  <p className="text-brand-gold font-body text-xs mt-0.5">Sr. PM at Microsoft</p>
                </div>
                <p className="text-white/85 font-body text-sm leading-relaxed italic flex-1">
                  "After eight months of applying to hundreds of jobs with nothing but automated rejection emails, I was ready to give up entirely. A friend recommended Candidate Help Desk, and from the very first consultation, I felt like someone finally understood what I was going through. My career advisor didn't just rewrite my resume — she helped me see my own career differently. The resume they built told a story I was genuinely proud of. The interview coaching gave me confidence I hadn't felt in years. Within six weeks of sending out my new materials, I had three interviews scheduled, and Microsoft offered me the Senior Product Manager role before I even completed the others. I went from feeling completely invisible to feeling like I was exactly where I was supposed to be."
                </p>
              </div>
              <div className="text-center mt-10">
                <GoldBtn to="/contact" size="lg">Start Your Own Transformation</GoldBtn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}