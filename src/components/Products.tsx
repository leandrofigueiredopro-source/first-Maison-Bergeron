import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Le Flan Nature Signature',
    description: 'Une texture onctueuse, un goût de vanille intense sur une pâte feuilletée croustillante.',
    price: '4.50€',
    award: 'Élu 2ème meilleur flan de Paris 2025',
    image: 'input_file_2.png', // Using the stand dessert as proxy for flan if no real flan image
    category: 'Pâtisserie',
  },
  {
    id: 2,
    name: 'Baguette aux Céréales BIO',
    description: 'Farines biologiques, levain naturel et mélange de graines torréfiées.',
    price: '1.40€',
    award: 'Le Pain des Amis Signature',
    image: 'input_file_1.png',
    category: 'Boulangerie',
  },
  {
    id: 3,
    name: 'Mont-Blanc Maison',
    description: 'Pâte sablée, crème de marrons, crème fouettée légère et meringue.',
    price: '6.50€',
    award: 'Le plaisir du dimanche',
    image: 'input_file_4.png',
    category: 'Pâtisserie',
  },
  {
    id: 4,
    name: 'Brownies & Framboises',
    description: 'Chocolat noir intense, éclats de noisettes et coulis de framboises fraîches.',
    price: '5.20€',
    award: 'Gourmandise Absolue',
    image: 'input_file_3.png',
    category: 'Snacking',
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 mb-20">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold italic">Nos Signatures</span>
        </div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-7xl text-chocolate font-serif leading-[1.05]"
        >
          Les Incontournables <br /> 
          <span className="font-serif italic font-light text-gold-dark">de la Maison.</span>
        </motion.h2>
      </div>

      {/* Horizontal Product Showcase */}
      <div className="w-full overflow-x-auto whitespace-nowrap pb-12 px-12 no-scrollbar">
        <div className="flex gap-12 w-max">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-[80vw] lg:w-[450px] inline-block group cursor-default"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-sm shadow-minimal transition-all duration-700 group-hover:shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
                {product.award && product.name.includes('Flan') && (
                  <div className="absolute top-8 left-8 rotate-[-5deg]">
                    <span className="bg-gold text-white text-[10px] uppercase tracking-[0.2em] px-5 py-3 font-bold shadow-2xl">
                      {product.award}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="text-left whitespace-normal">
                <h3 className="text-3xl font-serif text-chocolate mb-4 italic">
                  {product.name}
                </h3>
                <p className="text-sm text-chocolate/60 font-light leading-relaxed max-w-sm">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-[1px] w-8 bg-gold"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Produit d'excellence</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
