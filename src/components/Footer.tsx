import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#071525] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center">
              <span className="text-gold font-heading font-extrabold text-sm">SD</span>
            </div>
            <div>
              <div className="text-white/70 font-heading font-bold text-sm">Shree Developers</div>
              <div className="text-white/40 text-xs">Building Trust, Creating Futures</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-white/40 text-sm hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-white/40 text-sm hover:text-gold transition-colors">About</a>
            <a href="#gallery" className="text-white/40 text-sm hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="text-white/40 text-sm hover:text-gold transition-colors">Contact</a>
          </div>
          <p className="text-white/30 text-sm">
            © 2025 Shree Developers. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
