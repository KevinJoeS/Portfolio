import { motion } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight,
} from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../utils/animations';

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/KevinJoeS', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/kevinjoes', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:joesofficial16@gmail.com', label: 'Email' },
];

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.7, 0.88, 0.7],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        
      />

      {/* Grid noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
      
        {/* Main heading */}
        <motion.h1
          variants={fadeIn('up', 0.1)}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-4"
        ><span className="text-white/70">
          Hi, I&apos;m{' '}</span>
          <span className="text-white/0.5 text-glow">Kevin Joe S</span>
        </motion.h1>

        {/* Typing headline */}
        <motion.div variants={fadeIn('up', 0.2)} className="mb-6 h-12 flex items-center justify-center">
          <span className="font-display text-xl sm:text-2xl md:text-3xl text-white/70 font-medium">
            AI & ML Student | Frontend Developer
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeIn('up', 0.3)}
          className="max-w-2xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed mb-10"
        >
          Building Intelligent Solutions with AI, Machine Learning & Modern Web Technologies.
          <br className="hidden sm:block" />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="Kevin_Joe_S.pdf"
            download="Kevin_Joe_S.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm transition-transform"
          >
            <FaDownload size={14} />
            Download Résumé
          </motion.a>
          <motion.button
            onClick={() => scrollTo('projects')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
          >
            View Projects
            <FaArrowRight size={12} />
          </motion.button>
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-cyan-400/30 text-cyan-300 font-semibold text-sm hover:bg-cyan-400/5 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeIn('up', 0.5)} className="flex items-center justify-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        
      </motion.div>
    </section>
  );
}
