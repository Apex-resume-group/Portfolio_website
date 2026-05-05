import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Shield, Award, Clock, Lock, Linkedin, FileText, BookOpen, Layers, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../components/ui/SectionHead';
import Reveal from '../components/ui/Reveal';

/* ─── Package Data ─────────────────────────────────────────────────────────── */

const MASTER_RESUME = {
  id: 'master-resume',
  name: 'The Master Resume',
  subtitle: 'Your Long-Game Career Asset — Built to Last, Built to Travel',
  icon: BookOpen,
  ribbon: null,
  glow: false,
  bullets: [
    { title: 'Complete Career Depth Documentation', body: 'Every role, result, leadership win, and responsibility across your entire career history is captured and elevated to its highest possible impact level — nothing valuable is left undocumented or understated.' },
    { title: 'Broad Multi-Industry Keyword Architecture', body: 'Strategically written to perform inside ATS systems across multiple industries, sectors, and Fortune 500 organizations simultaneously — not optimized for just one company or one opening.' },
    { title: 'Transferable Leadership Narrative', body: 'Positions you as a seasoned executive whose scope, strategy, and cross-functional leadership experience resonates powerfully with hiring teams across different organizations and market contexts.' },
    { title: 'Evergreen Career Foundation', body: 'This document becomes the master source you pull from every time a new opportunity arises — making every future tailored application faster, stronger, and more strategically aligned from day one.' },
    { title: 'Executive Summary Crafted for Impact', body: 'Your professional summary is written as a bold, results-driven value proposition that immediately communicates who you are, the scale of your experience, and the commercial outcomes you deliver.' },
    { title: 'Achievement-First Bullet Architecture', body: 'Every responsibility-style description is rewritten as a measurable, outcome-focused achievement statement that leads with numbers, percentages, team sizes, and business results.' },
    { title: 'Multi-Format Compatibility', body: 'Delivered in both PDF and fully editable Word (.docx) format so you can adapt, reformat, or update the document at any future point without starting from scratch.' },
    { title: 'ATS Architecture Built for Longevity', body: 'Formatted using clean, recruiter-approved structure that scores strongly inside Applicant Tracking Systems across industries and does not rely on any visual formatting that ATS engines cannot read.' },
    { title: 'Future-Proof Career Positioning', body: 'Whether your next move is a lateral transition, a promotion, a pivot into a new sector, or an executive leap, this document is structurally and strategically ready to support every scenario.' },
    { title: 'Personal Brand Alignment', body: 'Your tone, voice, and professional identity are woven consistently throughout every section so the document reads as a coherent, confident career story — not a disconnected list of jobs.' },
  ],
};

const TAILORED_RESUME = {
  id: 'tailored-resume',
  name: 'The Tailored Resume',
  subtitle: 'One Role. One Document. One Purpose — Getting You That Job.',
  icon: FileText,
  ribbon: null,
  glow: false,
  bullets: [
    { title: 'Precision ATS Mapping to the Specific Job Description', body: 'Every keyword, phrase, core competency, and qualification listed in the target job posting is researched, mapped, and embedded strategically throughout your resume so it scores strongly against that employer\'s hiring scorecard before a human ever reads a single line.' },
    { title: 'Application Platform Optimization', body: 'Whether the employer uses Greenhouse, Workday, Lever, iCIMS, Taleo, or any other hiring platform, your resume is formatted and structured to perform at the highest possible score inside that company\'s specific screening system.' },
    { title: 'Executive-Level Repositioning of Your Summary', body: 'Your professional summary is completely rewritten as a sharp, role-specific value proposition that communicates your scope, strategy, seniority, and commercial impact in the exact language that resonates with that employer\'s hiring team.' },
    { title: 'Achievement-Based Bullet Point Rewrite', body: 'Every generic responsibility bullet is transformed into a powerful, measurable outcome statement that highlights your conversion rates, revenue impact, team scale, project scope, and leadership wins in the context of what the target employer is hiring for.' },
    { title: 'Role-Specific Skills Section Rebuild', body: 'Your skills section is restructured from scratch to feature the exact tools, platforms, methodologies, and competencies the employer has signaled as priorities — removing anything irrelevant and adding what positions you as the precise candidate they are searching for.' },
    { title: 'Location and Contact Optimization', body: 'Your contact details, location display, and geographic indicators are reviewed and corrected to ensure you are never filtered out at the screening stage due to a mismatched location field or outdated contact information.' },
    { title: 'Tone and Language Calibration', body: 'The vocabulary, sentence structure, and professional tone of the entire document is calibrated to match the company\'s brand voice, values, and cultural language — so the resume feels native to their world, not foreign to it.' },
    { title: 'Scope and Seniority Alignment', body: 'Your experience is strategically framed to match the exact level of leadership, budget ownership, team size, and strategic accountability the role requires — neither underselling your seniority nor overstating scope that doesn\'t fit the position.' },
    { title: 'Competitive Differentiation Layer', body: 'Beyond just matching the job description, this resume is engineered to separate you from other qualified candidates by surfacing the specific career evidence, unique accomplishments, and leadership distinctions that make you the most compelling choice for this particular role.' },
    { title: 'Single-Purpose Precision Document', body: 'This resume has one job and one job only — getting you into the interview for this specific role at this specific company — and every word, section, and formatting decision is made in service of that single outcome.' },
  ],
};

const EXEC_SUITE = {
  id: 'executive-suite',
  name: 'The Executive Document Suite',
  subtitle: 'Beyond the Resume — A Complete Executive Application Arsenal',
  icon: Layers,
  ribbon: 'Most Comprehensive',
  glow: true,
  intro: 'For senior and executive-level candidates, a resume alone is rarely enough. The most competitive applications arrive as a complete, cohesive professional package — a suite of documents that collectively tell a compelling, consistent executive story across every touchpoint of the hiring process. The Executive Document Suite provides you with every document you may need, individually crafted to the same certified standard as your resume.',
  bullets: [
    { title: 'Executive Resume', body: 'A comprehensive, two-page senior-level resume built for Director, VP, SVP, and C-suite applications — combining career depth, achievement density, and executive brand positioning into a single authoritative document that commands attention from the first line.' },
    { title: 'Targeted Cover Letter', body: 'A fully customized, role-specific cover letter that opens with a compelling hook, connects your career story directly to the employer\'s strategic priorities, and closes with a confident, action-oriented statement — written to be read, not skimmed.' },
    { title: 'Executive Biography', body: 'A polished third-person professional biography of 250–400 words designed for board introductions, speaking engagements, conference profiles, media features, and high-level networking events — capturing your leadership identity in a narrative format that a resume cannot.' },
    { title: 'LinkedIn Profile Rewrite', body: 'A complete, SEO-optimized LinkedIn profile overhaul covering your headline, about section, experience summaries, skills, and featured content — engineered to attract recruiter views, rank in search results, and reinforce the same executive brand narrative as your resume.' },
    { title: 'Reference Page', body: 'A professionally formatted, brand-consistent reference document listing three to five carefully selected professional references with their names, titles, companies, relationship context, and contact details — ready to submit the moment an employer requests it.' },
    { title: 'Thank You / Post-Interview Follow-Up Letter', body: 'A strategic, personalized post-interview correspondence template that reinforces your candidacy, addresses any concerns raised during the interview, and keeps you top of mind during the decision-making period — a powerful differentiator that most candidates overlook entirely.' },
    { title: 'Salary Negotiation Letter', body: 'A confident, professionally worded written negotiation letter that presents a well-researched counter-offer with market data framing — helping you secure compensation that reflects your true market value without damaging the relationship or the offer.' },
    { title: 'Career Change or Pivot Letter', body: 'A compelling supplementary letter specifically designed for candidates repositioning across industries or functions — directly addressing the career transition, reframing transferable experience, and preemptively answering the employer\'s unspoken question of why you are the right choice despite the non-linear path.' },
    { title: 'Professional Headshot Guidance Brief', body: 'A detailed written guide on how to present yourself for a professional headshot or LinkedIn photo that aligns with your executive brand — covering attire, background, expression, lighting, framing, and platform-specific sizing so your visual presence is as polished as your documents.' },
    { title: 'Application Tracking and Follow-Up Strategy Document', body: 'A personalized, structured action plan that maps out exactly when and how to follow up after submitting each application, after each interview stage, and after receiving an offer — with customizable email templates for each scenario so you never wonder what to say or when to say it.' },
  ],
};

const LINKEDIN_PKG = {
  id: 'linkedin',
  name: 'LinkedIn Profile Optimization',
  subtitle: 'Turn Your LinkedIn Into a 24/7 Recruiter Magnet — Strategically Built to Be Found, Read, and Remembered',
  icon: Linkedin,
  ribbon: 'Top Performer',
  glow: true,
  bullets: [
    { title: 'Full Profile SEO Architecture and Keyword Strategy', body: 'Your entire LinkedIn profile is treated as a search engine asset and rebuilt from the ground up using a researched keyword strategy — identifying the exact job titles, skills, industry terms, and competency phrases that recruiters in your target field are actively searching for, then placing them strategically in your headline, about section, experience descriptions, and skills list to maximize your appearance in LinkedIn search results and recruiter sourcing queries.' },
    { title: 'Headline Engineering for Maximum Visibility and Impact', body: 'Your LinkedIn headline is one of the most powerful pieces of real estate on the entire platform — it appears in search results, connection requests, and comment sections everywhere you engage — and it is rewritten as a keyword-rich, identity-defining, scroll-stopping statement that immediately communicates your seniority, specialization, and value in under 220 characters so that every recruiter who sees it knows exactly who you are and why you matter.' },
    { title: 'About Section Rewrite as an Executive Brand Narrative', body: 'Your About section is transformed from a generic career summary into a compelling, first-person professional story that opens with a powerful hook, communicates the breadth and depth of your leadership experience, surfaces your most significant career achievements, reflects your professional values and approach, and closes with a clear invitation for recruiters and decision-makers to connect with you — written in a warm, confident, and authoritative voice that makes you memorable long after they close the tab.' },
    { title: 'Experience Section Optimization with Achievement-Driven Descriptions', body: 'Every role in your experience section is rewritten to lead with measurable, outcome-focused achievements rather than passive job descriptions — using strong action verbs, quantified impact statements, and role-specific keywords that reinforce your seniority and signal to both algorithms and human readers that your career has been defined by results, not just responsibilities.' },
    { title: 'Skills Section Strategic Rebuild and Endorsement Optimization', body: 'Your skills list is completely audited and restructured to feature the top 50 skills most searched by recruiters in your industry and target role category — organized strategically with your most critical competencies pinned to the top three positions where they receive the highest visibility and the greatest likelihood of recruiter endorsement, which further boosts your profile\'s algorithmic ranking in LinkedIn search.' },
    { title: 'Featured Section and Media Content Strategy', body: 'Your Featured section is curated and optimized to showcase your most impressive career artifacts — including links to press mentions, published articles, awards, portfolio samples, presentations, or a brief professional video introduction — creating a rich, multi-dimensional executive profile that demonstrates credibility and thought leadership beyond the text of the page and dramatically increases the time recruiters spend engaging with your profile.' },
    { title: 'Profile Completeness, Creator Mode, and Engagement Strategy', body: 'Your profile is audited against LinkedIn\'s All-Star completeness criteria and every missing element is identified and completed — including a professional headshot recommendation, background banner branding, contact information, and connection strategy guidance — plus a personalized LinkedIn engagement and content strategy brief outlining how to post, comment, and network in your target industry in a way that builds your visibility, attracts inbound recruiter interest, and positions you as a credible voice in your professional community over the weeks and months of your job search.' },
  ],
};

const PACKAGES = [MASTER_RESUME, TAILORED_RESUME, EXEC_SUITE, LINKEDIN_PKG];

const FAQS = [
  { q: 'How does the personalized pricing work?', a: 'We believe every career is unique — and so is every service engagement. Pricing depends on your career level, the scope of services you need, your timeline, and your specific industry. We never use a one-size-fits-all rate card because cookie-cutter pricing produces cookie-cutter results. Reach out and we will build a transparent, fair proposal tailored to exactly what you need.' },
  { q: 'What is the difference between the Master Resume and the Tailored Resume?', a: 'The Master Resume is your comprehensive long-form career document — a complete archive of every role, achievement, and leadership win across your entire history, built to be the source you draw from for every future application. The Tailored Resume takes your master document (or existing resume) and precision-engineers it for one specific role at one specific company, optimizing every element against that employer\'s job description, hiring platform, and cultural language.' },
  { q: 'Can I purchase the Tailored Resume without the Master Resume first?', a: 'Yes — if you already have a strong foundational resume, we can work directly from it to build a tailored version for your target role. However, clients who begin with the Master Resume consistently report that their tailored applications are stronger, faster to produce, and more strategically aligned because the foundation is already built to the highest possible standard.' },
  { q: 'How long does it take to receive my documents?', a: 'The Master Resume typically takes 3–5 business days. Tailored Resumes are delivered within 2–3 business days. The Executive Document Suite takes 5–7 business days given the scope of documents. LinkedIn optimization is completed within 3–4 business days. Rush options are available — ask your advisor for availability.' },
  { q: 'What if I am not satisfied with the final documents?', a: 'We offer unlimited revisions until you are genuinely satisfied with your career documents. In the rare case that we cannot meet your expectations after revision, we honor a full refund guarantee. Your trust is more important than a single transaction.' },
  { q: 'Will my documents be written by a real human expert?', a: 'Every document at Candidate Help Desk is written, reviewed, and refined by a CDI Certified Professional Resume Writer or Certified Executive Resume Master — a credentialed human expert with deep career strategy experience. While we use AI tools to accelerate research and keyword analysis, every document is authored and quality-checked by your dedicated human advisor.' },
];

/* ─── Package Card Component ───────────────────────────────────────────────── */
function PackageCard({ pkg }) {
  const PIcon = pkg.icon;

  const openEmail = () => {
    const subject = encodeURIComponent(`Pricing Inquiry — ${pkg.name} — Candidate Help Desk`);
    const body = encodeURIComponent(`Hi,\n\nI'm interested in the ${pkg.name} package. Could you please send me a personalized quote?\n\nName: \nCareer Level: \nTarget Role/Industry: \nTimeline: `);
    window.location.href = `mailto:candidate.helpdesk.9@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`relative bg-[#1A1A1A] rounded-2xl flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1
      ${pkg.glow
        ? 'border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35'
        : 'border border-[#D4AF37]/25 shadow-xl hover:shadow-[#D4AF37]/15 hover:border-[#D4AF37]/50'
      }`}>

      {/* Ribbon */}
      {pkg.ribbon && (
        <div className="absolute top-0 right-0 z-10 overflow-hidden" style={{ width: 110, height: 110 }}>
          <div className="absolute top-6 right-[-28px] w-[140px] text-center py-1 gold-shimmer text-brand-black font-body font-bold text-[10px] uppercase tracking-wider transform rotate-45 shadow-lg">
            {pkg.ribbon}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="px-7 pt-7 pb-5 border-b border-[#D4AF37]/15">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/12 flex items-center justify-center">
            <PIcon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-[#D4AF37] leading-tight">{pkg.name}</h3>
          </div>
        </div>
        <p className="font-body text-white/60 text-sm leading-relaxed italic">{pkg.subtitle}</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-px flex-1 bg-[#D4AF37]/20" />
          <span className="font-body text-[#D4AF37]/50 text-xs uppercase tracking-widest">Custom Pricing</span>
          <div className="h-px flex-1 bg-[#D4AF37]/20" />
        </div>
      </div>

      {/* Intro block for Executive Suite */}
      {pkg.intro && (
        <div className="px-7 pt-5 pb-0">
          <p className="font-body text-white/55 text-sm leading-relaxed border-l-2 border-[#D4AF37]/40 pl-4 italic">
            {pkg.intro}
          </p>
          <p className="font-body text-[#D4AF37]/70 text-xs font-semibold uppercase tracking-widest mt-4 mb-1">The Suite Includes:</p>
        </div>
      )}

      {/* Bullets */}
      <div className="px-7 py-5 flex-1">
        <ul className="space-y-4">
          {pkg.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <div className="shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/12 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="font-body font-semibold text-white text-sm">{b.title}</span>
                <span className="font-body text-white/50 text-sm"> — {b.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-7 pb-7 pt-2">
        <div className="h-px bg-[#D4AF37]/15 w-full mb-5" />
        <button
          onClick={openEmail}
          className="w-full py-4 rounded-xl gold-shimmer text-[#1A1A1A] font-body font-bold text-sm tracking-wide shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-transform duration-300"
        >
          Get My Personalized Quote
        </button>
        <p className="font-body text-white/25 text-xs text-center mt-3">
          No obligation — receive a tailored proposal within 24 hours
        </p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-black py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10">
          <SectionHead
            light
            eyebrow="Premium Career Services"
            title="Four Packages. One Mission."
            subtitle="Every document we craft is a strategic career investment — certified, personalised, and built to get you hired."
          />
          {/* Package name row */}
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mt-2">
            {PACKAGES.map((p, i) => {
              const PIcon = p.icon;
              return (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-[#D4AF37]/20 rounded-full px-4 py-2">
                  <PIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="font-body text-white/70 text-xs font-medium">{p.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 bg-[#0F0F0F] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-brand-black px-4 border-y border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { BadgeIcon: Shield, label: 'Money-Back Guarantee',  sub: 'Results or your money back' },
            { BadgeIcon: Award,  label: 'CDI Certified Service', sub: 'Industry-recognised credentials' },
            { BadgeIcon: Lock,   label: '100% Confidential',     sub: 'Your privacy is protected' },
            { BadgeIcon: Clock,  label: 'Fast Turnaround',       sub: 'Documents delivered on time' },
          ].map(({ BadgeIcon: Icon, label, sub }, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center p-5 border border-[#D4AF37]/15 rounded-xl hover:border-[#D4AF37]/35 transition-colors duration-300">
                <Icon className="w-7 h-7 text-[#D4AF37] mx-auto mb-2" />
                <p className="font-body font-semibold text-white text-xs">{label}</p>
                <p className="font-body text-white/35 text-xs mt-1">{sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-brand-offwhite px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHead eyebrow="FAQ" title="Common Questions" subtitle="Everything you need to know before reaching out." />
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-brand-gold/12 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4">
                  <span className="font-body font-semibold text-brand-black text-sm">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-brand-gold shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-brand-black/30 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-5 font-body text-sm text-brand-black/60 leading-relaxed border-t border-brand-gold/8 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}