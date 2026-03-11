import { motion } from 'motion/react';
import portrait from '../../showcases/zar_zar_aung.jpg';

export default function About() {
    return (
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
    );
}
