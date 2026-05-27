import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Works', href: '#' },
    { label: 'Research', href: '#' },
    { label: 'Archive', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-10 flex justify-between items-start pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto"
      >
        <div className="text-lg font-black tracking-tighter uppercase text-white">ORTIKOVV</div>
      </motion.div>

      <div className="hidden md:flex gap-10 items-center pointer-events-auto">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="text-[11px] font-medium tracking-[2px] uppercase text-[#666] hover:text-white transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pill hover:bg-[#222] hover:text-white transition-all ml-4"
        >
          Contact Now
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-auto md:hidden"
      >
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center pointer-events-auto"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black mb-8 text-white hover:text-acid transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
