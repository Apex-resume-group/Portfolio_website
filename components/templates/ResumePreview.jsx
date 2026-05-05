import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   Hyper-realistic resume thumbnail previews — actual readable text at micro scale.
   Each template uses a completely distinct visual layout.
───────────────────────────────────────────────────────────────────────────── */

const S = ({ children, className = '' }) => (
  <span className={`font-body ${className}`} style={{ fontSize: '3.5px', lineHeight: '5.5px' }}>{children}</span>
);
const Hd = ({ children, className = '' }) => (
  <div className={`font-heading font-bold ${className}`} style={{ fontSize: '5px', lineHeight: '7px' }}>{children}</div>
);
const Ln = ({ children, className = '' }) => (
  <div className={`font-body ${className}`} style={{ fontSize: '3px', lineHeight: '4.8px' }}>{children}</div>
);
const Rule = ({ color = '#D4AF37', className = '' }) => (
  <div className={`w-full ${className}`} style={{ height: '0.6px', background: color }} />
);
const Bullet = ({ children, color = '#C41230' }) => (
  <div className="flex gap-0.5 items-start">
    <span style={{ fontSize: '3px', color, marginTop: '1px', lineHeight: '5px' }}>▪</span>
    <Ln className="text-gray-600 flex-1">{children}</Ln>
  </div>
);

/* ═══ 1 – Executive Commander ═══════════════════════════════════════════════ */
export function Preview1() {
  return (
    <div className="w-full h-full bg-white flex overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Black sidebar */}
      <div className="bg-[#1A1A1A] flex flex-col p-2 gap-1" style={{ width: '33%' }}>
        <Hd className="text-[#D4AF37]">KIRK SMITH</Hd>
        <Ln className="text-[#D4AF37]/80">VP, Product Strategy</Ln>
        <Rule color="#C41230" className="my-0.5" />
        <Ln className="text-white/60">Charlotte, NC 28202</Ln>
        <Ln className="text-white/60">kmsmith@email.com</Ln>
        <Ln className="text-white/60">540-558-8168</Ln>
        <Ln className="text-white/60">linkedin.com/in/ksmith</Ln>
        <Rule color="#D4AF37" className="my-0.5" />
        <Ln className="text-[#D4AF37] font-semibold">CORE SKILLS</Ln>
        {['AI/ML Product Strategy','Platform Roadmap','Board Alignment','Digital Health Scaling','P&L Management','Cross-Functional Lead'].map((s,i) => (
          <div key={i} className="flex items-center gap-0.5">
            <span style={{ fontSize: '3px', color: '#D4AF37' }}>★</span>
            <Ln className="text-white/65">{s}</Ln>
          </div>
        ))}
        <Rule color="#D4AF37" className="my-0.5" />
        <Ln className="text-[#D4AF37] font-semibold">EDUCATION</Ln>
        <Ln className="text-white/65">MBA — Emory University</Ln>
        <Ln className="text-white/65">M.S. Applied Intelligence</Ln>
        <Ln className="text-white/65">B.A. Foreign Affairs, UVA</Ln>
      </div>
      {/* Content */}
      <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        <Ln className="text-gray-500 italic">Strategic product executive with 18+ years leading AI-enabled platforms across MedTech, retail, and federal sectors. Managed $670M+ portfolios.</Ln>
        <Rule color="#C41230" className="my-0.5" />
        <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
        {[
          ['MEDTRONIC','Minneapolis, MN','Sr. Group Product Manager','Aug 2022 – Present',['Led AI-enabled remote monitoring platform, 1,200+ app downloads in Y1','Managed $670M device portfolio across 4 business units','Collaborated with FDA on pre-submission strategy']],
          ['TARGET CORPORATION','Minneapolis, MN','Sr. Manager, Enterprise Strategy','2020 – 2022',['Directed $140M digital transformation initiative','Aligned C-suite roadmap across 8 technology workstreams']],
          ['3M','St. Paul, MN','New Product Marketing Manager','2016 – 2020',['Launched 12 B2B product lines generating $28M incremental revenue']],
        ].map(([co, loc, title, dates, bullets], i) => (
          <div key={i} className="mt-0.5">
            <div className="flex justify-between items-baseline">
              <Ln className="text-gray-800 font-semibold">{co} · {loc}</Ln>
              <Ln className="text-gray-400">{dates}</Ln>
            </div>
            <Ln className="text-[#C41230]">{title}</Ln>
            {bullets.map((b, j) => <Bullet key={j}>{b}</Bullet>)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══ 2 – Modern Minimalist ═════════════════════════════════════════════════ */
export function Preview2() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="h-[2px] bg-[#C41230] w-full mb-0.5" />
      <Hd className="text-gray-800" style={{ fontSize: '6px' }}>AARON SNIPES</Hd>
      <Ln className="text-gray-500">Director, Technology & Data Attorney</Ln>
      <div className="flex gap-1.5 flex-wrap">
        {['Alpharetta, GA','aaronsnipes@email.com','678-296-3075','linkedin.com/in/asnipes'].map((c,i) => (
          <React.Fragment key={i}>
            <Ln className="text-gray-400">{c}</Ln>
            {i < 3 && <Ln className="text-gray-200">|</Ln>}
          </React.Fragment>
        ))}
      </div>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Summary</Ln>
      <Ln className="text-gray-500 italic">Corporate attorney with 14 years advising technology companies on SaaS agreements, AI licensing, data rights, and enterprise commercial contracts. JD Georgetown, Georgia Bar.</Ln>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Experience</Ln>
      {[
        ['Director, Technology & Data Attorney','Morgan Stanley','Atlanta, GA','Aug 2023 – Present',['Negotiated 200+ enterprise SaaS and AI data-licensing agreements','Reduced outside counsel spend 38% through process standardization']],
        ['Senior Commercial Counsel','NCR Corporation','Atlanta, GA','2019 – 2023',['Led legal strategy for $1.2B enterprise software division','Managed team of 6 attorneys across 3 time zones']],
        ['Commercial Counsel','Manhattan Associates','Atlanta, GA','2015 – 2019',['Drafted and reviewed supply chain platform agreements, $500M ARR']],
      ].map(([title, co, loc, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co} · {loc}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Education</Ln>
      <Ln className="text-gray-600">J.D. — Georgetown University Law Center</Ln>
      <Ln className="text-gray-600">B.A. Political Science — Emory University</Ln>
    </div>
  );
}

/* ═══ 3 – Creative Portfolio ════════════════════════════════════════════════ */
export function Preview3() {
  return (
    <div className="w-full h-full bg-white flex overflow-hidden">
      {/* Crimson sidebar */}
      <div className="bg-[#C41230] p-2 flex flex-col gap-1" style={{ width: '34%' }}>
        <div className="w-8 h-8 rounded-full bg-white/25 border-2 border-white/50 mx-auto flex items-center justify-center mb-0.5">
          <span style={{ fontSize: '8px', color: 'white', fontFamily: 'Georgia' }}>AB</span>
        </div>
        <Hd className="text-white text-center">ARDIS BLANCHARD</Hd>
        <Ln className="text-white/80 text-center">VP Strategic Partnerships</Ln>
        <Rule color="rgba(255,255,255,0.3)" className="my-0.5" />
        <Ln className="text-white/70">📍 Atlanta, GA 30316</Ln>
        <Ln className="text-white/70">✉ ardis.blanchard@email.com</Ln>
        <Ln className="text-white/70">📞 404-555-0127</Ln>
        <Rule color="rgba(255,255,255,0.3)" className="my-0.5" />
        <Ln className="text-white font-semibold">SKILLS</Ln>
        {['Donor Relations','Major Gift Strategy','Event Management','Brand Storytelling','Grant Writing','Alumni Relations','Stewardship','Campaign Planning'].map((s,i) => (
          <div key={i} className="flex items-center gap-0.5">
            <div className="rounded-full bg-white/30 shrink-0" style={{ width: 2, height: 2 }} />
            <Ln className="text-white/75">{s}</Ln>
          </div>
        ))}
        <Rule color="rgba(255,255,255,0.3)" className="my-0.5" />
        <Ln className="text-white font-semibold">MEMBERSHIPS</Ln>
        <Ln className="text-white/70">CASE — Council for Advancement</Ln>
        <Ln className="text-white/70">AFP — Association of Fundraising Profs</Ln>
        <Ln className="text-white/70">Delta Sigma Theta Sorority</Ln>
      </div>
      {/* Content */}
      <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        <Ln className="text-gray-500 italic">20-year career in nonprofit advancement, fundraising and development communications. Raised $47M+ across HBCU and national nonprofit sectors.</Ln>
        <div className="h-[1px] bg-[#C41230]/30 w-full" />
        <Ln className="text-[#C41230] font-semibold">EXPERIENCE</Ln>
        {[
          ['Assoc. VP, Strategic Partnerships','INROADS, Inc.','May 2024 – Present',['Manage 35 corporate partner accounts totaling $8.2M','Developed national sponsorship model adopted across 64 U.S. markets']],
          ['Sr. Director, Dev. Communications','Education Farm / Propel Center','2021 – 2024',['Led $12M campaign for HBCU digital lab infrastructure','Increased donor retention 31% via storytelling strategy']],
          ['Director, Parent Engagement','Morehouse College','2018 – 2021',['Launched Parent Leadership Council with 400+ active families']],
          ['Director, Stewardship & Donor Relations','Morehouse College','2016 – 2018',['Managed stewardship for 2,500+ major and planned-giving donors']],
        ].map(([title, co, dates, bullets], i) => (
          <div key={i} className="mt-0.5 border-l-[1.5px] border-[#D4AF37]/40 pl-1">
            <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-[#C41230]/80">{co}</Ln>
            {bullets.map((b,j) => <Bullet key={j} color="#C41230">{b}</Bullet>)}
          </div>
        ))}
        <Rule color="#e5e7eb" className="my-0.5" />
        <Ln className="text-gray-600"><span className="font-semibold">Education: </span>B.A. Communication Studies, Spelman College</Ln>
      </div>
    </div>
  );
}

/* ═══ 4 – Tech Innovator ════════════════════════════════════════════════════ */
export function Preview4() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      {/* Dark header */}
      <div className="bg-[#1A1A1A] p-2.5">
        <Hd className="text-white" style={{ fontSize: '6px' }}>JAY CHITTOORAN</Hd>
        <Ln className="text-[#D4AF37]">Sr. Director, Public Affairs & Chief of Staff</Ln>
        <div className="flex gap-2 mt-0.5 flex-wrap">
          {['Chevy Chase, MD','(314) 795-5524','jaychittooran@gmail.com','linkedin.com/in/jchittooran'].map((c,i) => (
            <Ln key={i} className="text-white/50">{c}</Ln>
          ))}
        </div>
      </div>
      {/* Skill tags */}
      <div className="bg-[#F8F4EE] px-2 py-1 flex flex-wrap gap-0.5">
        {['Trade Policy','Export Controls','CHIPS Act','Semiconductor Reg','Supply Chain Security','Gov Relations','Capitol Hill','Policy Advocacy'].map((s,i) => (
          <div key={i} className="bg-[#1A1A1A] rounded px-1 py-0.5"><Ln className="text-white/80">{s}</Ln></div>
        ))}
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        <Ln className="text-gray-500 italic">15-year career translating complex technology policy into strategic business outcomes. Former U.S. Senate senior advisor. Led Samsung's $8B CHIPS Act legislative strategy.</Ln>
        <Rule color="#C41230" className="my-0.5" />
        <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
        {[
          ['Sr. Director & Chief of Staff, Public Affairs','Samsung Electronics America','Chevy Chase, MD','2019 – 2025',['Architected Samsung\'s $8B CHIPS Act incentive strategy with Congress','Built coalitions with 40+ trade associations on semiconductor policy']],
          ['Manager, Global Public Policy','SEMI','Washington, DC','2018 – 2019',['Represented $500B global semiconductor industry before U.S. government']],
          ['Senior Policy Advisor','U.S. Senate — Commerce Committee','Washington, DC','2013 – 2018',['Staffed chair on technology, AI and telecom legislation']],
        ].map(([title, co, loc, dates, bullets], i) => (
          <div key={i} className="mt-0.5">
            <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-gray-500">{co} · {loc}</Ln>
            {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
          </div>
        ))}
        <Rule color="#e5e7eb" className="my-0.5" />
        <Ln className="text-gray-600 font-semibold">Education: </Ln>
        <Ln className="text-gray-600">B.A. Political Science, American University · M.P.P. Georgetown University</Ln>
      </div>
    </div>
  );
}

/* ═══ 5 – Healthcare Professional ══════════════════════════════════════════ */
export function Preview5() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <Hd className="text-gray-800" style={{ fontSize: '6px' }}>KIRK RIDGE, CPIM</Hd>
          <Ln className="text-[#C41230]">Director, Pharmaceutical Supply Chain</Ln>
          <Ln className="text-gray-400">Indianapolis, IN · kirk.ridge@email.com · (317) 555-0142</Ln>
        </div>
        <div className="border border-[#D4AF37] rounded px-1 py-0.5 text-center">
          <Ln className="text-[#D4AF37] font-semibold">CPIM</Ln>
          <Ln className="text-gray-400">Certified</Ln>
        </div>
      </div>
      <div className="bg-[#1A1A1A] rounded px-2 py-1">
        <div className="flex flex-wrap gap-2">
          {['28 Yrs Experience','$140M Portfolio','Pharma Supply Chain','Zero Stock-Out Record'].map((c,i) => (
            <Ln key={i} className="text-white/70">{c}</Ln>
          ))}
        </div>
      </div>
      <Ln className="text-gray-500 italic">Senior pharmaceutical supply chain executive with 28 years optimizing multi-site operations, demand planning, and cold-chain logistics for top-10 global pharma companies.</Ln>
      <Rule color="#D4AF37" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
      {[
        ['Director, Supply Chain Strategy','AbbVie','North Chicago, IL','2022 – Present',['Managed $140M pharmaceutical portfolio across 6 manufacturing sites','Implemented IBF demand planning, reducing waste 22%']],
        ['Sr. Director, Supply Chain','Pfizer','New York, NY','2018 – 2022',['Led COVID-19 vaccine cold-chain logistics for 18-state distribution network']],
        ['Supply Chain Manager','Baxter International','Deerfield, IL','2012 – 2018',['Reduced order-to-ship cycle from 14 days to 7 days']],
      ].map(([title, co, loc, dates, bullets], i) => (
        <div key={i} className="mt-0.5 pl-1 border-l-[1.5px] border-[#D4AF37]/40">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co} · {loc}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#D4AF37">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <div className="grid grid-cols-2 gap-1">
        <div><Ln className="text-gray-600 font-semibold">Systems</Ln>{['SAP Business Central','JD Edwards','Power BI'].map((s,i) => <Ln key={i} className="text-gray-500">{s}</Ln>)}</div>
        <div><Ln className="text-gray-600 font-semibold">Education</Ln><Ln className="text-gray-500">B.S. Supply Chain Mgmt</Ln><Ln className="text-gray-500">APICS CPIM · Lean Six Sigma</Ln></div>
      </div>
    </div>
  );
}

/* ═══ 6 – Academic Scholar ══════════════════════════════════════════════════ */
export function Preview6() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="text-center pb-0.5 border-b border-gray-300">
        <Hd className="text-gray-800 uppercase tracking-widest" style={{ fontSize: '5.5px' }}>LORI ANNE REYNOLDS, MBA</Hd>
        <Ln className="text-gray-500">Associate Executive Director · Association Management · Revenue Strategy</Ln>
        <Ln className="text-gray-400">Washington, DC · l.reynolds@email.com · (202) 555-0199 · linkedin.com/in/lreynolds</Ln>
      </div>
      {[
        ['EXECUTIVE SUMMARY', null, ['Senior association executive with 20 years building revenue strategies, global events, and membership programs for professional trade organizations. Consistent top-line growth across three associations.']],
        ['PROFESSIONAL EXPERIENCE', null, null],
        ['SPEAKING & PUBLICATIONS', null, ['ASAE Annual Conference 2023 — "Revenue Innovation in Association Management"','HBR Contribution 2022 — "Rethinking Membership Value Propositions"','IIF White Paper 2021 — "Sustainable Event Revenue Models"']],
        ['BOARD MEMBERSHIPS', null, ['Association Foundation Board of Trustees','ASAE Gold Circle Awards Selection Committee','Women in Association Leadership Advisory Board']],
        ['EDUCATION', null, ['M.B.A. — Fuqua School of Business, Duke University','B.A. Communications — University of Michigan, Ann Arbor']],
      ].map(([sec, _, items], si) => (
        <div key={si} className="mt-0.5">
          <div className="flex items-center gap-1">
            <Ln className="text-gray-700 font-semibold uppercase tracking-wide shrink-0">{sec}</Ln>
            <div className="flex-1 h-[0.5px] bg-gray-300" />
          </div>
          {si === 1 && (
            <>
              {[['Assoc. Executive Director','ASAE — Washington, DC','2020 – Present',['Grew non-dues revenue 41% to $18.2M via 3 new product lines','Managed 35-person team and $22M operating budget']],
                ['VP, Global Events & Education','IIF — Washington, DC','2015 – 2020',['Delivered 14 annual global conferences across 9 countries, 28,000+ attendees']],
                ['Director of Programs','AMS — Alexandria, VA','2008 – 2015',['Launched online learning platform with 12,000 enrolled members']],
              ].map(([title, co, dates, bullets], i) => (
                <div key={i} className="mt-0.5">
                  <div className="flex justify-between"><Ln className="text-gray-600 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
                  <Ln className="text-gray-500">{co}</Ln>
                  {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
                </div>
              ))}
            </>
          )}
          {items && items.map((item, i) => (
            <div key={i} className="flex items-start gap-0.5">
              <span style={{ color: '#C41230', fontSize: '3px', marginTop: '1px' }}>▪</span>
              <Ln className="text-gray-500">{item}</Ln>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ═══ 7 – Entry-Level Launcher ══════════════════════════════════════════════ */
export function Preview7() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="bg-[#D4AF37] rounded-lg px-2 py-1.5">
        <Hd className="text-white" style={{ fontSize: '6px' }}>AMBER GARREN</Hd>
        <Ln className="text-white/85">Healthcare Program Coordinator</Ln>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {['Fort Pierce, FL','(772) 370-5704','ambergarren1@gmail.com','LinkedIn: /ambergarren'].map((c,i) => (
          <Ln key={i} className="text-gray-400">{c}</Ln>
        ))}
      </div>
      <div className="border border-[#D4AF37]/30 rounded p-1.5 bg-[#FFFBF0]">
        <Ln className="text-gray-700 font-semibold">EDUCATION</Ln>
        <div className="flex justify-between mt-0.5"><Ln className="text-gray-600">B.S. Health Services Administration</Ln><Ln className="text-gray-400">May 2022</Ln></div>
        <Ln className="text-gray-500">Florida Atlantic University — GPA 3.7 / 4.0</Ln>
        <Ln className="text-gray-500">Dean's List 2020, 2021, 2022 · Delta Mu Delta Honor Society</Ln>
      </div>
      <Ln className="text-gray-500 italic">Motivated healthcare administrator with 4 years of experience in clinical coordination, regulatory compliance, and patient program management. Seeking progressive leadership role in hospital administration.</Ln>
      <Rule color="#D4AF37" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
      {[
        ['Program Coordinator','Cleveland Clinic Florida','Stuart, FL','Aug 2022 – Present',['Manage scheduling & compliance for 3,500-patient oncology program','Reduced administrative backlog 40% through EHR workflow redesign']],
        ['Administrative Coordinator','FPL Nuclear Division','Jensen Beach, FL','2020 – 2022',['Supported NRC regulatory compliance documentation for 200+ permits']],
      ].map(([title, co, loc, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co} · {loc}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#D4AF37">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">KEY SKILLS</Ln>
      <div className="flex flex-wrap gap-0.5">
        {['MS Office 365','Epic EHR','DocuSign','HIPAA Compliance','Scheduling','Project Management','Patient Communication'].map((s,i) => (
          <div key={i} className="bg-gray-100 rounded px-1 py-0.5"><Ln className="text-gray-600">{s}</Ln></div>
        ))}
      </div>
    </div>
  );
}

/* ═══ 8 – Career Changer Narrative ═════════════════════════════════════════ */
export function Preview8() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <Hd className="text-gray-800" style={{ fontSize: '6px' }}>JENA BLANCHARD</Hd>
      <Ln className="text-[#C41230]">Administrative Operations Professional → Project Coordinator</Ln>
      <Ln className="text-gray-400">Redmond, WA · jena.blanchard@email.com · (425) 555-0118</Ln>
      <div className="h-[1px] bg-gray-200 w-full" />
      <Ln className="text-gray-500 italic">Detail-driven operations professional with 6 years coordinating complex, multi-stakeholder projects for government and nonprofit entities. Pivoting from admin support to dedicated project management role, bringing proven process-improvement and vendor management expertise.</Ln>
      <Rule color="#D4AF37" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">CORE COMPETENCIES</Ln>
      <div className="grid grid-cols-3 gap-0.5">
        {['Executive Support','Event Planning','Account Management','Calendar & Travel','Process Improvement','Stakeholder Mgmt','Vendor Relations','Int\'l Coordination','Budget Tracking','MS Project','Asana / Notion','Compliance'].map((s,i) => (
          <div key={i} className="border border-[#D4AF37]/25 rounded p-0.5 bg-[#FFFBF0]"><Ln className="text-gray-600">{s}</Ln></div>
        ))}
      </div>
      <Rule color="#D4AF37" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
      {[
        ['Administrative Operations Coordinator','Accenture Federal Services — Redmond, WA','Mar 2020 – Present',['Managed 12 concurrent project timelines for $2M federal contracts','Coordinated 40+ cross-agency stakeholder meetings per quarter']],
        ['Member Services Coordinator','HOAMCO Trilogy — Phoenix, AZ','2019 – 2020',['Oversaw community governance for 850-home development']],
        ['Project Coordinator','Mt. Vernon Chamber of Commerce','2018 – 2019',['Delivered 18 business-community events, $340K combined budget']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5 flex gap-1">
          <div className="w-[1.5px] bg-[#D4AF37]/40 rounded-full shrink-0 self-stretch" />
          <div>
            <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-gray-500">{co}</Ln>
            {bullets.map((b,j) => <Bullet key={j} color="#C41230">{b}</Bullet>)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══ 9 – Sales Closer ══════════════════════════════════════════════════════ */
export function Preview9() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="flex justify-between items-start">
        <div>
          <Hd className="text-gray-800" style={{ fontSize: '6px' }}>KIRK GORMAN</Hd>
          <Ln className="text-[#C41230]">Senior Sales Director — Medical Aesthetics</Ln>
          <Ln className="text-gray-400">Atlanta, GA · kgorman@email.com · (404) 555-0183</Ln>
        </div>
        <div className="border-2 border-[#D4AF37] rounded p-1 text-center">
          <Ln className="text-[#D4AF37] font-bold">$8M+</Ln>
          <Ln className="text-gray-500">Revenue Generated</Ln>
          <Ln className="text-[#D4AF37] font-bold">Top 5%</Ln>
          <Ln className="text-gray-500">Nationally Ranked</Ln>
        </div>
      </div>
      <Rule color="#D4AF37" />
      <Ln className="text-gray-500 italic">Results-oriented aesthetics sales executive with 12 years of quota-crushing performance. Specializes in energy-based device sales to plastic surgeons, dermatologists, and medical spas.</Ln>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
      {[
        ['Senior Sales Director, East Region','Geneo Aesthetics','05/2025 – Present',['Ranked #1 of 24 reps nationally in Q3 2025','Closed $1.8M in new logo revenue in first 90 days']],
        ['Senior Sales Director, East Region','Crown Aesthetics (Solta/BD)','01/2021 – 05/2025',['127% avg quota attainment over 4-year tenure','Built territory from $0 to $3.2M in 18 months','Managed team of 8 field reps, $14M combined quota']],
        ['Territory Manager, Southeast','Allergan / AbbVie','2016 – 2021',['Consistently ranked top 5% nationally; 2018 President\'s Club','Grew botulinum toxin sales 44% YoY in core territory']],
        ['Sales Representative','Syneron-Candela Devices','2012 – 2016',['Rookie of the Year 2013 · 112% quota attainment avg']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-[#C41230]/80">{co}</Ln>
          {bullets.map((b,j) => (
            <div key={j} className="flex items-start gap-0.5">
              <span style={{ color: '#D4AF37', fontSize: '3px', marginTop: '1px' }}>▲</span>
              <Ln className="text-gray-600">{b}</Ln>
            </div>
          ))}
          {i < 3 && <div className="h-[0.5px] bg-[#D4AF37]/20 w-full mt-0.5" />}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-600">B.S. Biology — Georgia Southern University · CNPR Certification</Ln>
    </div>
  );
}

/* ═══ 10 – Federal Resume ════════════════════════════════════════════════════ */
export function Preview10() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="bg-gray-100 rounded p-1.5 mb-0.5">
        <Hd className="text-gray-800" style={{ fontSize: '6px' }}>ALEX BLANCHARD</Hd>
        <Ln className="text-gray-600">Greater Minneapolis–St. Paul, MN 55311 · (763) 567-1729 · alex.blanchard13@gmail.com</Ln>
      </div>
      <div className="grid grid-cols-3 gap-0.5 mb-0.5">
        {[['Citizenship','U.S. Citizen'],['Veterans Pref.','10-Pt / CPS'],['Clearance','Secret'],['GS Equiv.','GS-11'],['Avail Date','Immediate'],['Schedule','Full-Time']].map(([label,val],i) => (
          <div key={i} className="border border-gray-200 rounded p-0.5">
            <Ln className="text-gray-400">{label}</Ln>
            <Ln className="text-gray-700 font-semibold">{val}</Ln>
          </div>
        ))}
      </div>
      <Ln className="text-gray-700 font-semibold">WORK EXPERIENCE</Ln>
      {[
        ['Community Association Manager','Independent Portfolio · Greater Minneapolis, MN','GS-11 Equivalent','10/2023 – Present','40 hrs/wk',['Manage governance, maintenance, and financial operations for 4 HOA communities totaling 620 homes','Oversee $1.2M combined operating budgets; reduced delinquency rate from 18% to 4% in 12 months','Draft and enforce CC&R policies in compliance with Minnesota statutes Chapter 317A and 515B']],
        ['Non-Commissioned Officer (Staff Sergeant, E-6)','U.S. Army Reserve · Fort Snelling, MN','Military Leadership','12/2011 – Present','16 hrs/month',['Lead 40-person unit in operational readiness, training, and mission execution','Received Army Commendation Medal for logistics excellence during OCONUS deployment']],
        ['Retail Sales Manager','Comcast — Bridge Locations · Minneapolis, MN','GS-9 Equivalent','10/2021 – 10/2023','40 hrs/wk',['Managed 12 retail employees; exceeded quarterly sales targets by avg 118%']],
      ].map(([title, org, grade, dates, hrs, bullets], i) => (
        <div key={i} className="mt-0.5">
          <Ln className="text-gray-800 font-semibold">{title}</Ln>
          <Ln className="text-gray-600">{org}</Ln>
          <div className="flex gap-2">
            <Ln className="text-gray-400">{grade}</Ln>
            <Ln className="text-gray-400">|</Ln>
            <Ln className="text-gray-400">{dates}</Ln>
            <Ln className="text-gray-400">|</Ln>
            <Ln className="text-gray-400">{hrs}</Ln>
          </div>
          {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
          {i < 2 && <div className="h-[0.5px] bg-gray-200 w-full mt-0.5" />}
        </div>
      ))}
    </div>
  );
}

/* ═══ 11 – Non-Profit Leader ════════════════════════════════════════════════ */
export function Preview11() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="border-b-2 border-[#C41230] pb-1">
        <Hd className="text-gray-800" style={{ fontSize: '6px' }}>ARDIS M. BLANCHARD</Hd>
        <Ln className="text-[#C41230]">Associate Vice President, Strategic Partnerships</Ln>
        <Ln className="text-gray-400">Atlanta, GA · ardis.blanchard@email.com · 404-555-0127</Ln>
      </div>
      <div className="border-l-4 border-[#D4AF37] pl-2 py-0.5 bg-[#FFFBF0] rounded-r">
        <Ln className="text-gray-600 italic">Mission-centered development professional dedicated to expanding access, equity, and opportunity through strategic corporate partnerships, major gift fundraising, and community-driven donor engagement programs that create lasting institutional impact.</Ln>
      </div>
      <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
      {[
        ['Assoc. VP, Strategic Partnerships','INROADS, Inc.','May 2024 – Present',['Manage 35 national corporate partner accounts, $8.2M combined value','Launched Internship-to-Hire pipeline for 450 HBCU students annually']],
        ['Sr. Director, Development Communications','Education Farm / Propel Center','2021 – 2024',['Secured $12M capital campaign for HBCU technology labs','Produced donor impact reports increasing major gift renewals 28%']],
        ['Director, Parent Engagement','Morehouse College','2018 – 2021',['Founded Parent Leadership Council; grew to 400+ active members in Year 1']],
        ['Director, Stewardship & Donor Relations','Morehouse College','2016 – 2018',['Stewarded 2,500+ major and planned-giving donors; $47M total portfolio']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-[#C41230]/75">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#C41230">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#D4AF37" className="my-0.5" />
      <Ln className="text-gray-600 font-semibold">Education: </Ln><Ln className="text-gray-500">B.A. Communication Studies, Spelman College · AFP CFRE Candidate</Ln>
    </div>
  );
}

/* ═══ 12 – Banking Professional ════════════════════════════════════════════ */
export function Preview12() {
  return (
    <div className="w-full h-full bg-white flex overflow-hidden">
      <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        <Hd className="text-[#1A3A6B]" style={{ fontSize: '6px' }}>JUSTINA RICHARDS, CTP</Hd>
        <Ln className="text-gray-500">VP, Corporate Treasury Operations</Ln>
        <Ln className="text-gray-400">Atlanta, GA · jrichards@email.com · (678) 555-0144</Ln>
        <div className="h-[1px] bg-[#1A3A6B]/20 w-full" />
        <Ln className="text-gray-500 italic">25-year treasury professional managing global cash, FX operations, and banking platform implementations for Fortune 500 firms. CTP-certified with deep expertise in Kyriba, FIS, and multi-bank connectivity.</Ln>
        <Rule color="#1A3A6B" className="my-0.5" />
        <Ln className="text-[#1A3A6B] font-semibold uppercase tracking-wide">Experience</Ln>
        {[
          ['VP, Treasury Operations','Calibre Scientific','Atlanta, GA','2024 – Present',['Implemented Kyriba TMS consolidating 28 bank accounts across 9 entities']],
          ['Assistant Treasurer','Voya Financial','Atlanta, GA','2020 – 2023',['Managed $4.2B daily liquidity position; reduced idle cash 18%']],
          ['Treasury Manager','Invesco, Ltd.','Atlanta, GA','2008 – 2020',['Oversaw FX operations for $1.3T AUM investment management firm']],
          ['Treasury Analyst','Morgan Stanley','New York, NY','2006 – 2008',['Supported daily Fed funds and repo desk operations']],
          ['Sr. Banking Specialist','Wells Fargo','Charlotte, NC','2000 – 2006',['Managed $800M commercial deposit portfolio']],
        ].map(([title, co, loc, dates, bullets], i) => (
          <div key={i} className="mt-0.5">
            <div className="flex justify-between"><Ln className="text-[#1A3A6B] font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-gray-500">{co} · {loc}</Ln>
            {bullets.map((b,j) => <Bullet key={j} color="#1A3A6B">{b}</Bullet>)}
          </div>
        ))}
      </div>
      {/* Credentials sidebar */}
      <div className="bg-[#F0F4F8] border-l border-gray-200 p-1.5 flex flex-col gap-1" style={{ width: '30%' }}>
        <Ln className="text-[#D4AF37] font-semibold">CREDENTIALS</Ln>
        <Ln className="text-gray-600">CTP — Certified Treasury Professional</Ln>
        <Ln className="text-gray-600">SOX Controls Lead</Ln>
        <Ln className="text-gray-600">FBAR Reporting</Ln>
        <Ln className="text-gray-600">FX Hedging Programs</Ln>
        <Ln className="text-gray-600">SWIFT / ACH / Wire</Ln>
        <Rule color="#D4AF37" className="my-0.5" />
        <Ln className="text-[#D4AF37] font-semibold">SYSTEMS</Ln>
        {['Kyriba TMS','FIS Integrity','JPMorgan ACCESS','BofA CashPro','CitiDirect BE','SAP Treasury','Workday Finance'].map((t,i) => <Ln key={i} className="text-gray-600">{t}</Ln>)}
        <Rule color="#D4AF37" className="my-0.5" />
        <Ln className="text-[#D4AF37] font-semibold">EDUCATION</Ln>
        <Ln className="text-gray-600">B.S. Finance</Ln>
        <Ln className="text-gray-600">Georgia State Univ.</Ln>
        <Ln className="text-gray-600">Cum Laude · 2000</Ln>
      </div>
    </div>
  );
}

/* ═══ 13 – Educator / HR ════════════════════════════════════════════════════ */
export function Preview13() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <Hd className="text-gray-700" style={{ fontSize: '6px' }}>CATHERINE HAYES, MBA, PHR</Hd>
      <Ln className="text-gray-500">Senior HR Coordinator · Employee Relations & Talent Operations</Ln>
      <div className="flex flex-wrap gap-1">
        {['Lawrence, KS 66049','(913) 980-3252','chayes8715@email.com'].map((c,i) => <Ln key={i} className="text-gray-400">{c}</Ln>)}
      </div>
      <div className="flex flex-wrap gap-0.5">
        {['Onboarding & Orientation','Employee Relations','Benefits Admin','FMLA Management','EEOC Compliance','HRIS Systems','Talent Acquisition','Performance Mgmt','Payroll Processing','HR Policy Writing'].map((s,i) => (
          <div key={i} className="border border-gray-300 rounded-full px-1 py-0.5 bg-gray-50"><Ln className="text-gray-500">{s}</Ln></div>
        ))}
      </div>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-500 italic">HR professional with 10 years in human resources operations spanning security services, data centers, and manufacturing. Expertise in multi-state compliance, high-volume onboarding, and HRIS implementations.</Ln>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
      {[
        ['HR Coordinator / Office Manager','Wildcat Construction Co. · Topeka, KS','Jul 2025 – Feb 2026',['Managed full-cycle HR for 85-person construction firm','Implemented Paylocity HRIS, reducing payroll errors by 60%']],
        ['Sr. HR Coordinator','GardaWorld Security Services · Lenexa, KS','Nov 2020 – Jun 2025',['Onboarded 400+ security officers annually across 6 branch offices','Reduced turnover from 82% to 49% through structured retention program']],
        ['HR Coordinator','QTS Data Centers · Overland Park, KS','Jan 2020 – Oct 2020',['Managed benefits enrollment for 320 data center employees']],
        ['HR Generalist','Kalmar Global — via Aerotek · Ottawa, KS','Jun 2018 – Oct 2019',['Coordinated recruiting for 50+ skilled trades positions quarterly']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      {['MBA — Human Resource Management, American InterContinental University, 2018','B.S. Business Administration, AIU Online, 2016','PHR Certification — HRCI, 2021'].map((e,i) => <Ln key={i} className="text-gray-500">{e}</Ln>)}
    </div>
  );
}

/* ═══ 14 – Operations & PM Pro ══════════════════════════════════════════════ */
export function Preview14() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <Hd className="text-gray-800" style={{ fontSize: '6px' }}>AIMEE VALENTINE</Hd>
      <Ln className="text-[#C41230]">Executive Director, Patient Services & Operations — Pharmaceutical</Ln>
      <Ln className="text-gray-400">Indianapolis, IN · aivalentine@email.com · (317) 555-0161</Ln>
      <div className="border border-gray-200 rounded overflow-hidden mt-0.5">
        <div className="bg-gray-700 flex">
          {['Key Initiative','Scope / Budget','Outcome Delivered'].map((h,i) => (
            <Ln key={i} className="flex-1 text-white font-semibold px-1 py-0.5">{h}</Ln>
          ))}
        </div>
        {[['500K Patient Contact Center','$150M program','96% satisfaction · 42% cost ↓'],['U.S. Supply Model Redesign','9 Workstreams · 14 vendors','$30M procurement savings'],['Digital-First CX Transformation','Enterprise-wide','40% handling time improvement'],['CRM & Compliance Rebuild','Salesforce + SAP','100% FDA audit pass']].map((row,i) => (
          <div key={i} className={`flex border-t border-gray-100 ${i%2===0?'bg-white':'bg-gray-50'}`}>
            {row.map((cell,j) => <Ln key={j} className="flex-1 text-gray-600 px-1 py-0.5">{cell}</Ln>)}
          </div>
        ))}
      </div>
      <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
      {[
        ['Executive Director, Patient Services','Eli Lilly and Company · Indianapolis, IN','Feb 2019 – Feb 2026',['Led 500-person patient services division, $150M P&L responsibility','Directed 9-workstream U.S. supply model redesign, $30M annual savings','Managed digital transformation reaching 12M patients across 18 programs']],
        ['Exec Director, U.S. Supply Model Lead (Detail)','Eli Lilly and Company','May 2024 – Jul 2024',['Interim cross-functional lead for $30M procurement consolidation project']],
        ['Manager, CRM & Compliance Strategy','Lilly USA, LLC · Indianapolis, IN','Apr 2018 – Jan 2019',['Rebuilt Salesforce architecture supporting 1,200-rep field force']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#C41230">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-600">MBA — Indiana University Kelley School of Business · B.S. Industrial Management, Purdue</Ln>
    </div>
  );
}

/* ═══ 15 – Infographic Resume ════════════════════════════════════════════════ */
export function Preview15() {
  return (
    <div className="w-full h-full bg-[#F8F9FA] p-2 flex flex-col gap-1 overflow-hidden">
      <div className="bg-[#1A3A6B] rounded-lg p-2 flex justify-between items-center">
        <div>
          <Hd className="text-white" style={{ fontSize: '5.5px' }}>KIRK ADAMS</Hd>
          <Ln className="text-[#D4AF37]">Head of Strategic Operations, North America</Ln>
          <Ln className="text-white/60">Ceva Santé Animale · Chicago, IL</Ln>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/20 border-2 border-[#D4AF37]/60 flex items-center justify-center">
          <span style={{ fontSize: '8px', color: '#D4AF37', fontFamily: 'Georgia' }}>KA</span>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        {[['Commercial Leadership',95],['Strategic Planning',90],['P&L Management',88],['CRM & Forecasting',82],['Team Development',85]].map(([s,pct],i) => (
          <div key={i} className="flex items-center gap-1">
            <Ln className="text-gray-600 shrink-0" style={{ width: 38 }}>{s}</Ln>
            <div className="flex-1 rounded-full overflow-hidden" style={{ height: 3, background: '#E5E7EB' }}>
              <div className="h-full rounded-full bg-[#1A3A6B]" style={{ width: `${pct}%` }} />
            </div>
            <Ln className="text-gray-400" style={{ width: 10 }}>{pct}%</Ln>
          </div>
        ))}
      </div>
      <div className="relative ml-2 flex flex-col gap-0.5">
        <div className="absolute left-0 top-0 bottom-0" style={{ width: '1px', background: '#D4AF37', opacity: 0.5 }} />
        {[
          ['Head Strategic Ops NA','Ceva Santé Animale','2025 – Present'],
          ['VP, Global Commercial Excellence','Ceva Santé Animale','2024 – 2025'],
          ['VP Sales & Marketing','TARGAN Inc.','2023 – 2024'],
          ['Director, Business Development','ISK Animal Health','2021 – 2023'],
          ['Animal Health Sales Leader','Thermo Fisher Scientific','2011 – 2014'],
          ['District Sales Manager','Pfizer Animal Health','2007 – 2011'],
        ].map(([title, co, dates], i) => (
          <div key={i} className="ml-2 relative">
            <div className="absolute -left-[5px] top-[2px] w-[4px] h-[4px] rounded-full bg-[#D4AF37]" />
            <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-[#1A3A6B]/80">{co}</Ln>
          </div>
        ))}
      </div>
      <Rule color="#1A3A6B" className="my-0.5" />
      <Ln className="text-gray-600">MBA — Thunderbird School of Global Management · B.S. Animal Science, Cornell</Ln>
    </div>
  );
}

/* ═══ 16 – Military Transition ══════════════════════════════════════════════ */
export function Preview16() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="h-[2px] bg-[#4A5240] w-full rounded" />
      <div className="flex justify-between items-start">
        <div>
          <Hd className="text-gray-800" style={{ fontSize: '6px' }}>ALEX BLANCHARD</Hd>
          <Ln className="text-[#4A5240]">Operations Manager | Project Leader | Veterans Affairs</Ln>
          <Ln className="text-gray-400">Minneapolis, MN · (763) 567-1729 · alex.blanchard13@email.com</Ln>
        </div>
        <div className="border-2 border-[#4A5240]/40 rounded p-1">
          <Ln className="text-gray-600 font-semibold">U.S. Army</Ln>
          <Ln className="text-gray-500">Staff Sergeant</Ln>
          <Ln className="text-gray-500">Secret Clearance</Ln>
        </div>
      </div>
      <div className="bg-[#F0F4EE] border border-[#4A5240]/20 rounded p-1.5">
        <Ln className="text-[#4A5240] font-semibold">MILITARY → CIVILIAN TRANSLATION</Ln>
        <div className="grid grid-cols-2 gap-0.5 mt-0.5">
          {[['E-6 Staff Sergeant (NCO)','→ Operations Director / Manager'],['Lead 40-Person Infantry Unit','→ Cross-Functional Team Lead'],['Mission Planning & MDMP','→ Strategic Project Management'],['After Action Reviews (AAR)','→ Post-Project Process Review'],['Army Commendation Medal','→ Top Performer / Award Recipient'],['OCONUS Deployment Logistics','→ International Operations Mgmt']].map(([mil,civ],i) => (
            <div key={i} className="flex items-center gap-0.5">
              <Ln className="text-[#4A5240]/70">{mil}</Ln>
              <Ln className="text-gray-300">  </Ln>
              <Ln className="text-gray-600">{civ}</Ln>
            </div>
          ))}
        </div>
      </div>
      <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
      {[
        ['Community Association Manager','Independent Portfolio · Minneapolis, MN','10/2023 – Present',['Manage governance for 4 HOA communities, 620+ homes, $1.2M budgets','Achieved 97% homeowner satisfaction rating in 2024 annual survey']],
        ['NCO / Staff Sergeant E-6','U.S. Army Reserve · Fort Snelling, MN','12/2011 – Present',['Command 40-soldier unit; earned Army Commendation Medal for logistics excellence']],
        ['Retail Sales Manager','Comcast (Bridge Locations) · Minneapolis, MN','10/2021 – 10/2023',['Led 12-rep team to 118% of quarterly quota average over 8 quarters']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#4A5240">{b}</Bullet>)}
        </div>
      ))}
    </div>
  );
}

/* ═══ 17 – Remote Professional ══════════════════════════════════════════════ */
export function Preview17() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <Hd className="text-gray-800" style={{ fontSize: '6px' }}>JAY CHITTOORAN</Hd>
      <div className="flex gap-1 items-center flex-wrap">
        <Ln className="text-[#C41230]">Sr. Director, Public Affairs & Chief of Staff</Ln>
        <div className="flex items-center gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <Ln className="text-green-600">Open to Remote</Ln>
        </div>
      </div>
      <Ln className="text-gray-400">Chevy Chase, MD · (314) 795-5524 · jaychittooran@gmail.com</Ln>
      <div className="flex flex-wrap gap-0.5">
        {['Slack','Notion','Asana','Zoom','Google Workspace','Miro','GitHub','Jira','Microsoft Teams','Loom','Confluence','Airtable'].map((t,i) => (
          <div key={i} className="bg-blue-50 border border-blue-200 rounded px-1 py-0.5"><Ln className="text-blue-600">{t}</Ln></div>
        ))}
      </div>
      <Ln className="text-gray-400 italic">Timezone: ET · 5 yrs distributed team leadership · Async-first communicator</Ln>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-500 italic">Senior policy and operations executive with 15 years driving complex government affairs and corporate strategy programs. Proven leader of distributed, cross-timezone teams with $8B+ program accountability.</Ln>
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-700 font-semibold">EXPERIENCE</Ln>
      {[
        ['Sr. Director & CoS, Public Affairs','Samsung Electronics America — Remote','2019 – 2025',['Built and led 12-person distributed team across 4 U.S. time zones','Managed $8B CHIPS Act legislative strategy with 40+ coalition partners']],
        ['Manager, Global Public Policy','SEMI — Washington, DC (Hybrid)','2018 – 2019',['Represented $500B global semiconductor industry; 3-continent travel']],
        ['Senior Policy Advisor','U.S. Senate — Commerce Committee · Washington, DC','2013 – 2018',['Staffed Chair on AI, broadband, and spectrum policy legislation']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
        </div>
      ))}
    </div>
  );
}

/* ═══ 18 – Legal Professional ═══════════════════════════════════════════════ */
export function Preview18() {
  return (
    <div className="w-full h-full bg-white p-2.5 flex flex-col gap-1 overflow-hidden">
      <div className="text-center border-b-2 border-gray-700 pb-1">
        <Hd className="text-gray-800 uppercase tracking-widest" style={{ fontSize: '5.5px' }}>AARON D. SNIPES, J.D.</Hd>
        <Ln className="text-gray-500">Director, Technology & Data Attorney · Commercial Contracts</Ln>
        <div className="flex gap-1.5 justify-center flex-wrap mt-0.5">
          {['Alpharetta, GA','Aaronsnipes2@email.com','678-296-3075'].map((c,i) => (
            <React.Fragment key={i}><Ln className="text-gray-400">{c}</Ln>{i<2 && <Ln className="text-gray-200">|</Ln>}</React.Fragment>
          ))}
        </div>
      </div>
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Bar Admissions</Ln>
      <div className="flex gap-1 flex-wrap">
        {['State Bar of Georgia · 2011','U.S. District Court, N.D. Ga. · 2012','11th Circuit Court of Appeals · 2013'].map((b,i) => (
          <div key={i} className="border border-gray-300 rounded px-1 py-0.5"><Ln className="text-gray-600">{b}</Ln></div>
        ))}
      </div>
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Practice Areas</Ln>
      <div className="grid grid-cols-3 gap-0.5">
        {['Commercial Tech Agreements','SaaS & AI Licensing','Vendor Contracts','Cybersecurity Compliance','IP & Data Rights','Sponsorship Terms','Enterprise Agreements','Privacy Law (CCPA/GDPR)','Regulatory Compliance'].map((p,i) => (
          <div key={i} className="flex items-start gap-0.5">
            <span style={{ color: '#C41230', fontSize: '3px', marginTop: '1px' }}>■</span>
            <Ln className="text-gray-600">{p}</Ln>
          </div>
        ))}
      </div>
      <Ln className="text-gray-700 font-semibold uppercase tracking-wide">Experience</Ln>
      {[
        ['Director, Technology & Data Attorney','Morgan Stanley · Atlanta, GA','Aug 2023 – Present',['Negotiated 200+ enterprise SaaS, AI data-licensing, and cloud agreements','Trained 80+ non-legal staff on contract risk management']],
        ['Senior Commercial Counsel','NCR Corporation · Atlanta, GA','2019 – 2023',['Led legal function for $1.2B enterprise software division; 6-attorney team']],
        ['Commercial Counsel','Manhattan Associates · Atlanta, GA','2015 – 2019',['Reviewed and drafted supply-chain platform licenses at $500M ARR scale']],
      ].map(([title, co, dates, bullets], i) => (
        <div key={i} className="mt-0.5">
          <div className="flex justify-between"><Ln className="text-gray-700 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
          <Ln className="text-gray-500">{co}</Ln>
          {bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
        </div>
      ))}
      <Rule color="#e5e7eb" className="my-0.5" />
      <Ln className="text-gray-600">J.D. — Georgetown University Law Center, 2011 · B.A. Political Science, Emory University, 2008</Ln>
    </div>
  );
}

/* ═══ 19 – Startup / Founder ════════════════════════════════════════════════ */
export function Preview19() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="bg-[#1A1A1A] p-2.5 border-b-4 border-[#D4AF37]">
        <Hd className="text-white" style={{ fontSize: '6px' }}>JEFF D. ROLLINS</Hd>
        <Ln className="text-[#D4AF37]">CEO & Executive Advisor · JD Insights</Ln>
        <div className="flex gap-2 flex-wrap mt-0.5">
          {['Los Angeles, CA','jeff.rollins.d@gmail.com','404-435-9547','jdinsights.com'].map((c,i) => <Ln key={i} className="text-white/50">{c}</Ln>)}
        </div>
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1 overflow-hidden">
        <div className="bg-[#FFF8E7] border border-[#D4AF37]/40 rounded p-1.5">
          <Ln className="text-[#D4AF37] font-semibold">CAREER IMPACT METRICS</Ln>
          <div className="grid grid-cols-2 gap-0.5 mt-0.5">
            {['162% avg quota attainment over 14 yrs','3,500+ executives advised globally','37% of clientele are Fortune 100 firms','$3.7M new business developed as advisor','ExecDemand™ Methodology — proprietary IP','19,000+ executive network across industries'].map((m,i) => (
              <div key={i} className="flex items-start gap-0.5">
                <span style={{ color: '#D4AF37', fontSize: '3px', marginTop: '1px' }}>◆</span>
                <Ln className="text-gray-700">{m}</Ln>
              </div>
            ))}
          </div>
        </div>
        <Ln className="text-gray-700 font-semibold">VENTURES & EXPERIENCE</Ln>
        {[
          ['CEO & Executive Advisor','JD INSIGHTS','Los Angeles, CA','2009 – Present',['Founded executive career advisory firm; 3,500+ senior clients placed','Developed proprietary ExecDemand™ model adopted by 12 national firms','Managed 8-person team; $2.8M annual revenue']],
          ['VP, Business Partnerships','CAREERCURVE','Remote','2016 – 2017',['Grew B2B client base 88% in 14-month tenure']],
          ['VP, Sales & Relationship Management','AON Hewitt','Chicago, IL','2006 – 2009',['Led $180M enterprise HR consulting sales division']],
          ['Global Talent Acquisition Leader','The Coca-Cola Company','Atlanta, GA','2005 – 2006',['Managed global executive search for 9-country talent function']],
          ['SVP, Executive Development Programs','Bank of America','Charlotte, NC','1994 – 2005',['Built enterprise succession planning platform for 80,000-employee institution']],
        ].map(([title, co, loc, dates, bullets], i) => (
          <div key={i} className="mt-0.5">
            <div className="flex justify-between"><Ln className="text-[#C41230] font-semibold">{title} · {co}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
            <Ln className="text-gray-500">{loc}</Ln>
            {i === 0 && bullets.map((b,j) => <Bullet key={j} color="#D4AF37">{b}</Bullet>)}
            {i > 0 && bullets.map((b,j) => <Bullet key={j} color="#1A1A1A">{b}</Bullet>)}
          </div>
        ))}
        <Rule color="#e5e7eb" className="my-0.5" />
        <Ln className="text-gray-600">M.B.A. — Duke Fuqua · B.S. Business, Georgetown · ICF Executive Coach Certified</Ln>
      </div>
    </div>
  );
}

/* ═══ 20 – C-Suite Portfolio ════════════════════════════════════════════════ */
export function Preview20() {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden">
      <div className="bg-[#C41230] px-3 py-2">
        <Hd className="text-white" style={{ fontSize: '6.5px' }}>KIRK SMITH</Hd>
        <Ln className="text-white/80">Vice President, Product Strategy & Digital Innovation</Ln>
        <div className="flex gap-2 flex-wrap mt-0.5">
          {['Charlotte, NC','kmsmith1582@gmail.com','540-558-8168','linkedin.com/in/ksmith'].map((c,i) => <Ln key={i} className="text-white/60">{c}</Ln>)}
        </div>
      </div>
      <div className="flex" style={{ height: '3px' }}>
        <div className="flex-1 bg-[#D4AF37]" />
        <div className="bg-[#1A1A1A]" style={{ width: '8px' }} />
        <div className="flex-1 bg-[#D4AF37]" />
      </div>
      <div className="flex-1 flex gap-1.5 p-2 overflow-hidden">
        <div className="flex-1 flex flex-col gap-1">
          <Ln className="text-gray-500 italic">C-suite product and strategy executive with 18+ years leading AI-enabled platforms, managing $670M+ portfolios, and aligning cross-functional teams at Medtronic, Target, 3M, and Booz Allen. MBA Emory. Clearance eligible.</Ln>
          <Rule color="#C41230" className="my-0.5" />
          <Ln className="text-gray-700 font-semibold">PROFESSIONAL EXPERIENCE</Ln>
          {[
            ['Sr. Group Product Manager — AI Platforms','MEDTRONIC · Minneapolis, MN','Aug 2022 – Present',['Led AI-remote monitoring platform; 1,200+ app downloads Year 1','Managed $670M device portfolio across 4 business units']],
            ['Digital Health Strategy Lead','MEDTRONIC','Oct 2021 – Aug 2022',['Aligned digital health roadmap with $1.4M federally-funded AI research']],
            ['Sr. Manager, Enterprise Strategy','TARGET CORPORATION · Minneapolis, MN','2020 – 2021',['Directed $140M digital transformation, 8 technology workstreams']],
            ['New Product Marketing Manager','3M · St. Paul, MN','2016 – 2020',['Launched 12 B2B lines generating $28M incremental revenue']],
            ['Senior Consultant, Defense Technology','BOOZ ALLEN HAMILTON · McLean, VA','2009 – 2014',['Advised DoD on emerging technology acquisition strategy']],
          ].map(([title, co, dates, bullets], i) => (
            <div key={i} className="mt-0.5">
              <div className="flex justify-between"><Ln className="text-[#C41230]/80 font-semibold">{title}</Ln><Ln className="text-gray-400">{dates}</Ln></div>
              <Ln className="text-gray-600">{co}</Ln>
              {i < 2 && bullets.map((b,j) => <Bullet key={j} color="#C41230">{b}</Bullet>)}
            </div>
          ))}
        </div>
        {/* Dossier sidebar */}
        <div className="bg-[#F8F4EE] rounded p-1 flex flex-col gap-0.5" style={{ width: '32%' }}>
          <Ln className="text-[#D4AF37] font-semibold">BOARD & CIVIC</Ln>
          <Ln className="text-gray-600">Eagle Scout — BSA</Ln>
          <Ln className="text-gray-600">Lean In Circle Leader</Ln>
          <Ln className="text-gray-600">NFL Draft Analyst (Volunteer)</Ln>
          <Rule color="#D4AF37" className="my-0.5" />
          <Ln className="text-[#D4AF37] font-semibold">EDUCATION</Ln>
          <Ln className="text-gray-600">MBA — Emory University</Ln>
          <Ln className="text-gray-600">M.S. Applied Intelligence</Ln>
          <Ln className="text-gray-600">B.A. Foreign Affairs, UVA</Ln>
          <Rule color="#D4AF37" className="my-0.5" />
          <Ln className="text-[#D4AF37] font-semibold">IMPACT METRICS</Ln>
          <Ln className="text-gray-600">$670MM Portfolio Managed</Ln>
          <Ln className="text-gray-600">$1.4M Research Secured</Ln>
          <Ln className="text-gray-600">1,200 App Downloads Y1</Ln>
          <Ln className="text-gray-600">12 Product Lines Launched</Ln>
          <Rule color="#D4AF37" className="my-0.5" />
          <Ln className="text-[#D4AF37] font-semibold">CORE EXPERTISE</Ln>
          {['AI/ML Product Strategy','Platform Roadmap','Board-Level Alignment','Digital Health Scaling','Federal / DoD Markets','P&L Ownership'].map((s,i) => (
            <div key={i} className="flex items-center gap-0.5">
              <span style={{ color: '#C41230', fontSize: '2.5px' }}>▪</span>
              <Ln className="text-gray-600">{s}</Ln>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const PREVIEW_COMPONENTS = {
  1: Preview1, 2: Preview2, 3: Preview3, 4: Preview4, 5: Preview5,
  6: Preview6, 7: Preview7, 8: Preview8, 9: Preview9, 10: Preview10,
  11: Preview11, 12: Preview12, 13: Preview13, 14: Preview14, 15: Preview15,
  16: Preview16, 17: Preview17, 18: Preview18, 19: Preview19, 20: Preview20,
};