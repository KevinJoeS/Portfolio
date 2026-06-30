import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdWork, MdCheckCircle } from 'react-icons/md';
import { fadeIn, staggerContainer } from '../utils/animations';

const RESPONSIBILITIES = [
  'Developed responsive websites adhering to modern web standards and cross-browser compatibility',
  'Improved UI/UX design for existing web applications, increasing usability and visual appeal',
  'Built reusable frontend components in React for consistent design systems',
  'Collaborated with team members in an Agile environment, participating in code reviews and sprints',
  'Worked with modern web technologies including HTML5, CSS3, JavaScript, and React',
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">Work History</motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent" />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="relative"
          >
            {/* Experience card */}
            <motion.div
              variants={fadeIn('right', 0)}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 items-start"
            >
              {/* Timeline dot */}
              <div className="absolute left-4.5 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 border-2 border-[#050816] z-10" />

              {/* Date badge (desktop left column) */}
              <div className="hidden md:flex justify-end pr-12 pt-4">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-300 border border-cyan-400/30 bg-cyan-400/5">
                  2024 – Present
                </span>
              </div>

              {/* Content */}
              <div className="glass-card gradient-border smooth-card p-7 hover:-translate-y-1 hover:border-blue-400/30 group">
                {/* Mobile date */}
                <span className="md:hidden inline-block mb-3 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 border border-cyan-400/30 bg-cyan-400/5">
                  2024 – Present
                </span>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400/40 transition-colors">
                    <MdWork className="text-blue-400" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      Web Development Intern
                    </h3>
                    <p className="text-violet-300 font-medium text-sm mt-0.5">
                      Altruisty Innovation Pvt Ltd
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {RESPONSIBILITIES.map((r, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.25 + i * 0.05, duration: 0.25 }}
                      className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                    >
                      <MdCheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                      {r}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'].map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
