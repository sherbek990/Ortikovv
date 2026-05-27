import { motion } from 'motion/react';
import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery = ({ items }: GalleryProps) => {
  return (
    <section className="px-10 py-32 grid grid-cols-1 md:grid-cols-12 gap-px bg-industrial brutalist-border overflow-hidden">
      {items.map((item, index) => {
        const colSpan = item.size === 'large' ? 'md:col-span-8' : 
                        item.size === 'medium' ? 'md:col-span-6' : 
                        item.size === 'tall' ? 'md:col-span-4' : 
                        'md:col-span-4';
                        
        const rowSpan = item.size === 'tall' ? 'md:row-span-2' : '';

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden bg-obsidian border-industrial ${colSpan} ${rowSpan} min-h-[400px]`}
          >
            <div className="absolute top-4 left-4 z-20 flex gap-2">
               <span className="pill !bg-obsidian border-acid/20 text-acid">{item.category}</span>
            </div>

            <div className="relative h-full w-full overflow-hidden">
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-500"
              />
              
              {/* Industrial Info Panel */}
              <div className="absolute inset-x-0 bottom-0 bg-obsidian/90 backdrop-blur-sm p-6 transform translate-y-[calc(100%-60px)] group-hover:translate-y-0 transition-transform duration-500 brutalist-border border-x-0 border-b-0">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <span className="text-acid font-mono text-xs">#{item.id}</span>
                </div>
                <p className="text-xs text-[#999] leading-relaxed mb-8 max-w-sm uppercase tracking-wider">
                  {item.description}
                </p>
                <div className="flex gap-4 border-t border-industrial pt-4">
                  <div className="flex-1 text-[10px] text-[#666] tracking-widest uppercase">Methodology: Digital Density</div>
                  <div className="text-acid font-bold text-[10px] cursor-pointer hover:underline uppercase">View Data</div>
                </div>
              </div>
            </div>
            
            {/* Minimal Grid Label */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-10 h-10 border border-industrial flex items-center justify-center text-[10px] font-mono text-[#444]">
                  0{index + 1}
               </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
