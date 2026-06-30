/**
 * Reusable Framer Motion animation variants
 */

export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 18 : direction === 'down' ? -18 : 0,
    x: direction === 'left' ? 18 : direction === 'right' ? -18 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.18, ease: 'easeOut' } },
};

export const cardTilt = {
  whileHover: {
    y: -4,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};
