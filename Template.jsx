import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from '../components/ui/SectionHead';
import GoldBtn from '../components/ui/GoldBtn';
import { PREVIEW_COMPONENTS } from '../components/templates/ResumePreview';

const TEMPLATES = [
  { id:1,  name:'The Executive Commander',       type:'Executive',   industry:'Leadership',              level:'Senior',     best:'CEOs, VPs, Directors, Board-level',    desc:'Two-column executive resume with bold jet black sidebar featuring name, contact, and core competencies in gold type. The white right column presents achievements with generous line spacing conveying authority and calm confidence.' },
  { id:2,  name:'The Modern Minimalist',         type:'Classic',     industry:'Finance / Law',            level:'Mid-Senior', best:'Finance, Law, Consulting, any field where restraint signals sophistication', desc:'Single-column clean-line resume on pure white with a thin crimson header bar. Restrained hierarchy using only weight and size variation — no colors beyond black, white, and one accent line.' },
  { id:3,  name:'The Creative Portfolio',        type:'Creative',    industry:'Design / Marketing',       level:'All Levels', best:'Designers, marketers, content creators, brand strategists', desc:'Visually expressive two-column resume with full-height crimson sidebar, profile photo circle, icon-led skill sections, and card-style experience blocks with gold accent markers.' },
  { id:4,  name:'The Tech Innovator',            type:'Technical',   industry:'Technology',               level:'Mid-Senior', best:'Developers, data scientists, engineers, product managers', desc:'Grid-based resume with monospaced accent fonts referencing code syntax, skill proficiency bars, and GitHub/portfolio fields prominently in the header. Clean, modern, deeply technical.' },
  { id:5,  name:'The Healthcare Professional',   type:'Industry',    industry:'Healthcare',               level:'All Levels', best:'Nurses, physicians, allied health, clinical administrators', desc:'Credential-forward layout prioritizing certifications, licenses, and clinical rotations. Professional summary and credentials appear in the upper third matching healthcare hiring manager reading patterns.' },
  { id:6,  name:'The Academic Scholar',          type:'Academic',    industry:'Research / Academia',      level:'Senior',     best:'PhD candidates, professors, researchers, scientists', desc:'Long-form CV with sections for Publications, Conference Presentations, Grants, Research Experience, and Teaching — clean serif typographic system with numbered citation formatting.' },
  { id:7,  name:'The Entry-Level Launcher',      type:'Classic',     industry:'General',                  level:'Entry',      best:'Recent graduates, interns, candidates with under 2 years experience', desc:'Fresh, approachable single-column template with Education prominently featured, dedicated Projects & Extracurricular Activities section, and gold name header treatment.' },
  { id:8,  name:'The Career Changer Narrative',  type:'Functional',  industry:'General',                  level:'Mid-Senior', best:'Career changers crossing industries, workforce returners', desc:'Skills-first layout leading with Core Competencies before work history — strategically repositioning transferable skills. Expanded summary section for a brief, compelling pivot explanation.' },
  { id:9,  name:'The Sales Closer',              type:'Industry',    industry:'Sales / Business Dev',     level:'Mid-Senior', best:'Sales managers, account executives, business development directors', desc:'Metrics-forward, achievement-dense template where every bullet is structured around quantified outcomes — revenue, quota, accounts closed, rankings. Gold accent lines separate employer blocks.' },
  { id:10, name:'The Federal Resume',            type:'Government',  industry:'Government',               level:'All Levels', best:'Federal candidates, civil service, government contractors', desc:'Follows OPM formatting guidelines with fields for GS pay scale, hours per week, supervisor contact, and detailed duty paragraphs following federal narrative conventions. Properly formatted for USA Jobs.' },
  { id:11, name:'The Non-Profit Leader',         type:'Industry',    industry:'Non-Profit / NGO',         level:'Mid-Senior', best:'Non-profit executives, social workers, NGO program managers', desc:'Mission-driven template balancing professional accomplishment with values-forward language. Dedicated Community Impact and Volunteer Leadership section alongside clean, warm typography.' },
  { id:12, name:'The Banking Professional',      type:'Industry',    industry:'Finance / Banking',        level:'Mid-Senior', best:'Investment bankers, accountants, financial analysts, auditors', desc:'Conservative two-column precision format with narrow credentials sidebar. Small-caps gold section labels. Achievement-first bullet formatting displaying firm names, titles, and quantified results.' },
  { id:13, name:'The Educator',                  type:'Industry',    industry:'Education / Training',     level:'All Levels', best:'Teachers, instructional designers, corporate trainers, education admins', desc:'Curriculum-informed template with sections for Teaching Philosophy, Curriculum Development, Classroom Technologies, and Professional Development. Accommodates K-12 and higher education formats.' },
  { id:14, name:'The Operations & PM Pro',       type:'Industry',    industry:'Operations / PM',          level:'Mid-Senior', best:'Project managers, operations directors, supply chain, program managers', desc:'Process-oriented template with project highlights block in upper third — scope, budget, and outcome in scannable table format. Emphasis on efficiency metrics and process improvement language.' },
  { id:15, name:'The Infographic Resume',        type:'Creative',    industry:'Design / Media',           level:'All Levels', best:'UI/UX designers, marketers, media creatives, digital-native companies', desc:'Icon-rich visual resume with bar charts for skills, circular proficiency indicators, timeline-style experience, and personal brand color palette. Companion plain-text ATS version included.' },
  { id:16, name:'The Military Transition',       type:'Functional',  industry:'Military / Defense',       level:'All Levels', best:'Transitioning service members from all branches', desc:'Translation-focused template converting military experience into civilian language. Military Service Summary block translates rank, unit size, and mission type into corporate equivalents with concrete examples.' },
  { id:17, name:'The Remote Professional',       type:'Modern',      industry:'Technology / Remote',      level:'All Levels', best:'Candidates targeting fully remote or distributed team roles', desc:'Location-flexible resume highlighting remote work history, async tool proficiency (Slack, Notion, Asana, Zoom), time-zone management skills, and digital communication strengths. Modern airy layout.' },
  { id:18, name:'The Legal Professional',        type:'Industry',    industry:'Legal / Compliance',       level:'Mid-Senior', best:'Attorneys, paralegals, compliance officers, regulatory affairs', desc:'Formal, hierarchically precise template with Bar Admissions, Practice Areas, Court Appearances, and Pro Bono Work sections. Structured serif typography with Latin citation conventions.' },
  { id:19, name:'The Startup Resume',            type:'Modern',      industry:'Startup / Entrepreneurship',level:'Mid-Senior',best:'Founders, co-founders, startup operators, entrepreneurship-to-corporate', desc:'Bold narrative-rich template treating founding experience, fundraising, and company exits with the same weight as employment. Ventures & Products section, Metrics & Traction block, dark header with gold accents.' },
  { id:20, name:'The C-Suite Portfolio',         type:'Executive',   industry:'Leadership',               level:'Senior',     best:'C-suite executives, board directors, investors, senior advisors', desc:'Two-page executive dossier combining traditional resume page one with leadership narrative, board experience, publications, and speaking engagements on page two. Full-width crimson name band, gold dividers.' },
];

const TYPES  = ['All','Executive','Classic','Creative','Technical','Industry','Academic','Functional','Government','Modern'];
const LEVELS = ['All','Entry','Mid-Senior','Senior','All Levels'];

export default function Templates() {
  const [type,  setType]  = useState('All');
  const [level, setLevel] = useState('All');

  const filtered = TEMPLATES.filter(t => {
    const tm = type  === 'All' || t.type  === type;
    const lm = level === 'All' || t.level === level || t.level === 'All Levels';
    return tm && lm;
  });

  return (
    <div>
      <section className="bg-brand-black py-24 px-4 text-center">
        <SectionHead light eyebrow="Templates Gallery" title="20 Professional Resume Templates" subtitle="Every template is ATS-safe, recruiter-reviewed, and built for a specific career strategy. Filter to find yours." />
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-16 lg:top-20 z-30 bg-brand-offwhite border-b border-brand-gold/12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 items-center justify-center flex-wrap">
          <div className="flex flex-wrap gap-2 justify-center">
            {TYPES.map(t => (
              <button key={t} onClick={() => setType(t)}
                className={`px-3.5 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${type===t ? 'bg-brand-crimson text-white shadow-md' : 'bg-white text-brand-black/60 border border-brand-gold/20 hover:border-brand-gold/50 hover:text-brand-black'}`}>
                {t}
              </button>
            ))}
          </div>
          <span className="text-brand-gold/30 hidden sm:block">|</span>
          <div className="flex flex-wrap gap-2 justify-center">
            {LEVELS.map(l => (
              <button key={l} onClick={() => setLevel(l)}
                className={`px-3.5 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${level===l ? 'bg-brand-gold text-brand-black shadow-md' : 'bg-white text-brand-black/60 border border-brand-gold/20 hover:border-brand-gold/50'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-14 bg-brand-offwhite min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/40 font-body text-sm text-center mb-8">Showing {filtered.length} template{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((t, i) => (
                <motion.div key={t.id} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-brand-gold/10 hover:border-brand-gold/40 hover:shadow-2xl hover:shadow-brand-gold/8 transition-all duration-500 hover:-translate-y-1.5">

                  {/* Preview thumbnail */}
                  <div className="aspect-[3/4] relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0">
                      {(() => { const P = PREVIEW_COMPONENTS[t.id]; return P ? <P /> : null; })()}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-brand-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                      <p className="text-white font-body text-[10px] text-center leading-relaxed">{t.desc}</p>
                    </div>
                    {/* Template number badge */}
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shadow-md">
                      <span className="font-heading text-brand-black text-[9px] font-bold">{t.id}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-brand-black leading-tight">{t.name}</h3>
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold font-body text-xs rounded-md">{t.industry}</span>
                      <span className="px-2 py-0.5 bg-brand-crimson/8 text-brand-crimson font-body text-xs rounded-md">{t.level}</span>
                    </div>
                    <p className="font-body text-xs text-brand-black/40 mt-2 leading-relaxed line-clamp-2">Best for: {t.best}</p>
                    <button className="mt-4 w-full py-2.5 bg-brand-crimson hover:bg-brand-crimson-dark text-white font-body text-sm font-semibold rounded-xl transition-colors duration-300">
                      Use This Template
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-brand-black/35 font-body">No templates match — try a different filter combination.</div>
          )}
        </div>
      </section>
    </div>
  );
}