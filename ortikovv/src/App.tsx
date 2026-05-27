import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { GalleryItem } from './types';
import { ArrowDown, Instagram, Twitter, MessageSquare, Send, Mail } from 'lucide-react';

const ITEMS: GalleryItem[] = [
  {
    id: '01',
    title: 'Obsidian Flow',
    category: 'Motion Design',
    imageUrl: '/src/assets/images/obsidian_flow_1779703773688.png',
    size: 'large',
    description: 'An exploration of fluid dynamics within a lightless environment, featuring liquid obsidian and red trace elements.'
  },
  {
    id: '02',
    title: 'Digital Refraction',
    category: 'Visual Art',
    imageUrl: '/src/assets/images/ethereal_refraction_1779703789889.png',
    size: 'tall',
    description: 'Capturing the precise moment light transforms into a spectrum upon meeting perfectly geometric prisms.'
  },
  {
    id: '03',
    title: 'Cybernetic Echoes',
    category: 'Architecture',
    imageUrl: '/src/assets/images/cyber_sculpture_1779703809954.png',
    size: 'medium',
    description: 'The convergence of raw marble and digital consciousness, reimagined for a post-human era.'
  },
  {
    id: '04',
    title: 'The Silent Void',
    category: 'Research',
    imageUrl: '/src/assets/images/void_architecture_1779703825752.png',
    size: 'wide',
    description: 'Architectural structures that exist purely as a dialogue between weight and gravity-defying mists.'
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian selection:bg-acid selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-40 px-10">
        <div className="massive-bg-text">ORTIKOVV</div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end relative z-10">
          <div className="md:col-span-12 lg:col-span-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, ease: 'circOut' }}
              className="h-2 bg-acid mb-10" 
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-[-0.04em] mb-10"
            >
              Creative<br />Visionary
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-xs text-base leading-relaxed text-[#999] font-light"
            >
              Ortikovv — A specialized laboratory focused on high-density functionalism and radical typographic expression.
            </motion.p>
          </div>

          <div className="md:col-span-12 lg:col-span-4 brutalist-border border-y-0 border-r-0 lg:pl-10 pb-10">
            <div className="stat-row pt-0">
              <span className="stat-label">Creative Director</span>
              <span className="stat-value text-white">Sherbek Ortiqov</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">System Status</span>
              <span className="stat-value text-acid uppercase">Active / Operational</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Origin</span>
              <span className="stat-value tracking-wider text-white">Uzbekistan / Regional Hub</span>
            </div>
            <div className="stat-row border-b-0 pb-0">
              <span className="stat-label">Methodology</span>
              <span className="stat-value text-white">Brutalist Precision</span>
            </div>
          </div>
        </div>


        {/* Hero Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
           <img 
              src="/src/assets/images/obsidian_flow_1779703773688.png" 
              className="w-full h-full object-cover grayscale mix-blend-screen"
              alt="Background Texture"
           />
        </div>
      </section>

      {/* Main Gallery Section Header */}
      <div className="px-10 py-10 brutalist-border border-x-0 flex justify-between items-center bg-[#0a0a0a]">
         <div className="text-[10px] font-black uppercase tracking-[3px] text-white">Visual Artifacts / Portfolio</div>
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-acid animate-pulse" />
            <div className="text-[10px] font-bold uppercase text-[#444]">Real-time Feed</div>
         </div>
      </div>

      <Gallery items={ITEMS} />

      {/* Secondary Data Section */}
      <section className="px-10 py-48 grid grid-cols-1 md:grid-cols-2 gap-20 brutalist-border border-x-0 border-b-0">
        <div>
          <h2 className="text-5xl md:text-7xl mb-12 leading-none">Bold <br /> <span className="text-acid">Expression.</span></h2>
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square brutalist-border relative overflow-hidden bg-white/5">
                 <img 
                    src={i === 1 ? "/src/assets/images/cyber_sculpture_1779703809954.png" : "/src/assets/images/void_architecture_1779703825752.png"} 
                    className="w-full h-full object-cover grayscale"
                    alt={`Work ${i}`}
                 />
              </div>
            ))}
          </div>
          <p className="text-[#999] leading-relaxed max-w-lg mb-10">
            Sherbek Ortiqov operates at the intersection of aesthetic engineering and digital culture. We decompose complex systems into raw typographic elements.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/mr_ortikovv/?__pwa=1#" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-[#444] hover:text-acid transition-colors cursor-pointer" size={20} />
            </a>
            <a href="https://t.me/ortikovv_sh" target="_blank" rel="noopener noreferrer">
              <Send className="text-[#444] hover:text-acid transition-colors cursor-pointer" size={20} />
            </a>
            <a href="mailto:osherbek9@gmail.com">
              <Mail className="text-[#444] hover:text-white transition-colors cursor-pointer" size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col justify-end lg:pl-20">
           <div className="p-10 brutalist-border bg-black relative mb-10">
              <div className="absolute top-0 right-0 p-4 border-l border-b border-industrial text-[10px] text-[#444] font-mono">ID-2026</div>
              <div className="text-acid font-black text-4xl mb-4 tracking-tighter uppercase whitespace-normal">Sherbek O.</div>
              <p className="text-xs text-[#666] leading-relaxed uppercase tracking-wider mb-8">
                 Bridging the gap between conceptual density and radical digital functionalism.
              </p>
              <a href="https://t.me/ortikovv_sh" target="_blank" rel="noopener noreferrer">
                <button className="pill !bg-acid !text-black !border-acid hover:!bg-white hover:!border-white transition-all">Connect Now</button>
              </a>
           </div>
           
           <div className="flex justify-between items-end border-t border-industrial pt-10">
              <span className="text-[10px] text-[#444] font-mono">PORTFOLIO v2.0</span>
              <span className="text-[10px] text-[#444] font-mono">STATUS: ONLINE</span>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 border-t border-industrial flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold text-[#444] tracking-widest bg-black">
        <div>© 2026 Sherbek Ortiqov</div>
        <div className="flex gap-10 mt-6 md:mt-0">
          <div>Ref No. 2026-XPL</div>
          <div>Issue 01 // ORTIKOVV</div>
        </div>
      </footer>
    </div>
  );
}
