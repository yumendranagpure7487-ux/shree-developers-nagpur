import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Approved from './components/Approved';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div className="text-center">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gold/20 border-2 border-gold flex items-center justify-center"
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-gold font-heading font-extrabold text-3xl">SD</span>
              </motion.div>
              <motion.p
                className="text-gold-light font-heading font-bold text-xl tracking-wider"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                SHREE DEVELOPERS
              </motion.p>
              <motion.div
                className="mt-4 h-1 w-48 mx-auto bg-navy-light rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gold rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Facilities />
        <Gallery />
        <Approved />
        <Location />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}

export default App;
