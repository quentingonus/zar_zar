import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="fixed top-0 w-full px-6 py-5 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-serif text-xl md:text-2xl font-semibold tracking-tight">Zar Zar Aung.</div>
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider">
          <a href="#work" onClick={scrollTo('work')} className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#about" onClick={scrollTo('about')} className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" onClick={scrollTo('contact')} className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {(['work', 'about', 'contact'] as const).map((id) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={(e) => { scrollTo(id)(e); setMenuOpen(false); }}
                  className="text-white text-5xl font-serif capitalize hover:text-gray-400 transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
