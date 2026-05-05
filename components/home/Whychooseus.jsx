import React from 'react';
import { Award, Target, UserCheck, Zap, HeartHandshake, Shield } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';

const pillars = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Our team holds CDI Certified Executive Resume Master credentials — the gold standard in career services. This means every resume we craft is backed by proven methodology and recognized professional authority, giving you an edge that generic resume mills simply cannot match.'
  },
  {
    icon: Target,
    title: 'ATS-Beating Results',
    description: 'We engineer every resume to pass Applicant Tracking Systems with confidence, not hope. Our proprietary keyword optimization process means your resume reaches human eyes instead of disappearing into a digital void — resulting in our 89% interview callback rate.'
  },
  {
    icon: UserCheck,
    title: 'Personalized Strategy',
    description: 'No two careers are alike, and neither are our strategies. Every client receives a custom career roadmap built around their unique experience, industry, and goals — because a one-size-fits-all template will never capture what makes you the right hire.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'We understand that opportunity waits for no one. Our streamlined process delivers professional-grade career documents within days, not weeks — so you can seize that perfect role the moment it appears without scrambling to update your materials.'
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Career Support',
    description: 'Your relationship with us does not end when the resume is delivered. Every client receives ongoing access to career resources, resume updates, and expert guidance whenever a new opportunity or career transition arises — because career growth is a lifelong journey.'
  },
  {
    icon: Shield,
    title: 'Confidential & Secure',
    description: 'Your career details, personal information, and job search activity are handled with absolute discretion. We use encrypted systems and strict privacy protocols to ensure your search remains private — whether you are exploring quietly or making a bold public move.'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Candidates Choose Us"
          subtitle="Six pillars of career excellence that set us apart from every other service."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-gold/10 hover:border-brand-gold/30 group h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-crimson/10 flex items-center justify-center mb-6 group-hover:bg-brand-crimson transition-colors duration-300">
                  <pillar.icon className="w-7 h-7 text-brand-crimson group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-black mb-3">{pillar.title}</h3>
                <p className="font-body text-sm text-brand-black/60 leading-relaxed">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}