import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    author: 'Gilles Pudlowski',
    text: "Magnifique boulangerie 1900 au décor classé, avec moulures, miroirs... trône comme une perle dans sa rue gourmande.",
    source: 'Critique Gastronomique',
  },
  {
    author: 'Client Google',
    text: "The shop itself felt magical, with the gold-plated lettering outside, beautiful interior, and rows of perfected croissants.",
    source: 'Google Rewards (4.6/5)',
  },
  {
    author: 'Blogueur Food',
    text: "Le meilleur flan de ma vie, une boulangerie qui rivalise avec Versailles par son élégance et son savoir-faire.",
    source: 'Instagram',
  },
];

export default function Reviews() {
  return (
    <section id="avis" className="py-32 bg-cream text-chocolate relative overflow-hidden border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold italic">Témoignages</span>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl text-chocolate font-serif italic font-light"
          >
            L'Avis de nos <span className="font-serif not-italic font-bold text-chocolate italic">Amis.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-12 bg-white shadow-minimal rounded-sm border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <div className="flex gap-1 text-gold mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-xl font-serif italic text-chocolate leading-relaxed mb-10">
                "{review.text}"
              </p>
              <div className="flex flex-col border-l border-gold pl-6">
                <span className="font-serif text-lg text-chocolate italic">{review.author}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-chocolate/40 mt-1">{review.source}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="flex items-center gap-6 mb-10 opacity-60">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_"G"_Logo.svg/1024px-Google_"G"_Logo.svg.png' className="w-6 h-6 grayscale" alt="Google" />
                <span className="text-chocolate text-[10px] uppercase tracking-[0.3em] font-bold">Note moyenne 4.6/5 • 1600+ Avis</span>
            </div>
            <a href="https://www.google.com/search?num=10&sa=X&sca_esv=2d64b6c94239ce1b&rlz=1C1ONGR_frFR1071FR1071&hl=fr-FR&sxsrf=ANbL-n5HHpqkdNXz8Rqn5cI6rHV4mnrZ7w:1777414596854&q=Maison+Bergeron+Avis&ved=2ahUKEwik3KetyZGUAxWodqQEHbHHCD0QuzF6BAgIEAQ&biw=2560&bih=1305&dpr=1" target="_blank" rel="noopener noreferrer" className="border border-chocolate px-12 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-chocolate hover:text-white transition-all shadow-sm">
                Laisser un témoignage
            </a>
        </div>
      </div>
    </section>
  );
}
