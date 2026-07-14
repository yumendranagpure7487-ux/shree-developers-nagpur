import { motion } from 'framer-motion';

const stats = [
  { value: 'NMRDA', label: 'Approved Layout' },
  { value: '100%', label: 'Clear Legal Title' },
  { value: '7 Days', label: 'Office Open Weekly' },
  { value: '24/7', label: 'WhatsApp Support' },
];

export default function Stats() {
  return (
    <section className="bg-gold py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="text-center perspective-1000"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300">
                <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-navy mb-2">
                  {stat.value}
                </h3>
                <p className="text-navy/80 text-xs font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
