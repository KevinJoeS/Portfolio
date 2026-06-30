import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch } from 'react-icons/fa';
import { PROJECTS } from '../utils/data';
import { fadeIn, staggerContainer } from '../utils/animations';

const ALL_TECH = ['All', ...new Set(PROJECTS.flatMap(p => p.tech))];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() =>
    PROJECTS.filter(p => {
      const matchFilter = filter === 'All' || p.tech.includes(filter);
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    }),
    [filter, search]
  );

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">What I've built</motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Search + filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" size={13} />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-colors"
            />
          </div>
          {/* Tech filters */}
          <div className="flex flex-wrap gap-2">
            {ALL_TECH.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  filter === tech
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                    : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
            {filtered.length === 0 && (
              <div className="col-span-2 text-center text-white/40 py-16 text-sm">
                No projects match your search.
              </div>
            )}
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.32, ease: 'easeOut' }}
                className="glass-card smooth-card overflow-hidden hover:-translate-y-1 hover:border-blue-400/30 group"
              >
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
