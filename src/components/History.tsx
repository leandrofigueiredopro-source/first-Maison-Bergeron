import { motion } from 'motion/react';

export default function History() {
  return (
    <section id="histoire" className="relative w-full py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold italic">Un écrin classé du début du XXᵉ siècle</span>
          </div>
          <h2 className="text-4xl lg:text-7xl text-chocolate leading-[1.05] font-serif mb-10">
            L'Âme d'un <br /> 
            <span className="font-serif italic font-light text-gold-dark">Paris Éternel.</span>
          </h2>
          
          <div className="space-y-8 text-chocolate/80 text-lg leading-relaxed font-light">
            <p>
              Pousser la porte de la Maison Bergeron, c’est remonter le temps. Entre les plafonds peints, les grands miroirs aux moulures dorées et les boiseries sculptées, chaque détail raconte un siècle de gourmandise et de passion artisanale.
            </p>
            <p>
              Située au cœur du 7ème arrondissement, à deux pas de la Tour Eiffel, notre maison préserve avec dévotion les gestes d’antan. Laurent Bergeron et son équipe travaillent des farines BIO et un levain naturel pour offrir des pains au caractère affirmé et des viennoiseries pur beurre AOP.
            </p>
            <p className="font-serif text-2xl italic text-gold-dark pt-4">
              "Un Versailles de la viennoiserie, où le décor classé sublime chaque bouchée."
            </p>
          </div>
        </motion.div>

        {/* Visual Column */}
        <div className="relative order-1 lg:order-2 h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-minimal"
          >
            <img 
              src="input_file_0.png" 
              alt="Maison Bergeron Intérieur Classé"
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </motion.div>
          
          {/* Subtle decoration as per Landemaine style */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold/40 hidden lg:block" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold/40 hidden lg:block" />
        </div>
      </div>

      {/* Subsection: Terrace / Ambience */}
      <div className="max-w-7xl mx-auto px-12 mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[60vh] overflow-hidden rounded-sm"
        >
          <img 
            src="input_file_6.png" 
            alt="Maison Bergeron Terrasse"
            className="w-full h-full object-cover grayscale-[0.05]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-12 left-12 text-white">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold italic mb-2">Notre Terrasse</p>
            <p className="font-serif text-3xl italic">L'art de vivre rue Saint-Dominique</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
