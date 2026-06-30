import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MdVerified } from 'react-icons/md';
import { CERTIFICATIONS } from '../utils/data';
import { fadeIn, staggerContainer } from '../utils/animations';

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">Credentials</motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
             <span className="gradient-text">Certifications</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.3, ease: 'easeOut' }}
              className="glass-card gradient-border smooth-card p-6 hover:-translate-y-1 hover:border-violet-400/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-white text-sm leading-snug mb-1.5 group-hover:text-violet-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <MdVerified className="text-cyan-400" size={13} />
                    <span className="text-xs text-white/40 font-medium">{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Shimmer bar */}
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/30 tracking-wider">VERIFIED CREDENTIAL</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 font-medium">
                  Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <p className="text-center section-label mb-8">Achievements & Recognition</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Frontend Developer', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/30', text: 'text-cyan-300' },
              { label: 'Exploring Backend Development', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-400/30', text: 'text-orange-300' },
              { label: 'Machine Learning Enthusiast', color: 'from-violet-500/20 to-pink-500/20', border: 'border-violet-400/30', text: 'text-violet-300' },
              { label: 'Passionate Problem Solver', color: 'from-emerald-500/20 to-cyan-500/20', border: 'border-emerald-400/30', text: 'text-emerald-300' },
              { label: 'Team Collaborator', color: 'from-pink-500/20 to-violet-500/20', border: 'border-pink-400/30', text: 'text-pink-300' },
            ].map(({ label, color, border, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.45 + i * 0.04, duration: 0.25 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} border ${border} ${text} text-xs font-semibold`}
              >
                <span>✦</span>
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
