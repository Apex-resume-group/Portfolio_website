import React, { useState } from 'react';
import { Search, Clock, BookOpen, Download, TrendingUp, ChevronRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../components/ui/Reveal';
import GoldBtn from '../components/ui/GoldBtn';

const ARTICLES = [
  { id:1,  slug:'resume-mistakes-2025',            title:'The 7 Resume Mistakes That Are Killing Your Chances in 2025',        category:'Resume Writing Tips',         readTime:8,  author:'Dr. Sarah Collins, CERM', date:'Mar 12, 2025', excerpt:'Most candidates make the same critical errors that guarantee their resume never reaches a human. Here\'s exactly what to fix — and why these mistakes matter more than ever in an ATS-dominated hiring landscape.', featured:true },
  { id:2,  slug:'tell-me-about-yourself',           title:'How to Answer "Tell Me About Yourself" Without Sounding Robotic',   category:'Interview Preparation',       readTime:6,  author:'James Harrington, Career Coach', date:'Mar 8, 2025',  excerpt:'The most-asked interview question trips up even experienced candidates. We break down the exact formula for an answer that is memorable, strategic, and authentically yours.' },
  { id:3,  slug:'nurse-to-project-manager',         title:'From Nurse to Project Manager: A Real Career Change Blueprint',      category:'Career Change Strategies',    readTime:12, author:'Dr. Sarah Collins, CERM', date:'Mar 5, 2025',  excerpt:'One of our clients made this exact transition in 14 weeks. Here is the precise strategy — resume repositioning, credential translation, and interview narrative — that made it happen.' },
  { id:4,  slug:'linkedin-formula-recruiters',      title:'The LinkedIn Profile Formula That Gets Recruiters to Message You First', category:'LinkedIn Optimization',    readTime:9,  author:'Marcus Webb, LinkedIn Strategist', date:'Feb 28, 2025', excerpt:'97% of recruiters use LinkedIn to source candidates. This evidence-based formula covers every section of your profile — from headline to featured posts — to turn passive browsing into inbound opportunities.' },
  { id:5,  slug:'negotiate-salary',                 title:'How to Negotiate Your Salary Without Feeling Awkward',               category:'Salary Negotiation',         readTime:7,  author:'Rebecca Torres, Executive Coach', date:'Feb 22, 2025', excerpt:'Salary negotiation is a skill, not a personality trait. We give you the exact scripts, timing strategies, and psychological frameworks that turn an uncomfortable conversation into a confident one.' },
  { id:6,  slug:'executive-resume-dead',            title:'The Executive Resume Is Dead — Here\'s What C-Suite Candidates Need Now', category:'Executive Branding',      readTime:10, author:'Dr. Sarah Collins, CERM', date:'Feb 18, 2025', excerpt:'The two-page resume that served executives for decades no longer cuts it. We reveal the executive dossier format — and the personal brand strategy — that is opening boardroom doors in 2025.' },
  { id:7,  slug:'ats-secrets',                      title:'What Applicant Tracking Systems Are Actually Looking For in 2025',    category:'Resume Writing Tips',         readTime:11, author:'James Harrington, Career Coach', date:'Feb 14, 2025', excerpt:'ATS software has become more sophisticated — and more ruthless. Here is a technical breakdown of exactly how modern ATS platforms score resumes, so you can engineer yours to win.' },
  { id:8,  slug:'job-search-playbook',              title:'The 30-Day Job Search Playbook: From Zero to Interview-Ready',        category:'Job Search Playbooks',        readTime:15, author:'Rebecca Torres, Executive Coach', date:'Feb 10, 2025', excerpt:'A step-by-step daily action plan for the first 30 days of an active job search — covering resume preparation, LinkedIn optimization, networking outreach, and application strategy.' },
  { id:9,  slug:'industry-career-guide-tech',       title:'Breaking Into Tech in 2025: The Complete Industry Career Guide',     category:'Industry Career Guides',      readTime:13, author:'Marcus Webb, LinkedIn Strategist', date:'Feb 5, 2025',  excerpt:'The technology industry has its own language, culture, and expectations. This comprehensive guide covers everything from resume keywords to the right companies to target based on your background.' },
  { id:10, slug:'workplace-success-first-90-days',  title:'The First 90 Days: How to Make Your New Role Stick',                 category:'Workplace Success',           readTime:8,  author:'Dr. Sarah Collins, CERM', date:'Jan 30, 2025', excerpt:'Getting the offer is only half the battle. The way you show up in your first 90 days determines whether you become indispensable or invisible. Here is the strategic playbook for a powerful start.' },
  { id:11, slug:'graduate-career-advice',           title:'Your First Real Job: A Graduating Senior\'s Complete Career Guide',   category:'Graduate Career Advice',      readTime:10, author:'James Harrington, Career Coach', date:'Jan 25, 2025', excerpt:'The transition from campus to career is overwhelming — but it doesn\'t have to be. This guide covers everything a new graduate needs: resume fundamentals, interview strategy, and how to stand out without experience.' },
  { id:12, slug:'personal-brand-executive',         title:'Building a Personal Brand That Opens Doors Before You Knock',        category:'Executive Branding',          readTime:9,  author:'Rebecca Torres, Executive Coach', date:'Jan 20, 2025', excerpt:'In competitive job markets, the candidates who win are the ones recruiters already know. We break down the personal brand strategy that gets senior-level professionals noticed before they even apply.' },
];

const CATEGORIES = [
  ['Resume Writing Tips', 3], ['Interview Preparation', 2], ['Career Change Strategies', 1],
  ['Job Search Playbooks', 1], ['Executive Branding', 2], ['Salary Negotiation', 1],
  ['LinkedIn Optimization', 1], ['Industry Career Guides', 1], ['Workplace Success', 1], ['Graduate Career Advice', 1],
];

const POPULAR = ARTICLES.slice(0, 5);

const RESOURCES = [
  { title: 'The Ultimate Resume Checklist', desc: 'A 47-point checklist covering every element of a high-performing resume.', icon: '📋' },
  { title: '50 Powerful Resume Action Verbs', desc: 'The exact verbs that make recruiters pay attention to your achievements.', icon: '⚡' },
  { title: 'The STAR Method Cheat Sheet', desc: 'Master the behavioral interview framework with prompts and examples.', icon: '⭐' },
];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filtered = ARTICLES.filter(a => {
    const sm = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.category.toLowerCase().includes(search.toLowerCase());
    const cm = activeCategory === 'All' || a.category === activeCategory;
    return sm && cm;
  });

  const featured = ARTICLES[0];

  if (selectedArticle) {
    return <ArticlePage article={selectedArticle} onBack={() => setSelectedArticle(null)} allArticles={ARTICLES} />;
  }

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero */}
      <section className="bg-brand-black py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-widest mb-4 border border-brand-gold/30 px-4 py-1.5 rounded-full">Career Resources</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Career Intelligence <em className="text-brand-gold not-italic">Hub</em>
          </h1>
          <p className="mt-4 font-body text-white/60 text-lg max-w-2xl mx-auto">Certified career insights, job search strategies, and industry guides — from the experts at Candidate Help Desk.</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div onClick={() => setSelectedArticle(featured)}
          className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-black border border-brand-gold/15 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-gold/8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto min-h-[260px] bg-gradient-to-br from-brand-crimson/60 to-brand-black flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(212,175,55,0.3), transparent 50%)' }} />
              <BookOpen className="w-20 h-20 text-brand-gold/30" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-brand-gold text-brand-black font-body text-xs font-semibold rounded-full">Featured</span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-brand-gold/15 text-brand-gold font-body text-xs font-semibold rounded-full mb-3">{featured.category}</span>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 leading-tight">{featured.title}</h2>
              <p className="mt-3 font-body text-sm text-white/55 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mt-5 text-white/35 font-body text-xs">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime} min read</span>
                <span>{featured.author}</span>
                <span>{featured.date}</span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-crimson text-white rounded-lg font-body text-sm font-semibold hover:bg-brand-crimson-dark transition-colors">
                  Read Now <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl p-5 border border-brand-gold/10 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-black/30" />
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2.5 border border-brand-gold/20 rounded-lg font-body text-sm text-brand-black placeholder:text-brand-black/30 focus:outline-none focus:border-brand-gold" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-5 border border-brand-gold/10 shadow-sm">
              <h4 className="font-heading text-brand-black font-bold text-base mb-4">Categories</h4>
              <ul className="space-y-1">
                <li>
                  <button onClick={() => setActiveCategory('All')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-body text-sm transition-colors ${activeCategory==='All' ? 'bg-brand-crimson/8 text-brand-crimson font-semibold' : 'text-brand-black/60 hover:text-brand-crimson hover:bg-brand-crimson/5'}`}>
                    <span>All Articles</span>
                    <span className="text-brand-gold/60 text-xs">{ARTICLES.length}</span>
                  </button>
                </li>
                {CATEGORIES.map(([c, n]) => (
                  <li key={c}>
                    <button onClick={() => setActiveCategory(c)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-body text-sm transition-colors ${activeCategory===c ? 'bg-brand-crimson/8 text-brand-crimson font-semibold' : 'text-brand-black/60 hover:text-brand-crimson hover:bg-brand-crimson/5'}`}>
                      <span>{c}</span>
                      <span className="text-brand-gold/60 text-xs">{n}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-xl p-5 border border-brand-gold/10 shadow-sm">
              <h4 className="font-heading text-brand-black font-bold text-base mb-4 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brand-gold" />Popular Articles</h4>
              <ul className="space-y-3">
                {POPULAR.map((a, i) => (
                  <li key={a.id}>
                    <button onClick={() => setSelectedArticle(a)} className="flex items-start gap-2 text-left w-full group">
                      <span className="text-brand-gold font-heading text-sm font-bold shrink-0 mt-0.5">{String(i+1).padStart(2,'0')}</span>
                      <span className="font-body text-xs text-brand-black/60 group-hover:text-brand-crimson transition-colors leading-relaxed">{a.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-black rounded-xl p-5 border border-brand-gold/15">
              <Mail className="w-6 h-6 text-brand-gold mb-3" />
              <h4 className="font-heading text-white font-bold text-base mb-2">Career Tips Weekly</h4>
              <p className="font-body text-white/50 text-xs mb-4">Free expert insights every week. No spam, ever.</p>
              <input type="email" placeholder="Your email address" className="w-full px-3 py-2 bg-white/8 border border-brand-gold/20 rounded-lg text-sm text-white font-body placeholder:text-white/25 mb-2 focus:outline-none focus:border-brand-gold" />
              <button className="w-full gold-shimmer text-brand-black font-body text-sm font-semibold py-2.5 rounded-lg">Subscribe Free</button>
            </div>

            {/* Free Downloads */}
            <div className="bg-white rounded-xl p-5 border border-brand-gold/10 shadow-sm">
              <h4 className="font-heading text-brand-black font-bold text-base mb-4 flex items-center gap-2"><Download className="w-4 h-4 text-brand-gold" />Free Resources</h4>
              <ul className="space-y-3">
                {RESOURCES.map((r, i) => (
                  <li key={i}>
                    <button className="flex items-start gap-2.5 text-left w-full group">
                      <span className="text-lg">{r.icon}</span>
                      <div>
                        <p className="font-body text-xs text-brand-black font-semibold group-hover:text-brand-crimson transition-colors">{r.title}</p>
                        <p className="font-body text-xs text-brand-black/40 mt-0.5">{r.desc}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Articles Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-brand-black/35 font-body">No articles found. Try a different search or category.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.filter(a => a.id !== 1 || activeCategory !== 'All' || search).map((a, i) => (
                  <Reveal key={a.id} delay={i * 0.06}>
                    <div onClick={() => setSelectedArticle(a)}
                      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-brand-gold/8 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 h-full flex flex-col">
                      <div className="h-40 bg-gradient-to-br from-brand-offwhite to-white flex items-center justify-center relative">
                        <BookOpen className="w-10 h-10 text-brand-gold/20" />
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-brand-gold/12 text-brand-gold font-body text-xs font-semibold rounded-full">{a.category}</span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-heading text-base font-bold text-brand-black group-hover:text-brand-crimson transition-colors duration-300 leading-snug mb-2">{a.title}</h3>
                        <p className="font-body text-xs text-brand-black/50 leading-relaxed flex-1">{a.excerpt.slice(0,100)}...</p>
                        <div className="flex items-center justify-between mt-4 text-brand-black/30 font-body text-xs">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime} min</span>
                          <span>{a.date}</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticlePage({ article, onBack, allArticles }) {
  const related = allArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-black">
        <div className="h-64 relative flex items-end bg-gradient-to-b from-brand-crimson/50 to-brand-black">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(212,175,55,0.3), transparent 50%)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-10 w-full">
            <span className="inline-block px-3 py-1 bg-brand-gold text-brand-black font-body text-xs font-semibold rounded-full mb-3">{article.category}</span>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight">{article.title}</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center"><span className="text-brand-gold font-heading font-bold text-sm">{article.author[0]}</span></div>
            <div><p className="text-white font-body text-sm font-semibold">{article.author}</p><p className="text-white/40 font-body text-xs">{article.date}</p></div>
          </div>
          <span className="flex items-center gap-1 text-white/40 font-body text-xs"><Clock className="w-3 h-3" />{article.readTime} min read</span>
          <button onClick={onBack} className="ml-auto text-brand-gold font-body text-sm hover:underline">← Back to Blog</button>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose max-w-none">
          <p className="font-body text-base text-brand-black/70 leading-relaxed mb-6">{article.excerpt}</p>
          <blockquote className="border-l-4 border-brand-crimson pl-6 my-8 italic font-body text-lg text-brand-crimson/80">
            "The most important career document you own is the one that represents you when you're not in the room."
          </blockquote>
          <h2 className="font-heading text-2xl font-bold text-brand-black mt-8 mb-4">Why This Matters in 2025</h2>
          <p className="font-body text-sm text-brand-black/65 leading-relaxed mb-4">
            The job market has evolved dramatically. Candidates who understand the current landscape — ATS systems, recruiter behavior, hiring manager psychology — have a significant advantage over those still using outdated strategies. This article covers exactly what you need to know to position yourself for success.
          </p>

          {/* Mid-article CTA */}
          <div className="my-8 bg-brand-offwhite border border-brand-gold/20 rounded-xl p-6 text-center">
            <h3 className="font-heading text-xl font-bold text-brand-black mb-2">Ready to apply what you've learned?</h3>
            <p className="font-body text-sm text-brand-black/55 mb-4">Let our certified experts build a resume that puts these principles into practice for your specific career.</p>
            <GoldBtn to="/services" size="md">Build My Resume →</GoldBtn>
          </div>

          <h2 className="font-heading text-2xl font-bold text-brand-black mt-8 mb-4">Key Takeaways</h2>
          <ul className="space-y-3 font-body text-sm text-brand-black/65">
            {['Tailor every application to the specific job description and company.','Use achievement-oriented language that quantifies your impact.','Ensure your resume passes ATS screening before a human ever sees it.','Your LinkedIn profile and resume must tell a consistent, compelling story.'].map((t, i) => (
              <li key={i} className="flex items-start gap-2"><span className="text-brand-gold mt-0.5">✦</span>{t}</li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-brand-black rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-white mb-2">Ready to Take the Next Step?</h3>
          <p className="font-body text-white/55 text-sm mb-6">Our certified career experts are ready to help you turn these insights into your next offer letter.</p>
          <GoldBtn to="/contact" size="lg">Talk to a Career Expert</GoldBtn>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="font-heading text-2xl font-bold text-brand-black mb-6">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(a => (
                <div key={a.id} onClick={() => {}} className="cursor-pointer bg-brand-offwhite rounded-xl p-5 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-block px-2 py-0.5 bg-brand-gold/10 text-brand-gold font-body text-xs rounded-full mb-2">{a.category}</span>
                  <h4 className="font-heading text-sm font-bold text-brand-black leading-snug">{a.title}</h4>
                  <p className="font-body text-xs text-brand-black/40 mt-2 flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime} min</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}