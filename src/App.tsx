import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Facebook, X, MapPin, Phone, Mail, Menu } from 'lucide-react';

import photo1 from '../showcases/christmas.jpg';
import photo2 from '../showcases/tazaungdai.jpg';
import photo4 from '../showcases/kasone.jpg';
import photo5 from '../showcases/annual_trip.jpg';
import photo6 from '../showcases/annual_trip2.jpg';
import photo7 from '../showcases/event.jpg';
import photo8 from '../showcases/worker.jpg';
import photo9 from '../showcases/award1.jpg';
import photo10 from '../showcases/certificate1.jpg';
import photo11 from '../showcases/certificate2.jpg';
import photo12 from '../showcases/happy_new_year.jpg';
import photo13 from '../showcases/martyrday.jpg';
import photo14 from '../showcases/award2.jpg';
import photo15 from '../showcases/certificate3.jpg';
import photo16 from '../showcases/christmas2.jpg';
import photo17 from '../showcases/pyi_daung_su_day.jpg';
import photo18 from '../showcases/tazaungmon_day.jpg';
import photo19 from '../showcases/thadingyut_day.jpg';
import portrait from '../showcases/zar_zar_aung.jpg';
import professional from '../showcases/professonal.png';

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {/* Shimmer skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'
            }`}
        />
      )}
    </div>
  );
}

const workGroups = [
  {
    label: 'Social Media',
    description: 'Festive & occasion posts',
    items: [
      { id: 12, title: 'Happy New Year', image: photo12 },
      { id: 1, title: 'Merry Christmas', image: photo1 },
      { id: 16, title: 'Christmas II', image: photo16 },
      { id: 13, title: "Martyr's Day", image: photo13 },
      { id: 17, title: 'Pyi Daung Su Day', image: photo17 },
      { id: 8, title: 'Peasants Day', image: photo8 },
      { id: 4, title: 'Kason Festival', image: photo4 },
      { id: 19, title: 'Thadingyut Day', image: photo19 },
      { id: 18, title: 'Tazaungmon Day', image: photo18 },
      { id: 2, title: 'Tazaungdaing Festival', image: photo2 },
    ],
  },
  {
    label: 'Event Posters',
    description: 'Corporate & company events',
    items: [
      { id: 9, title: 'Award Ceremony I', image: photo9 },
      { id: 14, title: 'Award Ceremony II', image: photo14 },
      { id: 11, title: 'Certificate I', image: photo11 },
      { id: 10, title: 'Certificate II', image: photo10 },
      { id: 15, title: 'Certificate III', image: photo15 },
      { id: 5, title: 'Annual Trip I', image: photo5 },
      { id: 6, title: 'Annual Trip II', image: photo6 },
      { id: 7, title: 'Annual Party', image: photo7 },
    ],
  },
];

export default function App() {
  const [selectedWork, setSelectedWork] = useState<{ id: number; title: string; image: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedWork]);

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-5 flex justify-between items-center z-40 mix-blend-difference text-white">
        <div className="font-serif text-xl md:text-2xl font-semibold tracking-tight">Zar Zar Aung.</div>
        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wider">
          <a href="#work" onClick={scrollTo('work')} className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#about" onClick={scrollTo('about')} className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" onClick={scrollTo('contact')} className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
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

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          {/* Text side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium mb-6"
            >
              Graphic Designer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-6 md:mb-8"
            >
              Zar Zar{' '}
              <span className="italic text-gray-400">Aung</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-2xl text-gray-600 max-w-lg font-light leading-relaxed mb-8 md:mb-10"
            >
              Detail-oriented Graphic Designer combining technical precision with a passion for creative storytelling. Based in Yangon, Myanmar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 md:gap-8"
            >
              <a
                href="#work"
                onClick={scrollTo('work')}
                className="group inline-flex items-center gap-3 bg-black text-white px-5 md:px-8 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
              >
                View Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" onClick={scrollTo('contact')} className="text-sm uppercase tracking-widest font-medium text-gray-500 hover:text-black transition-colors">
                Contact
              </a>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-first lg:order-last"
          >
            {/* Decorative background block - desktop only, clipped to photo bounds */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 -right-4 w-full h-full bg-gray-100 -z-10 hidden lg:block"
            />
            <div className="aspect-[4/5] overflow-hidden bg-gray-200 w-52 mx-auto lg:w-full rounded-lg lg:rounded-none">
              <motion.img
                src={professional}
                alt="Zar Zar Aung professional"
                className="w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            {/* Floating badge - desktop only */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 bg-black text-white px-6 py-4 hidden lg:block"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Based in</p>
              <p className="text-sm font-medium">Yangon, Myanmar</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="work" className="px-6 md:px-12 lg:px-24 py-24 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-5xl font-serif">Selected Works</h2>
          <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">2024—Present</span>
        </div>

        <div className="space-y-20">
          {workGroups.map((group, groupIndex) => (
            <div key={group.label}>
              {/* Group header */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-baseline gap-4 mb-6 pb-3 border-b border-gray-200"
              >
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg md:text-xl font-serif text-gray-800">{group.label}</h3>
                <span className="text-xs text-gray-400 font-light hidden md:inline">{group.description}</span>
                <span className="ml-auto text-xs text-gray-400 tabular-nums">{group.items.length} works</span>
              </motion.div>

              {/* Group grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {group.items.map((work, index) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    onClick={() => setSelectedWork(work)}
                    className="group relative overflow-hidden bg-gray-100 cursor-pointer aspect-video"
                  >
                    <LazyImage src={work.image} alt={work.title} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-white/80 text-xs uppercase tracking-widest font-medium mb-1 block">
                        {group.label}
                      </span>
                      <h3 className="text-white text-base md:text-xl font-serif">{work.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedWork.image}
              alt={selectedWork.title}
              className="max-w-full max-h-full object-contain shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white"
            >
              <span className="text-white/70 text-sm uppercase tracking-widest font-medium mb-2 block">
                {workGroups.find(g => g.items.some(i => i.id === selectedWork.id))?.label}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif">{selectedWork.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 lg:px-24 py-16 md:py-32 bg-black text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif mb-6 md:mb-8 leading-tight">
              Design is not just what it looks like, <span className="italic text-gray-400">it's how it works.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
              With a unique background in data analysis and BPO, I specialize in crafting high-quality digital and print visual solutions. Armed with expertise in the Adobe Creative Suite and a drive for continuous learning, I translate innovative design trends into impactful assets.
            </p>

            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8 md:pt-12">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Expertise</h4>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li>Adobe Photoshop & Illustrator</li>
                  <li>Premiere Pro & After Effects</li>
                  <li>Capture One & Capcut</li>
                  <li>HTML, CSS, JavaScript, jQuery</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Experience</h4>
                <ul className="space-y-2 text-gray-300 font-light">
                  <li>Graphic Designer @ METATEAM MYANMAR</li>
                  <li>Senior BPO @ METATEAM MYANMAR</li>
                  <li>JLPT N3 Certified (Japanese)</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="aspect-[3/4] bg-gray-900 overflow-hidden w-2/3 md:w-1/2">
              <img
                src={portrait}
                alt="Zar Zar Aung portrait"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="px-6 md:px-12 lg:px-24 py-24 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-8xl font-serif mb-6 md:mb-8">Let's talk.</h2>

            <div className="flex flex-col items-center gap-4 mb-16 md:mb-24">
              <a
                href="mailto:shwezar259@gmail.com"
                className="inline-block text-lg md:text-4xl font-serif border-b-2 border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-colors break-all text-center"
              >
                shwezar259@gmail.com
              </a>
              <div className="flex flex-col md:flex-row gap-6 mt-8 text-gray-600 font-light items-center">
                <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +959 978534814</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Botahtaung, Yangon, Myanmar</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Zar Zar Aung. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/Zarzarlay.259" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
