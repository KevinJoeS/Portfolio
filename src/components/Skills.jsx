import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
   SiJavascript , SiMysql,
  SiHtml5, SiCss, SiReact, SiTailwindcss,
  SiSpring, SiNodedotjs, SiExpress,
  SiMongodb,  
  SiGit, SiGithub, SiPostman, 
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { SKILLS } from '../utils/data';
import { fadeIn, staggerContainer } from '../utils/animations';
import { CgEnter } from 'react-icons/cg';

const ICON_MAP = {
   SiJavascript,  SiMysql, SiHtml5, SiCss, SiReact, SiTailwindcss,
  SiSpring, SiNodedotjs, SiExpress, SiMongodb,  SiGit, SiGithub, SiPostman,
   FaJava,
};

const CATEGORY_COLORS = {
  Programming: 'from-blue-500 to-violet-500',
  Frontend: 'from-cyan-500 to-blue-500',
  Backend: 'from-violet-500 to-pink-500',
  Database: 'from-emerald-500 to-cyan-500',
  'AI / ML': 'from-orange-500 to-pink-500',
  Tools: 'from-yellow-500 to-orange-500',
};

function SkillBar({ skill, inView, delay }) {
  const Icon = ICON_MAP[skill.icon] || null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.3, ease: 'easeOut' }}
      className="glass-card smooth-card p-4 hover:-translate-y-1 hover:border-blue-400/30 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {Icon && (
            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white transition-colors">
              <Icon size={15} />
            </div>
          )}
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-white/4">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.1, duration: 0.55, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-black via-white to-cyan-400"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(SKILLS)];

  const filteredSkills = activeCategory === 'All'
    ? Object.entries(SKILLS).flatMap(([cat, skills]) => skills.map(s => ({ ...s, cat })))
    : SKILLS[activeCategory]?.map(s => ({ ...s, cat: activeCategory })) || [];

  return (
    <section id="skills" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">Technical Arsenal</motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.1)} className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            A curated set of technologies I've worked with across AI/ML, web development, and software engineering.
          </motion.p>
        </motion.div>

        {/* Category filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-black to-white-600 text-white'
                  : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, i) => (
            <SkillBar
              key={`${skill.cat}-${skill.name}`}
              skill={skill}
              inView={inView}
              delay={0.025 * (i % 8)}
            />
          ))}
        </div>

        {/* Category overview cards */}
        {activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10"
          >
            {Object.entries(SKILLS).map(([cat, skills]) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="glass-card smooth-card p-4 text-center hover:-translate-y-1 hover:border-blue-400/30 group"
              >
                <div className={`text-2xl font-bold font-mono bg-white/80 ${CATEGORY_COLORS[cat]} bg-clip-text text-transparent mb-1` }>
                  {skills.length}
                </div>
                <div className="text-xs text-white">{cat}</div>
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
