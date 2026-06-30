import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="font-display font-bold text-[10rem] leading-none gradient-text opacity-30 select-none">
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-white mb-4 -mt-8">Page not found</h1>
        <p className="text-white/50 mb-8 text-sm max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm btn-glow"
        >
          ← Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}
