import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const locations = [
  {
    address: '112 Rue Saint-Dominique',
    district: '75007 Paris',
    phone: '+33 1 45 51 31 01',
    hours: '7h00 — 20h15',
    days: 'Tous les jours',
    tag: 'Maison Mère',
  },
  {
    address: '149 Rue Montmartre',
    district: '75002 Paris',
    phone: '+33 1 42 36 29 00',
    hours: '7h00 — 20h15',
    days: '7j / 7',
    tag: 'Boutique Montmartre',
  },
];

export default function Locations() {
  return (
    <section id="adresses" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold italic">Nous trouver</span>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-7xl text-chocolate font-serif leading-[1.05] mb-16"
        >
          Proximité & <br /> 
          <span className="font-serif italic font-light text-gold-dark">Savoir-vivre.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-[600px] rounded-sm overflow-hidden border border-gold/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3021002762243884!3d48.8583700998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f913d7e7e59%3A0xe4a199f361bc4f64!2s112%20Rue%20Saint-Dominique%2C%2075007%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1714342578912!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Maison Bergeron Boutique Saint-Dominique"
              className="w-full h-full grayscale-[0.2] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-12"
          >
            {locations.map((loc, idx) => (
              <div key={idx} className="space-y-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold italic">{loc.tag}</div>
                <h3 className="text-3xl font-serif italic text-chocolate">{loc.address}, {loc.district}</h3>
                <div className="space-y-4 text-chocolate/70">
                  <div className="flex items-center gap-4">
                    <Clock size={16} className="text-gold" />
                    <span className="text-xs uppercase tracking-[0.1em] font-medium">{loc.days} • {loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={16} className="text-gold" />
                    <a href={`tel:${loc.phone}`} className="text-xs uppercase tracking-[0.1em] font-medium hover:text-gold transition-colors">{loc.phone}</a>
                  </div>
                </div>
                {idx === 0 && (
                  <button className="border border-chocolate px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-chocolate hover:text-white transition-all">
                    Appeler la boutique
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream border-t border-gold/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl mb-8 uppercase tracking-[0.1em] text-chocolate italic">Maison Bergeron</h2>
            <div className="max-w-md space-y-6">
              <p className="text-sm text-chocolate/60 leading-relaxed font-light">
                Artisans boulangers-pâtissiers depuis 1900. Un héritage parisien au service du goût et de l'authenticité.
              </p>
              <div className="flex items-center space-x-6">
                <a href="https://www.instagram.com/maisonbergeron.paris/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center text-xs opacity-70 hover:bg-gold hover:text-white transition-all cursor-pointer">IG</a>
                <a href="https://www.facebook.com/boulangeriemaisonbergeron/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center text-xs opacity-70 hover:bg-gold hover:text-white transition-all cursor-pointer">FB</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-8">Explorer</h4>
            <ul className="space-y-4 text-xs uppercase tracking-[0.15em] text-chocolate/70 font-medium">
              <li><a href="#accueil" className="hover:text-gold transition-colors">La Maison</a></li>
              <li><a href="#produits" className="hover:text-gold transition-colors">Les Signatures</a></li>
              <li><a href="#histoire" className="hover:text-gold transition-colors">Héritage Classé</a></li>
              <li><a href="#avis" className="hover:text-gold transition-colors">Témoignages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-8">Contact</h4>
            <ul className="space-y-4 text-xs tracking-[0.1em] text-chocolate font-medium">
              <li>112 Rue Saint-Dominique</li>
              <li>75007 Paris</li>
              <li>+33 1 45 51 31 01</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-chocolate/30">
            © 2026 Maison Bergeron. Site Vitrine • Décor Classé
          </p>
          <div className="flex items-center space-x-6">
             <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-chocolate">4.6</span>
                <div className="flex text-gold space-x-1 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span className="opacity-30 text-chocolate">★</span>
                </div>
                <span className="text-[9px] uppercase opacity-50 tracking-widest text-chocolate font-bold">1600+ Avis Google</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
