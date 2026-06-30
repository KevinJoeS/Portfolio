import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { TIMELINE, STATS } from '../utils/data';
import { fadeIn, staggerContainer } from '../utils/animations';

function StatCard({ stat, inView }) {
  return (
    <div className="glass-card gradient-border smooth-card p-6 text-center hover:-translate-y-1">
      <div className="font-display font-bold text-4xl gradient-text mb-1">
        {inView ? (
          <CountUp end={stat.value} decimals={stat.decimals || 0} duration={2.5} />
        ) : '0'}
        {stat.suffix}
      </div>
      <div className="text-xs text-white/50 font-medium tracking-wide mt-1">{stat.label}</div>
    </div>
  );
}

export default function TimelineStats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="timeline" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        {/* Stats */}
<motion.div
  variants={staggerContainer(0.1)}
  initial="hidden"
  animate={inView ? "show" : "hidden"}
  className="text-center mb-20"
>
  <motion.p
    variants={fadeIn("up", 0)}
    className="section-label m-3 mb-3"
  >
    By the numbers
  </motion.p>

  <motion.h2
    variants={fadeIn("up", 0.05)}
    className="section-heading text-white mb-12"
  >
    At a <span className="gradient-text">Glance</span>
  </motion.h2>

  <div className="max-w-5xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * 0.04,
            duration: 0.3,
            ease: "easeOut",
          }}
          className="w-full max-w-sm"
        >
          <StatCard stat={stat} inView={inView} />
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

        {/* Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">Journey so far</p>
            <h2 className="section-heading text-white">
              My <span className="gradient-text">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/40 to-transparent hidden md:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -18 : 18 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                    className={`relative flex ${isLeft ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 border-2 border-[#050816] z-10" />

                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                      <div className="glass-card smooth-card p-5 hover:-translate-y-1 hover:border-blue-400/30 group">
                        <span className="inline-block text-xs font-mono text-cyan-300 mb-2 tracking-widest">{item.year}</span>
                        <h4 className="font-display font-semibold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors">
                          {item.event}
                        </h4>
                        <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
