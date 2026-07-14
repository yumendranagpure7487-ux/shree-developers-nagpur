import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import { heroSlides, PHONE_MONA } from '../data/images';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-navy/90 via-navy/60 to-navy/80" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: -15, y: 30 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="perspective-1000"
        >
          {/* Logo badge */}
          <motion.div
            className="w-28 h-28 mx-auto mb-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-gold/40 flex items-center justify-center animate-glow"
            animate={{ rotateY: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="text-gold font-heading font-extrabold text-4xl">SD</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-gold/20 border border-gold-light/50 text-gold-light text-xs font-bold tracking-[0.15em] uppercase px-6 py-2.5 rounded-full mb-6"
          >
            RL · NMRDA Approved Plots
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-heading font-extrabold text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
          >
            Build Your Dream
            <br />
            on <span className="text-gold-light">Solid Ground</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
          >
            Shree Developers offers legally clear, NMRDA-approved plots in New Manish Nagar, Nagpur — with developed roads, water, electricity and green open spaces from day one.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {['New Manish Nagar', 'RTO Society', 'Nagpur 440015'].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-6"
          >
            <a
              href={PHONE_MONA}
              className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-4 rounded-lg font-bold text-sm hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now · 79099 17343
            </a>
            <a
              href="https://wa.me/917909917343?text=Hi%2C%20I%27d%20like%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white px-7 py-4 rounded-lg font-bold text-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Book a Site Visit
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-white/50 text-sm"
          >
            Calls answered directly by our directors — no call centre, no waiting.
          </motion.p>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gold w-8' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
