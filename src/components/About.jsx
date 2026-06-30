import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';

const INTERESTS = [
  'Machine Learning',
  'Full Stack Development',
  'Backend Development',
  'Problem Solving',
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-black/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.p variants={fadeIn('up', 0)} className="section-label mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeIn('up', 0.05)} className="section-heading text-white">
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile card + interests */}
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            {/* Avatar placeholder */}
            <motion.div variants={scaleIn(0)} className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-40 h-40  from-black via-white/20  ">
                  <div className="w-full h-full rounded-3xl bg-black/50 flex items-center justify-center">
                    <span className="font-display font-bold text-5xl gradient-text">KJ</span>
                  </div>
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Open to Internships
                </div>
              </div>
            </motion.div>

            {/* Quick info */}
            <motion.div variants={fadeIn('up', 0.1)} className="glass-card p-5 space-y-3">
              {[
                { icon: FaGraduationCap, label: 'Rajalakshmi Engineering College', sub: 'B.Tech AI & ML' },
                { icon: FaMapMarkerAlt, label: 'Tamil Nadu, India', sub: '' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/20 flex items-center justify-center text-white/70">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    {sub && <p className="text-xs text-white/40">{sub}</p>}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeIn('up', 0.15)}>
              <div className="flex items-center gap-2 mb-4">
                <FaHeart className="text-pink-400" size={14} />
                <span className="text-sm font-semibold text-white/70 tracking-wide">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/70 hover:border-blue-400/40 hover:text-blue-300 transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Summary + career objective */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeIn('left', 0)}>
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded" />
                Professional Summary
              </h3>
              <p className="text-white/60 leading-relaxed text-[0.95rem]">
                I am a passionate Artificial Intelligence and Machine Learning student at
                Rajalakshmi Engineering College. I enjoy solving real-world problems using AI,
                Machine Learning, and modern web technologies. I continuously
                learn new technologies and build projects that strengthen my technical and
                problem-solving skills.
              </p>
              <p className="text-white/60 leading-relaxed text-[0.95rem] mt-4">
                I am currently seeking internship opportunities where I can contribute, learn,
                and grow as a Web Development in dynamic, collaborative environments.
              </p>
            </motion.div>

            {/* Career Objective */}
            <motion.div variants={fadeIn('left', 0.1)}>
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <MdWork className="text-violet-400" size={18} />
                Career Objective
              </h3>
              <div className="glass-card gradient-border p-5">
                <p className="text-white/60 leading-relaxed text-[0.95rem] italic">
                  "To become a skilled AI and Web Developer  by developing scalable,
                  intelligent, and impactful solutions while continuously learning Artificial
                  Intelligence, Machine Learning, Full Stack Development, 
                </p>
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div variants={fadeIn('left', 0.2)}>
              <h3 className="font-display font-semibold text-lg text-white mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" size={18} />
                Education
              </h3>
              <div className="glass-card smooth-card p-5 hover:-translate-y-1 hover:border-blue-400/30 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400/40 transition-colors">
                    <FaGraduationCap className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">
                      B.Tech — Artificial Intelligence & Machine Learning
                    </p>
                    <p className="text-cyan-300 text-xs mb-1 font-medium">
                      Rajalakshmi Engineering College
                    </p>
                    <p className="text-white/40 text-xs">Tamil Nadu, India · 2024 – 2028</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
