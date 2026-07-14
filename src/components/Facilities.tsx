import { motion } from 'framer-motion';

const facilities = [
  { icon: '🛣️', title: 'Developed Road Connectivity', desc: 'Every plot accessed via a planned internal road network connecting to the main highway.' },
  { icon: '💧', title: 'Underground Water Line', desc: 'Layout-wide provision for a reliable water connection to each individual plot.' },
  { icon: '⚡', title: 'Underground Electricity', desc: 'Power infrastructure planned and provisioned across the entire layout.' },
  { icon: '🏗️', title: 'Cement Concrete Roads', desc: 'Internal roads are cemented, not kutcha — built to last, not just to sell.' },
  { icon: '🌳', title: 'Garden & Plantation', desc: 'Landscaped open areas and greenery set aside within the layout, not an afterthought.' },
  { icon: '🌧️', title: 'Storm Line & Drainage', desc: 'Proper storm-water and drainage lines planned into the layout from the start.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-navy py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Our Premium Facilities
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            Everything a plot buyer checks, already in place
          </h2>
          <p className="text-white/60">
            Six essentials verified before we release a single plot for booking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -8,
                rotateY: 3,
                rotateX: -2,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <div className="bg-white/5 border border-gold/20 rounded-xl p-7 h-full hover:bg-gold/10 hover:border-gold/40 transition-all duration-300 group preserve-3d">
                <div className="text-4xl mb-4">{fac.icon}</div>
                <div className="text-gold text-xs font-bold tracking-wider mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-gold-light transition-colors">
                  {fac.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
