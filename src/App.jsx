import { Suspense, lazy, useState, useEffect } from 'react';

// Components loaded immediately
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import LoadingScreen from './components/LoadingScreen';

// Lazy-loaded sections for performance
const Hero          = lazy(() => import('./components/Hero'));
const About         = lazy(() => import('./components/About'));
const Skills        = lazy(() => import('./components/Skills'));
const Experience    = lazy(() => import('./components/Experience'));
const Projects      = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Timeline      = lazy(() => import('./components/Timeline'));
const Contact       = lazy(() => import('./components/Contact'));
const Footer        = lazy(() => import('./components/Footer'));

import { useTheme } from './hooks';

// Skeleton placeholder while lazy section loads
function SectionSkeleton() {
  return (
    <div className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="skeleton h-8 w-40 mx-auto rounded-lg mb-6" />
      <div className="skeleton h-12 w-72 mx-auto rounded-xl mb-12" />
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="skeleton h-48 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen done={!loading} />

      {/* Scroll progress */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggle} />

      {/* Main content */}
      <main>
        <Suspense fallback={<SectionSkeleton />}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Timeline />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
