import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { WorkGroup, WorkItem } from '../data/workGroups';

interface WorkModalProps {
    selectedWork: WorkItem | null;
    workGroups: WorkGroup[];
    onClose: () => void;
}

export default function WorkModal({ selectedWork, workGroups, onClose }: WorkModalProps) {
    return (
        <AnimatePresence>
            {selectedWork && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <motion.img
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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
                            {workGroups.find((g) => g.items.some((i) => i.id === selectedWork.id))?.label}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif">{selectedWork.title}</h3>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
