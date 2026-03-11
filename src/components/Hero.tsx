import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import professional from '../../showcases/professonal.png';

export default function Hero() {
    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
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
    );
}
