import React, { useState } from 'react';
import { FileText, Mic, Users, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';
import GoldBtn from '../components/ui/GoldBtn';

const RESUME_FEATURES = [
  { name: 'AI-Powered Bullet Point Generator', desc: 'Analyzes your job history and uses natural language intelligence to produce powerful, achievement-oriented bullet points tailored to your specific industry and seniority level — turning vague job descriptions into compelling career evidence. Every bullet is engineered to communicate measurable impact, not just task completion, so recruiters immediately see the value you bring.' },
  { name: 'ATS Keyword Optimization Engine', desc: 'Scans your resume against a target job description and identifies missing keywords, phrases, and formatting patterns that Applicant Tracking Systems are programmed to reward. You can see your ATS compatibility score in real time and fix gaps before submitting a single application — no more disappearing into a digital void.' },
  { name: 'Professional Template Library (20 Templates)', desc: 'Contains 20 fully distinct resume template designs spanning every career level and industry — every template is recruiter-reviewed and certified ATS-safe. From executive two-column layouts to creative portfolio designs to federal government formats, every template is built to impress humans while passing automated systems.' },
  { name: 'Real-Time Live Preview Editor', desc: 'Shows a pixel-perfect render of your resume updating instantly as you type, formatted exactly as it will appear when downloaded. No surprises, no reformatting headaches — what you see is precisely what the recruiter receives in their inbox.' },
  { name: 'Section Customization Engine', desc: 'Add, remove, rename, and reorder any resume section — Work Experience, Education, Skills, Certifications, Publications, Patents, Projects, Volunteer Experience, Awards, Languages, and more. Every section toggles on or off depending on career level and industry norms, so your resume always feels tailored, not templated.' },
  { name: 'Multiple Export Formats (PDF, DOCX, TXT)', desc: 'Download your finished resume as a perfectly formatted PDF, an editable Word document (.docx), or a plain-text version optimized for online application form fields. One resume, three formats, ready for every submission method you will ever encounter.' },
  { name: 'LinkedIn Profile Import', desc: 'Connect your LinkedIn account and auto-populate the resume builder with your existing profile data in seconds — saving significant time while ensuring perfect consistency between your online presence and your application documents. No more copy-pasting between platforms.' },
  { name: 'Cover Letter Builder', desc: 'A fully integrated companion tool that generates a customized cover letter matched to the tone, structure, and content of your resume — including industry-specific opening paragraph templates, a body paragraph framework guided by the job description, and a confident closing call-to-action that invites a response.' },
  { name: 'Job-Specific Resume Tailoring Tool', desc: 'Paste any job description into the platform and receive an instantly tailored version of your resume that repositions your experience to match the employer\'s language, priorities, and requirements — without rewriting from scratch. Apply to more roles without sacrificing personalization.' },
  { name: 'Version History Manager', desc: 'Saves every iteration of your resume automatically with timestamps so you can maintain separate tailored versions for different roles, industries, or application strategies. Revert to any previous version at any time — your entire application history is always just a click away.' },
  { name: 'Built-In Grammar & Spell-Check Engine', desc: 'Reviews every sentence for grammatical accuracy, spelling errors, and awkward phrasing — going beyond basic spell-check to flag weak verbs, passive constructions, and vague language that recruiters find unpersuasive. Your resume will read like it was written by a professional, because it will be.' },
  { name: 'Inline Recruiter Tips System', desc: 'Displays context-sensitive guidance at every section of the editor — written by our certified career advisors — telling you exactly what recruiters look for, what common mistakes to avoid, and what language tends to generate callbacks. Like having a career expert looking over your shoulder as you write.' },
];

const INTERVIEW_FEATURES = [
  { name: 'AI Mock Interview Simulator', desc: 'Generates a personalized set of interview questions based on your target role, industry, and career level — delivering them in a timed, realistic session format that mirrors real interview conditions. The psychological pressure of a timed practice session builds the mental readiness that separates confident performers from nervous applicants.' },
  { name: 'Video Recording & Self-Review', desc: 'Record your answers directly in the platform, then watch the playback with a structured self-evaluation guide covering eye contact, pacing, filler words, enthusiasm, and response structure. This is the kind of honest feedback most candidates only receive after a failed interview — we give it to you before you ever walk in the door.' },
  { name: 'STAR Method Response Builder', desc: 'A structured framework for answering behavioral questions — input the Situation, Task, Action, and Result for each story and the tool helps you craft polished, compelling narrative answers that feel natural and confident under pressure. Never again struggle to structure a response to "Tell me about a time when..."' },
  { name: 'Question Library (500+ Questions)', desc: 'Over 500 categorized interview questions spanning behavioral, situational, competency-based, technical, leadership, and culture-fit formats — organized by industry, job function, and seniority level. Practice exactly the types of questions you are most likely to face in your specific target roles.' },
  { name: 'Answer Coaching Engine', desc: 'Analyzes your written or spoken responses and provides structured feedback on clarity, specificity, confidence language, and persuasive impact — flagging answers that are too vague, too long, too short, or that miss the employer\'s underlying motivation. Know your weaknesses before the interviewer finds them.' },
  { name: 'Body Language & Delivery Guidance', desc: 'Practical, illustrated advice on posture, eye contact, hand gestures, vocal tone, and interview attire — covering both in-person and video interview formats including lighting, background, and camera positioning for remote interviews. The non-verbal signals you send matter as much as the words you speak.' },
  { name: 'Personal Interview Journal', desc: 'Log every interview you complete — the company, role, interviewer name, questions asked, your answers, what went well, and follow-up actions. Build a running record of learning you can review and refine across your entire job search, turning every experience into preparation for the next.' },
];

const COACHING_FEATURES = [
  { name: 'One-on-One Virtual Coaching Sessions', desc: 'Connect directly with a CDI Certified Executive Resume Master and career advisor via video call — sessions are fully personalized to your goals, industry, and situation. Every session includes a pre-session preparation guide and a post-session action plan so you leave every call with clarity and momentum, not just conversation.' },
  { name: 'Personalized Career Roadmap Builder', desc: 'Creates a custom 30-60-90 day career strategy based on your goals, timeline, experience level, and target industry — breaking the overwhelming process of a job search into a clear, manageable set of weekly priorities and milestones. Know exactly what to do every week to move closer to your goal.' },
  { name: 'Industry-Specific Mentorship Matching', desc: 'Connects you with advisors who have direct professional experience in your target field — ensuring the guidance you receive is grounded in the actual culture, language, and expectations of your specific industry. General career advice is everywhere; industry-specific mentorship is rare and invaluable.' },
  { name: 'Goal & Milestone Tracking Dashboard', desc: 'A private, visual progress board where you log applications submitted, interviews booked, networking contacts made, and skill-building completed. Get a motivating, data-driven view of your momentum and maintain consistency over weeks of active searching — because the candidates who stay consistent win.' },
  { name: 'LinkedIn Profile Optimization Coaching', desc: 'A comprehensive review and rewrite strategy for your LinkedIn profile covering headline, about section, experience descriptions, skills endorsements, featured section, and connection strategy. Your LinkedIn is a 24/7 recruiter magnet — it needs to be as powerful as your resume.' },
  { name: 'Session Recap Notes & Recording', desc: 'Automatically generates a written summary of every coaching session including key takeaways, advice given, and action items assigned — delivered to you within 24 hours. Nothing valuable from your sessions is ever lost or forgotten, and you have a permanent record of your career development journey.' },
  { name: 'Curated Resource Library', desc: 'Ongoing access to a private collection of career guides, salary negotiation scripts, reference request templates, networking email templates, industry salary reports, and role-specific resume examples — all created and vetted by our team. The career intelligence you need, in one private, always-updated library.' },
];

const JOB_FEATURES = [
  { name: 'Intelligent Job Recommendation Engine', desc: 'Learns your skills, experience, preferred industries, target salary range, location preferences, and career goals, then surfaces highly relevant job opportunities from across the web in a personalized daily digest. Stop wasting hours scrolling irrelevant listings — focus your energy on roles where you have a genuine competitive advantage.' },
  { name: 'Application Tracking Dashboard (Kanban)', desc: 'A full Kanban-style board where you manage every job application — tracking status from Applied through Interviewing, Offer Received, and Accepted — with notes, follow-up reminders, and contact details against each application. Never lose track of an opportunity or miss a critical follow-up window again.' },
  { name: 'Recruiter Connection Portal', desc: 'Create a professional visibility profile discoverable by recruiters and hiring managers actively seeking talent — including opt-in recruiter messaging, profile completion scoring, and a curated recruiter outreach template library. Let the right opportunities come to you instead of always chasing them.' },
  { name: 'Salary Benchmarking Tool', desc: 'Real-time compensation data by job title, industry, location, and years of experience — giving you the market intelligence to evaluate offers confidently, negotiate assertively, and avoid underselling yourself at critical moments. Know your worth before you walk into the negotiation.' },
  { name: 'Real-Time Job Alert System', desc: 'Monitors thousands of job boards and employer career pages and delivers instant notifications when roles matching your profile are posted — giving you first-mover advantage in competitive application windows. In competitive hiring markets, speed of application meaningfully improves callback rates.' },
  { name: 'Job Board Integration (LinkedIn, Indeed, Glassdoor)', desc: 'Connect the platform seamlessly with LinkedIn, Indeed, and Glassdoor so you can apply directly from the Candidate Help Desk dashboard without switching between platforms, losing formatting, or re-entering information. Streamline your application process and apply to more quality roles in less time.' },
];

function ServiceAccordion({ features }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {features.map((f, i) => (
        <div key={i} className="border border-brand-gold/12 rounded-xl overflow-hidden bg-white hover:border-brand-gold/35 transition-all duration-300">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left gap-3">
            <div className="flex items-center gap-3">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-brand-gold/8 flex items-center justify-center text-brand-gold font-heading text-xs font-bold">
                {String(i+1).padStart(2,'0')}
              </span>
              <span className="font-body font-semibold text-brand-black text-sm">{f.name}</span>
            </div>
            {open === i ? <ChevronUp className="shrink-0 w-4 h-4 text-brand-gold" /> : <ChevronDown className="shrink-0 w-4 h-4 text-brand-black/30" />}
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                <p className="px-5 pb-5 font-body text-sm text-brand-black/55 leading-relaxed border-t border-brand-gold/8 pt-4">{f.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function ServiceBlock({ id, icon: ServiceIcon, title, subtitle, features, bg }) {
  const Icon = ServiceIcon;
  return (
    <section id={id} className={`py-20 lg:py-28 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 rounded-xl bg-brand-crimson flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-brand-black">{title}</h2>
              <p className="font-body text-sm text-brand-black/50 mt-1">{subtitle}</p>
            </div>
          </div>
          <div className="h-0.5 w-16 bg-brand-gold mt-5 mb-10" />
        </Reveal>
        <ServiceAccordion features={features} />
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div>
      <section className="bg-brand-black py-24 text-center px-4">
        <SectionHead light eyebrow="Full Service Suite" title="Everything You Need to Get Hired — In One Place" subtitle="From resume writing to interview coaching — every service we offer is designed with a single purpose: getting you the offer you deserve." />
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {[['Resume Building','#resume'],['Interview Prep','#interview'],['Career Coaching','#coaching'],['Job Matching','#jobs']].map(([l,h]) => (
            <a key={l} href={h} className="px-5 py-2.5 rounded-lg border border-brand-gold/30 text-brand-gold font-body text-sm hover:bg-brand-gold/10 transition-colors">{l}</a>
          ))}
        </div>
      </section>
      <ServiceBlock id="resume"    icon={FileText} title="Resume Building Service"   subtitle="Your resume is your first interview — let's make it unforgettable." features={RESUME_FEATURES}    bg="bg-white" />
      <ServiceBlock id="interview" icon={Mic}      title="Interview Prep Service"    subtitle="Walk into every interview prepared, confident, and ready to close the offer." features={INTERVIEW_FEATURES} bg="bg-brand-offwhite" />
      <ServiceBlock id="coaching"  icon={Users}    title="Career Coaching Service"   subtitle="Expert one-on-one guidance to navigate every stage of your career journey." features={COACHING_FEATURES}   bg="bg-white" />
      <ServiceBlock id="jobs"      icon={Search}   title="Job Matching Service"      subtitle="Stop searching blindly — let the right opportunities find you." features={JOB_FEATURES}         bg="bg-brand-offwhite" />
      <section className="bg-brand-crimson py-16 text-center px-4">
        <Reveal>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white">Ready to Start?</h2>
          <p className="font-body text-white/70 mt-3 max-w-lg mx-auto">Talk to a certified expert today — personalized advice, no pressure, no hard sell.</p>
          <div className="mt-8"><GoldBtn to="/contact" size="lg">Get My Personalized Quote</GoldBtn></div>
        </Reveal>
      </section>
    </div>
  );
}