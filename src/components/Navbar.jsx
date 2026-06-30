import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useActiveSection } from '../hooks';

const SECTIONS = ['home','about','skills','experience','projects','certifications','contact'];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTIONS);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const next = window.scrollY > 50;
      setScrolled(current => current === next ? current : next);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const NavLink = ({ id }) => (
    <button
      onClick={() => { scrollTo(id); setOpen(false); }}
      className={`capitalize text-sm font-medium transition-colors duration-200 relative group ${
        active === id ? 'text-blue-400' : 'text-white/70 hover:text-white'
      }`}
      aria-label={`Navigate to ${id} section`}
    >
      {id}
      {active === id && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400"
        />
      )}
    </button>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-black/50 '
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2 group"
              aria-label="Kevin Joe S – scroll to top"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center text-xs font-bold font-display text-white transition-transform group-hover:scale-105">
                KJ
              </div>
              <span className="hidden sm:block font-display font-semibold text-white text-sm tracking-wide">
                Kevin Joe
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {SECTIONS.map(id => <NavLink key={id} id={id} />)}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 bg-[#080d20] border-l border-white/10 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-display font-bold gradient-text text-lg">Kevin Joe S</span>
                <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
                  <HiX size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {SECTIONS.map((id, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                    onClick={() => { scrollTo(id); setOpen(false); }}
                    className={`capitalize text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      active === id
                        ? 'bg-black/2 text-white/4'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {id}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/10 text-white text-xs font-mono">
                © 2026 Kevin Joe S
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
