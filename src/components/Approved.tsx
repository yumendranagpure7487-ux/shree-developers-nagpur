import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Approved() {
  return (
    <section className="bg-gold py-14">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-3 border-navy flex items-center justify-center flex-shrink-0 bg-white/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center">
                <div className="font-heading font-extrabold text-navy text-[10px] leading-tight">
                  RL
                </div>
                <div className="font-heading font-extrabold text-navy text-[10px] leading-tight">
                  NMRDA
                </div>
                <div className="font-heading font-extrabold text-navy text-[8px] leading-tight">
                  APPROVED
                </div>
              </div>
            </motion.div>
            <div>
              <h3 className="font-heading font-bold text-navy text-xl md:text-2xl mb-2">
                RL NMRDA Approved Plots
              </h3>
              <p className="text-navy/80 text-sm">
                Every plot sold under Shree Developers is layout-approved. Ask for approval documents before booking — we will show them.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/917909917343?text=Hi%2C%20please%20share%20the%20NMRDA%20approval%20documents%20and%20plot%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-4 rounded-lg font-bold text-sm hover:bg-navy-mid hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex-shrink-0"
          >
            <FileText className="w-4 h-4" />
            Request Documents
          </a>
        </motion.div>
      </div>
    </section>
  );
}
