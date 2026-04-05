'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React-Query', 'Jest'],
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Redis', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker', 'AWS', 'Git & GitHub', 'CI/CD', 'Cypress', 'Blockchain', 'Microservices'],
  },
];

export const SkillsSection = () => {
  const backgroundCode = [
    'const skills = [',
    '  {',
    '    category: "Frontend",',
    '    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]',
    '  },',
    '  {',
    '    category: "Backend & Data",',
    '    technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis"]',
    '  },',
    '  {',
    '    category: "Tools & DevOps",',
    '    technologies: ["Docker", "AWS", "Git & GitHub", "CI/CD"]',
    '  }',
    ']',
    'export const SkillsSection = () => {',
    '  return (',
    '    <section id="skills" className="relative bg-white border-b-4 border-black py-16 md:py-18 overflow-hidden">',
    '      {/* Section content here */}',
    '    </section>',
    '  );',
    '};',
  ];

  return (
    <section id="skills" className="relative bg-white border-b-4 border-black py-16 md:py-18 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_15%,rgba(30, 58, 138, 0.08),transparent_26%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      >
        <div className="absolute -top-4 -left-24 w-[160%] rotate-[-2deg] text-[11px] leading-6 font-mono text-black/90">
          {Array.from({ length: 18 }).map((_, rowIdx) => (
            <p key={rowIdx} className="whitespace-nowrap">
              {backgroundCode[rowIdx % backgroundCode.length]} | {backgroundCode[(rowIdx + 2) % backgroundCode.length]}
            </p>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="mb-10 md:mb-12">
          <h2 className="section-title-wrap text-4xl md:text-[3.35rem] font-bold heading-display text-black uppercase tracking-tighter">
            Technical Skills <span className="text-[var(--color-accent)]">{'///'}</span>
          </h2>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group neo-card relative bg-[#F4F4F0] px-5 py-6 md:px-6 md:py-7"
            >
              <h3 className="text-[2rem] leading-none font-bold font-mono uppercase tracking-wide mb-5 relative z-10">
                {category.title}
              </h3>
              <ul className="space-y-2.5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-lg font-medium text-black">
                    <span className="mr-3 inline-block h-1.5 w-1.5 shrink-0 bg-[var(--color-accent)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
