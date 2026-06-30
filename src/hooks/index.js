import { useState, useEffect, useCallback } from 'react';

/**
 * useScrollProgress — returns scroll percentage 0–100
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
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

  return progress;
}

/**
 * useTheme — dark/light toggle with localStorage persistence
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('kj-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('kj-theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggle };
}

/**
 * useActiveSection — tracks which section is currently in viewport
 */
export function useActiveSection(sections) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const anchorY = window.innerHeight * 0.35;
      const visibleSection = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= anchorY && rect.bottom > anchorY;
      });

      if (visibleSection) {
        setActive(current => current === visibleSection ? current : visibleSection);
      }
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [sections]);

  return active;
}

/**
 * useMousePosition — tracks mouse x/y
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let frame = 0;
    let next = { x: -100, y: -100 };
    const update = () => {
      frame = 0;
      setPos(next);
    };
    const move = e => {
      next = { x: e.clientX, y: e.clientY };
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('mousemove', move);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return pos;
}
