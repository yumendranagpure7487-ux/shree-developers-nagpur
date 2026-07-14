import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Globe, Clock } from 'lucide-react';
import { WHATSAPP_MONA, WHATSAPP_ASHWINI, PHONE_MONA, PHONE_ASHWINI } from '../data/images';

const directors = [
  {
    name: 'Mona Purshottam Nagpure',
    initials: 'MN',
    role: 'Director',
    phone: '79099 17343',
    phoneLink: PHONE_MONA,
    waLink: WHATSAPP_MONA,
  },
  {
    name: 'Ashwini Rahul Wagh',
    initials: 'AW',
    role: 'Director',
    phone: '74482 10439',
    phoneLink: PHONE_ASHWINI,
    waLink: WHATSAPP_ASHWINI,
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi, I'm ${name}. Please call me back at ${phone} regarding Shree Developers plots.`);
    window.open(`https://wa.me/917909917343?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-navy py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            Book a site visit or ask us anything
          </h2>
          <p className="text-white/60">
            Reach either of our directors directly by call or WhatsApp.
          </p>
        </motion.div>

        {/* Director cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {directors.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, rotateY: 3 }}
              className="perspective-1000"
            >
              <div className="bg-white/5 border border-gold/25 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 preserve-3d">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy font-heading font-extrabold text-xl flex-shrink-0">
                    {d.initials}
                  </div>
                  <div>
                    <div className="text-gold-light text-xs font-bold uppercase tracking-wider mb-1">
                      {d.role}
                    </div>
                    <div className="font-heading font-bold text-white text-xl">
                      {d.name}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={d.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-whatsapp text-navy px-5 py-3 rounded-lg font-bold text-sm hover:brightness-110 hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                  <a
                    href={d.phoneLink}
                    className="inline-flex items-center gap-2 border border-gold/40 text-white px-5 py-3 rounded-lg font-bold text-sm hover:bg-gold-light hover:text-navy transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call · {d.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callback form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-gold/20 rounded-2xl p-8 mb-14"
        >
          <h3 className="font-heading font-bold text-white text-xl mb-2">
            Request a Call Back
          </h3>
          <p className="text-white/60 text-sm mb-6">
            Can't talk right now? Submit your details and we'll call you back the same day.
          </p>
          <form onSubmit={handleCallback} className="flex flex-col md:flex-row gap-3 max-w-2xl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="flex-1 px-5 py-4 rounded-lg bg-cream border border-gold/30 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-navy/40"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your 10-digit Mobile Number"
              pattern="[0-9]{10}"
              required
              className="flex-1 px-5 py-4 rounded-lg bg-cream border border-gold/30 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-navy/40"
            />
            <button
              type="submit"
              className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-sm hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            >
              Request Call Back
            </button>
          </form>
        </motion.div>

        {/* Bottom info */}
        <div className="grid md:grid-cols-2 gap-10 border-t border-gold/20 pt-10">
          <div>
            <h4 className="text-gold-light text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Office Address
            </h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Plot No. 82, RTO Society, New Manish Nagar,<br />
              Behind Mahajan Atta Chaki, Opposite Hotel Manomay,<br />
              Manish Nagar, Nagpur — 440015
            </p>
            <p className="text-white/70 text-sm flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4" />
              Open daily: 9:00 AM – 7:00 PM (all 7 days)
            </p>
            <p className="text-gold-light text-sm">WhatsApp enquiries available 24/7</p>
          </div>
          <div>
            <h4 className="text-gold-light text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email & Website
            </h4>
            <a href="mailto:SHREEDEVLOPERS2026@GMAIL.COM" className="text-white/85 text-sm hover:text-gold-light transition-colors block mb-2">
              SHREEDEVLOPERS2026@GMAIL.COM
            </a>
            <a href="https://shreedevelopers.property" target="_blank" rel="noopener noreferrer" className="text-white/85 text-sm hover:text-gold-light transition-colors block mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              shreedevelopers.property
            </a>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Phone className="w-4 h-4" />
              <span>79099 17343 / 74482 10439</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
