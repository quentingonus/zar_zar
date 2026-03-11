import { motion } from 'motion/react';
import LazyImage from './LazyImage';
import { WorkGroup, WorkItem } from '../data/workGroups';

interface GalleryProps {
  workGroups: WorkGroup[];
  onSelect: (work: WorkItem) => void;
}

export default function Gallery({ workGroups, onSelect }: GalleryProps) {
  return (
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
                  onClick={() => onSelect(work)}
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
  );
}
