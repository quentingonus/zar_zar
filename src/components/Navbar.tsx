import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { X, Menu, Moon } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [menuOpen]);

    const scrollTo = (id) => (e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    const navLinkStyles =
        "relative py-1 transition-colors duration-200 hover:text-blue-600 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100";

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-[120] bg-white/80 backdrop-blur-md text-slate-900 shadow-sm"
            >
                <div className="font-serif text-2xl md:text-3xl font-semibold tracking-tight cursor-pointer">
                    Zar Zar Aung
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
                    <a href="#work" onClick={scrollTo("work")} className={navLinkStyles}>
                        Work
                    </a>
                    <a
                        href="#about"
                        onClick={scrollTo("about")}
                        className={navLinkStyles}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        onClick={scrollTo("contact")}
                        className={navLinkStyles}
                    >
                        Contact
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-1 transition-all duration-300 active:scale-90"
                >
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <X className="w-8 h-8" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Menu className="w-8 h-8" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="modal-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 pt-24 pointer-events-none"
                    >
                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            <div className="p-8">
                                <nav className="flex flex-col">
                                    {[
                                        { id: "work", label: "Experience" },
                                        { id: "about", label: "About" },
                                        // { id: "skills", label: "Skills" },
                                        // { id: "featured-projects", label: "Featured Projects" },
                                        // { id: "certifications", label: "Certifications" },
                                        { id: "contact", label: "Contact" },
                                    ].map((item, idx) => (
                                        <div key={item.id} className="overflow-hidden">
                                            <motion.a
                                                href={`#${item.id}`}
                                                initial={{ y: "100%" }}
                                                animate={{ y: 0 }}
                                                transition={{
                                                    delay: 0.1 + idx * 0.05,
                                                    duration: 0.4,
                                                    ease: [0.215, 0.61, 0.355, 1],
                                                }}
                                                onClick={scrollTo(item.id)}
                                                className="text-lg font-medium text-slate-500 hover:text-slate-900 py-3 block border-b border-slate-50 last:border-none"
                                            >
                                                {item.label}
                                            </motion.a>
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}