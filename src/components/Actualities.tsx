import { motion } from 'motion/react';

export default function Actualities() {
  return (
    <section id="savoir-faire" className="py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Texture flour overlay effect simulation */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#BFA373 0.5px, transparent 0)', backgroundSize: '16px 16px' }} />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold italic">Excellence & Signatures</span>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl text-chocolate font-serif leading-[1.1]"
          >
            Le Geste et <br /> 
            <span className="font-serif italic font-light text-gold-dark">les Honneurs.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-700 bg-white shadow-minimal">
               <span className="text-4xl font-serif">❦</span>
            </div>
            <h4 className="font-serif text-2xl text-chocolate mb-6 italic">Un Héritage Vivant</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-6" />
            <p className="text-sm text-chocolate/60 leading-relaxed font-light max-w-xs">
              Laureats du Grand Prix de la Meilleure Pâtisserie 2026 (Top 5). Nous perpétuons l'âme du métier avec ferveur.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-700 bg-white shadow-minimal">
               <span className="text-4xl font-serif">♕</span>
            </div>
            <h4 className="font-serif text-2xl text-chocolate mb-6 italic">Le Flan de Paris</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-6" />
            <p className="text-sm text-chocolate/60 leading-relaxed font-light max-w-xs">
              Flan classé n°2 par le Guide des Flans 2025. Une texture onctueuse dans un écrin de pâte feuilletée.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-white transition-all duration-700 bg-white shadow-minimal">
               <span className="text-4xl font-serif">★</span>
            </div>
            <h4 className="font-serif text-2xl text-chocolate mb-6 italic">L'Avis de Paris</h4>
            <div className="w-8 h-[1px] bg-gold/30 mb-6" />
            <p className="text-sm text-chocolate/60 leading-relaxed font-light max-w-xs">
              Google 4.6★ avec plus de 1600 témoignages. Votre fidélité est notre plus beau Grand Prix.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
