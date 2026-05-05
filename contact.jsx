import React, { useState } from 'react';
import { Mail, MessageSquare, Calendar, Linkedin, Twitter, Facebook, Instagram, ChevronDown, ChevronUp, Shield, Clock, Lock, Send, Award } from 'lucide-react';

const SOCIAL_ICONS_CONTACT = [Linkedin, Twitter, Facebook, Instagram];
const GUARANTEES = [
  [Shield, 'Money-Back Guarantee'],
  [Lock, '100% Confidential'],
  [Clock, 'Fast Turnaround'],
  [Award, 'CDI Certified Experts'],
];
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/ui/Reveal';
import GoldBtn from '../components/ui/GoldBtn';

const FAQS = [
  { q: 'How quickly will you respond to my enquiry?', a: 'We typically respond within 2 business hours during weekday business hours. For enquiries received after hours or on weekends, you will hear from us first thing the next business day. We take every enquiry seriously and never use auto-responders for initial contact.' },
  { q: 'Is my initial consultation free?', a: 'Yes — your first consultation is completely free and carries no obligation whatsoever. We use this conversation to understand your goals, assess your current materials, and determine the best path forward together. If we\'re a good fit, we\'ll share a personalised proposal. If we\'re not, we\'ll tell you honestly.' },
  { q: 'What information should I have ready when I contact you?', a: 'It helps to have a rough sense of your current career level, your target role or industry, your timeline (are you actively applying or exploring?), and any specific challenges you\'ve been facing in your job search. You don\'t need to have everything figured out — that\'s what we\'re here for.' },
  { q: 'Can I see examples of your work before committing?', a: 'Absolutely. We maintain a portfolio of anonymised resume samples across every industry and career level that we share during your free consultation. You\'ll see exactly the quality and calibre of work we produce before making any decision.' },
  { q: 'How do I know which service is right for me?', a: 'That\'s exactly what the free consultation is for. Our advisors will ask the right questions, listen carefully, and recommend the service tier that genuinely matches your needs and goals — not the most expensive option. Our long-term reputation depends on giving you the right recommendation.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService of Interest: ${form.service}\n\nMessage:\n${form.message}`);
    const subject = encodeURIComponent(form.subject || 'Career Services Enquiry — Candidate Help Desk');
    window.location.href = `mailto:candidate.helpdesk.9@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-brand-gold font-body text-xs font-semibold uppercase tracking-widest mb-4 border border-brand-gold/30 px-4 py-1.5 rounded-full">Get in Touch</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
              Your Career Conversation <em className="text-brand-gold not-italic">Starts Here</em>
            </h1>
            <p className="mt-4 font-body text-white/55 text-base">We typically respond within 2 business hours.</p>
            <div className="mt-6">
              <a href="mailto:candidate.helpdesk.9@gmail.com"
                className="inline-flex items-center gap-3 font-body text-2xl sm:text-3xl font-bold text-brand-gold hover:text-brand-gold-light transition-colors duration-300">
                <Mail className="w-7 h-7" />
                candidate.helpdesk.9@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="bg-brand-black border border-brand-gold/20 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-brand-gold/3 blur-3xl pointer-events-none" />

                <h2 className="font-heading text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="font-body text-white/40 text-sm mb-8">
                  Everything you share with us is completely confidential. We're here to help — no pressure, no hard sell.
                </p>
                <div className="flex items-center gap-2 mb-6 px-4 py-3 bg-brand-gold/8 border border-brand-gold/20 rounded-xl">
                  <Shield className="w-4 h-4 text-brand-gold shrink-0" />
                  <p className="font-body text-brand-gold text-xs">Everything you share with us is completely confidential. We're here to help — no pressure, no hard sell.</p>
                </div>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-brand-gold" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">Your email client should have opened!</h3>
                    <p className="font-body text-white/50 text-sm mt-2">We look forward to connecting with you shortly.</p>
                    <p className="font-body text-brand-gold/60 text-xs mt-4">If it didn't open, email us directly at candidate.helpdesk.9@gmail.com</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-gold/50 font-body text-sm hover:text-brand-gold transition-colors">Send another message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                          className="w-full bg-brand-black border border-brand-gold/25 hover:border-brand-gold/50 focus:border-brand-gold rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block font-body text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com"
                          className="w-full bg-brand-black border border-brand-gold/25 hover:border-brand-gold/50 focus:border-brand-gold rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">Subject</label>
                      <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Executive Resume Quote, Career Coaching Enquiry"
                        className="w-full bg-brand-black border border-brand-gold/25 hover:border-brand-gold/50 focus:border-brand-gold rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">Service of Interest</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full bg-brand-black border border-brand-gold/25 hover:border-brand-gold/50 focus:border-brand-gold rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none transition-colors">
                        <option value="">Select a service...</option>
                        <option>Resume Writing (Starter)</option>
                        <option>Resume Writing (Professional)</option>
                        <option>Executive Resume (Executive Tier)</option>
                        <option>Interview Preparation</option>
                        <option>Career Coaching</option>
                        <option>Job Matching</option>
                        <option>Full Package (All Services)</option>
                        <option>Not Sure — Need Advice</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-white/50 font-semibold uppercase tracking-wider mb-2">Your Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your career goals, current situation, and how we can help..."
                        className="w-full bg-brand-black border border-brand-gold/25 hover:border-brand-gold/50 focus:border-brand-gold rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none transition-colors resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full gold-shimmer text-brand-black font-body font-bold text-base py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send My Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Reveal delay={0.15}>
              {/* Contact Info Cards */}
              {[
                { icon: Mail,        title: 'Email Us',           val: 'candidate.helpdesk.9@gmail.com', sub: 'We respond within 2 business hours', href: 'mailto:candidate.helpdesk.9@gmail.com' },
                { icon: MessageSquare, title: 'Live Chat',         val: 'Available 9am–6pm EST',          sub: 'Mon–Fri, weekdays only' },
                { icon: Calendar,    title: 'Book a Consultation', val: 'Free 30-minute session',         sub: 'No obligation, completely free' },
              ].map(({ icon: Icon, title, val, sub, href }, i) => (
                <div key={i} className="bg-brand-black border border-brand-gold/15 rounded-xl p-5 mb-4 hover:border-brand-gold/35 transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-body text-white text-sm font-semibold">{title}</p>
                      {href ? (
                        <a href={href} className="font-body text-brand-gold text-xs hover:underline">{val}</a>
                      ) : (
                        <p className="font-body text-brand-gold text-xs">{val}</p>
                      )}
                      <p className="font-body text-white/30 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Trust Badges */}
            <Reveal delay={0.25}>
              <div className="bg-brand-black border border-brand-gold/15 rounded-xl p-5">
                <h4 className="font-heading text-white font-bold text-base mb-4">Our Guarantees</h4>
                <div className="space-y-3">
                  {[
                    [Shield, 'Money-Back Guarantee'],
                    [Lock, '100% Confidential'],
                    [Clock, 'Fast Turnaround'],
                    [Award, 'CDI Certified Experts'],
                  ].map(([Icon, label], i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="font-body text-white/65 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.3}>
              <div className="bg-brand-black border border-brand-gold/15 rounded-xl p-5">
                <h4 className="font-heading text-white font-bold text-base mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {SOCIAL_ICONS_CONTACT.map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold transition-all duration-300 hover:scale-110">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-brand-black border border-brand-gold/15 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-colors">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4">
                  <span className="font-body font-semibold text-white text-sm">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-brand-gold shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/30 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-5 pb-5 font-body text-sm text-white/55 leading-relaxed border-t border-brand-gold/8 pt-4">{faq.a}</p>
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