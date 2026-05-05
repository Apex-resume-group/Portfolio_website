import React from 'react';
import { MessageSquare, PenTool, CheckCircle, Briefcase } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Share Your Career Story',
    description: 'It starts with a conversation — not a form. You tell us where you have been, where you want to go, and what is holding you back. We listen deeply to understand not just your job history, but the narrative arc of your career and the aspirations driving your next move. This is the foundation upon which everything else is built.'
  },
  {
    num: '02',
    icon: PenTool,
    title: 'We Craft Your Strategy',
    description: 'Our certified career experts design a personalized plan tailored to your target industry, seniority level, and timeline. We build your resume, optimize your LinkedIn presence, and prepare your talking points — all engineered to position you as the obvious choice. Every word, every format decision, and every keyword is intentional.'
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'You Review and Refine',
    description: 'You receive your polished career documents along with a detailed walkthrough of every strategic decision we made. You review everything, share feedback, and we refine until it feels authentically, powerfully you. This is a partnership, and your voice matters at every stage of the process.'
  },
  {
    num: '04',
    icon: Briefcase,
    title: 'You Walk Into Your Next Opportunity',
    description: 'With a recruiter-approved resume, a compelling LinkedIn profile, and a clear interview strategy, you step into your job search with confidence and clarity. Our clients report higher callback rates, stronger interview performances, and faster time-to-offer — because preparation changes everything.'
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Four guided steps from where you are to where you deserve to be."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="flex gap-6 group">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-brand-black flex items-center justify-center relative">
                    <span className="font-heading text-2xl font-bold text-brand-gold">{step.num}</span>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-crimson flex items-center justify-center">
                      <step.icon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-black mb-3 group-hover:text-brand-crimson transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-brand-black/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}