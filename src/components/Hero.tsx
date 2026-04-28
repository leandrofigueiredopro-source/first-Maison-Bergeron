import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Fixed Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("input_file_8.png")',
        }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white text-xs lg:text-sm uppercase tracking-[0.4em] font-medium mb-6 drop-shadow-md">
            L'excellence boulangère depuis 1900
          </span>
          <h1 className="text-white text-5xl lg:text-8xl font-serif font-bold tracking-tight mb-8">
            Maison Bergeron
          </h1>
          <p className="text-cream/90 text-lg lg:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            "Un décor classé, un savoir-faire récompensé. Flan élu 2ème meilleur de Paris 2025."
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white cursor-pointer"
        onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
