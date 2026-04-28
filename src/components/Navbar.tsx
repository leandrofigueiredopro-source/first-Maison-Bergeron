import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Signatures', href: '#produits' },
    { name: 'Histoire', href: '#histoire' },
    { name: 'Avis', href: '#avis' },
    { name: 'Nous trouver', href: '#adresses' },
    { name: 'Contact', href: '#adresses' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md py-4 border-gold/20 shadow-sm' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-3 items-center">
        {/* Left: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.slice(0, 3).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center py-4 lg:py-0">
          <a href="#accueil" className="flex flex-col items-center group">
            <span className="font-serif text-3xl lg:text-5xl font-bold text-chocolate uppercase tracking-[0.25em] transition-all duration-500 group-hover:text-gold-dark text-center leading-tight">
              Maison Bergeron
            </span>
            <div className="h-[1px] w-12 bg-gold mt-2 opacity-40 group-hover:w-20 group-hover:opacity-100 transition-all duration-500"></div>
          </a>
        </div>

        {/* Right: Desktop Links & Language */}
        <div className="hidden lg:flex items-center justify-end space-x-10">
          {navLinks.slice(3, 5).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-chocolate/30 border-l border-gold/20 pl-8 ml-4">
            <span className="text-chocolate cursor-pointer hover:text-gold transition-colors">FR</span>
            <span className="cursor-pointer hover:text-gold transition-colors">EN</span>
          </div>
        </div>

        {/* Mobile Menu Toggle (Visible only on mobile) */}
        <div className="lg:hidden absolute left-12 top-1/2 -translate-y-1/2">
          <button 
            className="text-chocolate"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          className="fixed inset-0 bg-cream z-[60] flex flex-col p-8"
        >
          <button 
            className="self-end text-chocolate mb-12"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-display italic hover:text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-gold text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest">
              Passer une commande
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
