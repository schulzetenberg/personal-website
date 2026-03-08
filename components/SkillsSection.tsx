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

const uniqueSkills = Array.from(new Set([...skillsTop, ...skillsBottom]));

export const SkillsSection = () => {
  const getShadowColor = (index: number) => {
    const colors = ['memphis-shadow-pink', 'memphis-shadow-cyan', 'memphis-shadow-yellow'];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="relative py-24 bg-[var(--color-black)] overflow-hidden pattern-dots">
      {/* Memphis Section Header */}
      <div className="container mx-auto px-4 mb-16 relative z-10 flex justify-center">
        <div className="bg-[var(--color-pink)] px-8 py-4 memphis-border memphis-shadow-cyan transform -rotate-2 inline-block">
          <h2
            className="text-4xl md:text-5xl font-bold heading-display text-[var(--color-white)] uppercase tracking-tighter"
            style={{ textShadow: '4px 4px 0px var(--color-black)' }}
          >
            Technical Arsenal{' '}
            <span className="text-[var(--color-yellow)]" style={{ textShadow: 'none' }}>
              ★
            </span>
          </h2>
        </div>
      </div>

      {/* Readable Skills Grid */}
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {uniqueSkills.map((skill, index) => (
            <div
              key={skill}
              className={`bg-white p-4 flex items-center justify-center memphis-border ${getShadowColor(index)} transform transition-transform hover:-translate-y-2 hover:translate-x-[-2px] duration-200 cursor-default`}
            >
              <span className="text-[var(--color-black)] font-bold text-lg font-sans text-center">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="container mx-auto px-4 py-8 bg-transparent">
        <p className="text-[var(--color-yellow)] font-sans font-bold uppercase tracking-widest text-xs text-right">
          END OF ARSENAL BLOCK
        </p>
      </div>
    </section>
  );
};
