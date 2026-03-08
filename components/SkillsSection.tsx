'use client';

const skillsTop = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
];
const skillsBottom = [
  'Node.js',
  'Express',
  'Python',
  'PostgreSQL',
  'Docker',
  'Vercel',
  'Node.js',
  'Express',
  'Python',
  'PostgreSQL',
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-[#F4F4F0] border-b-4 border-black py-0">
      {/* Brutalist Section Header */}
      <div className="container mx-auto px-4 py-8 border-b-4 border-black">
        <h2 className="text-4xl md:text-5xl font-bold heading-display text-black uppercase tracking-tighter">
          Technical Arsenal <span className="text-[#FF4500]">{'///'}</span>
        </h2>
      </div>

      {/* Top Marquee (Scrolls Left) */}
      <div className="marquee-container bg-[#FF4500] text-white">
        <div className="marquee-content">
          {skillsTop.map((skill, index) => (
            <div key={`top-${index}`} className="marquee-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee (Scrolls Right) */}
      <div className="marquee-container bg-black text-white border-none">
        <div className="marquee-content reverse">
          {skillsBottom.map((skill, index) => (
            <div key={`bottom-${index}`} className="marquee-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="container mx-auto px-4 py-4 bg-[#F4F4F0]">
        <p className="text-black font-mono font-bold uppercase tracking-widest text-xs text-right">
          END OF ARSENAL BLOCK
        </p>
      </div>
    </section>
  );
};
