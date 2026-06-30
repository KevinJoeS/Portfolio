import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/KevinJoeS', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/kevinjoes', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:kevinjoe@email.com', label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-white">Kevin Joe S</p>
            <p className="text-white/30 text-xs mt-1">
              Built with React + Tailwind CSS + Framer Motion
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/40 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/25 text-xs text-center md:text-right">
            © 2026 Kevin Joe S. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white transition-transform z-40"
        aria-label="Back to top"
      >
        <FaArrowUp size={14} />
      </motion.button>
    </footer>
  );
}
