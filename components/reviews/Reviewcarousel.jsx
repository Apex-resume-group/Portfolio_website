import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Amanda Torres',
    title: 'Marketing Director at HubSpot',
    service: 'Executive Resume + Career Coaching',
    text: 'Before Candidate Help Desk, I had been applying to over 200 jobs with the same tired resume and getting absolutely nowhere. I was starting to doubt my own qualifications. The team rewrote my resume from scratch, repositioned my experience around measurable outcomes, and coached me through three rounds of interviews at HubSpot. I received an offer within five weeks — at a salary 35% higher than my previous role. This service genuinely changed my life trajectory.',
  },
  {
    name: 'David Kim',
    title: 'Senior Software Engineer at Microsoft',
    service: 'Tech Resume + Interview Prep',
    text: 'I knew my technical skills were strong, but I could never get past the resume screening stage at top tech companies. The Candidate Help Desk team rebuilt my resume with the exact keyword patterns that ATS systems at FAANG companies look for, and their mock interview sessions prepared me for behavioral questions I had always struggled with. I got callbacks from Microsoft, Google, and Amazon within two weeks of sending out my new resume. Microsoft made an offer before I even finished the other interview loops.',
  },
  {
    name: 'Rachel Foster',
    title: 'Chief Nursing Officer at Mayo Clinic',
    service: 'Healthcare Executive Resume',
    text: 'As a healthcare professional, I needed a resume that communicated both clinical expertise and leadership capability. The team at Candidate Help Desk understood the unique language of healthcare hiring and produced a document that positioned me as a strategic leader, not just a skilled nurse. Within three months I was offered the CNO role at one of the most prestigious medical institutions in the country. Their understanding of the healthcare industry was truly exceptional.',
  },
  {
    name: 'Marcus Williams',
    title: 'VP of Sales at Salesforce',
    service: 'Executive Resume + LinkedIn Optimization',
    text: 'I was a top performer being overlooked for VP-level roles because my resume read like a list of duties instead of a track record of revenue impact. Candidate Help Desk transformed my materials into a compelling executive narrative — every bullet point tied to a number, every section designed to demonstrate strategic value. Recruiters started reaching out within days of my LinkedIn update. Three months later, I accepted the VP of Sales position at Salesforce.',
  },
  {
    name: 'Elena Petrova',
    title: 'Product Manager at Stripe',
    service: 'Career Change Resume + Coaching',
    text: 'Transitioning from academic research to product management seemed impossible until I found Candidate Help Desk. They helped me reframe my PhD research as product thinking, my teaching as stakeholder management, and my publications as evidence of analytical rigor. The career coach walked me through exactly how to tell my pivot story in interviews. I went from feeling like an imposter to receiving three competing offers in the tech industry within eight weeks.',
  },
  {
    name: 'Robert Chen',
    title: 'Managing Director at Goldman Sachs',
    service: 'Executive Board Resume',
    text: 'At the Managing Director level, your resume needs to tell a story of institutional impact, not individual contribution. The Candidate Help Desk team crafted a two-page executive dossier that positioned my 20-year career as a coherent narrative of value creation and strategic leadership. The board-level formatting was impeccable. Two executive recruiters told me it was the most polished resume they had ever received in financial services.',
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setCurrent(c => (c + 1) % reviews.length), 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goTo = (dir) => {
    setAutoPlay(false);
    setCurrent(c => (c + dir + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-brand-black/95 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-brand-gold text-center mb-4">
          Real People. Real Results.
        </h3>
        <div className="h-0.5 w-16 bg-brand-gold mx-auto mb-12" />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-black border border-brand-gold/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Crimson accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-crimson" />

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-gold bg-brand-gold/10 flex items-center justify-center">
                    <span className="text-brand-gold font-heading text-2xl font-bold">
                      {reviews[current].name[0]}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-body font-bold text-lg">{reviews[current].name}</h4>
                  <p className="text-brand-gold font-body text-sm italic mt-1">{reviews[current].title}</p>
                  <div className="flex items-center gap-1 mt-3">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="inline-block mt-3 px-3 py-1 bg-brand-crimson/20 text-brand-crimson font-body text-xs font-medium rounded-full">
                    {reviews[current].service}
                  </span>
                  <p className="text-white/80 font-body text-sm leading-relaxed mt-4">
                    "{reviews[current].text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => goTo(-1)} className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-gold w-6' : 'bg-brand-gold/30'}`}
                />
              ))}
            </div>
            <button onClick={() => goTo(1)} className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:bg-brand-gold/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}