/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Actualities from './components/Actualities';
import Products from './components/Products';
import History from './components/History';
import Reviews from './components/Reviews';
import Locations, { Footer } from './components/Locations';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the "magical" intro
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-chocolate">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-display text-4xl lg:text-5xl text-chocolate uppercase tracking-tighter mb-2">
                Maison Bergeron
              </h1>
              <div className="w-12 h-[1px] bg-gold mb-4" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-light">Artisans Parisiens</p>
              
              <div className="mt-12 overflow-hidden w-48 h-[1px] bg-chocolate/10 relative">
                <motion.div 
                   animate={{ x: [-200, 200] }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                   className="absolute inset-0 bg-gold w-1/2"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      
      <main>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Products />
          <History />
          <Actualities />
          <Reviews />
          <Locations />
        </motion.div>
      </main>

      <Footer />

      {/* Decorative Ornaments */}
    </div>
  );
}
