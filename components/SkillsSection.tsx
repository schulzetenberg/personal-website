'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React-Query', 'Jest'],
    color: '#00D1FF', // Memphis Teal
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Redis', 'MongoDB', 'MySQL'],
    color: '#B04DF4', // Memphis Purple
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker', 'AWS', 'Git & GitHub', 'CI/CD', 'Cypress', 'Blockchain', 'Microservices'],
    color: '#FF4500', // Neon Orange
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative bg-[#F4F4F0] border-b-4 border-black py-16 overflow-hidden">
      {/* Abstract Background Elements (Memphis Style) */}
      <div className="absolute inset-0 bg-[#F4F4F0] opacity-90 pointer-events-none" />
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-black rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-black rotate-45 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Brutalist Section Header */}
        <div className="mb-12 border-b-4 border-black pb-4 inline-block">
          <h2 className="text-4xl md:text-5xl font-bold heading-display text-black uppercase tracking-tighter">
            Technical Arsenal <span className="text-[#FF4500]">{'///'}</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="neo-card bg-white p-8 relative overflow-hidden group"
            >
              {/* Decorative Corner Shape */}
              <div
                className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 border-4 border-black transition-transform duration-300 group-hover:scale-125"
                style={{ backgroundColor: category.color }}
              />

              <h3 className="text-2xl font-bold font-mono uppercase tracking-widest mb-6 relative z-10 border-b-4 border-black pb-2 inline-block">
                {category.title}
              </h3>

              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-lg font-medium text-black">
                    <span
                      className="w-4 h-4 border-2 border-black mr-4 inline-block shrink-0"
                      style={{ backgroundColor: category.color }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Decorative Footer */}
        <div className="mt-16 text-right">
          <p className="text-black font-mono font-bold tracking-widest text-xs">&lt;ArsenalBlock/&gt;</p>
        </div>
      </div>
    </section>
  );
};
