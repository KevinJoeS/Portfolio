import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } }}
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Animated logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative w-20 h-20 mb-8"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500" />
            <div className="absolute inset-0.5 rounded-2xl bg-[#050816] flex items-center justify-center">
              <span className="font-display font-bold text-2xl gradient-text">KJ</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display font-semibold text-white/80 text-lg tracking-widest"
          >
            KEVIN JOE S
          </motion.p>

          {/* Progress bar */}
          <motion.div className="mt-8 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
