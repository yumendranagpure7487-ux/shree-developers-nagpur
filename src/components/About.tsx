import { motion } from 'framer-motion';
import { images } from '../data/images';

const checks = [
  'RL NMRDA Approved',
  'Clear Title Lands',
  'End-to-End Support',
  'Prime Manish Nagar Location',
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">
              About Us
            </div>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight mb-6">
              Shree Developers — Your Trust, Our Responsibility
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We are a new-generation plotting company in Nagpur, built on a timeless promise: land ownership should be transparent, secure, and within everyone's reach.
              </p>
              <p>
                Every layout we bring to market is RL NMRDA approved and backed by a clear legal title. We combine traditional values of trust and honesty with a modern, professional approach to real estate development.
              </p>
              <p>
                We would rather earn your trust with paperwork and a site visit than with empty promises. Walk the layout, verify the approvals yourself, then decide.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {checks.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-gold/30 px-5 py-2.5 rounded-lg text-sm font-bold text-navy"
                >
                  <span className="text-gold mr-1">✓</span> {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateY: -3, rotateX: 2 }}
            className="perspective-1000"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/20 group">
              <img
                src={images.hero10}
                alt="Shree Developers layout aerial view"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <p className="font-heading font-bold text-navy text-lg">New Manish Nagar Layout</p>
                  <p className="text-navy/70 text-sm">RL NMRDA Approved · Ready for Development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
