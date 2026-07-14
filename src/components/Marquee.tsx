import { motion } from 'framer-motion';

const items = [
  'Prime Location', 'Legal & Clear Title', 'High Investment Value',
  'RL NMRDA Approved', 'Developed Roads & Utilities',
  'Prime Location', 'Legal & Clear Title', 'High Investment Value',
  'RL NMRDA Approved', 'Developed Roads & Utilities',
];

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-navy border-y-2 border-gold py-4 overflow-hidden"
    >
      <div className="animate-marquee whitespace-nowrap inline-block">
        {items.map((item, i) => (
          <span key={i} className="inline-block mx-7 text-gold-light text-sm font-bold tracking-[0.12em] uppercase">
            {item} <span className="text-gold/60 mx-2">◆</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
