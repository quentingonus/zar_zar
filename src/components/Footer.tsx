import { motion } from 'motion/react';
import { Facebook, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
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
    );
}
