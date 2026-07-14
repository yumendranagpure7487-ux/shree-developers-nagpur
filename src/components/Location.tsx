import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mb-14"
        >
          <div className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Find Us
          </div>
          <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl leading-tight">
            Office & Inauguration Venue
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy text-xl mb-2">Visit Our Office</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-navy">Plot No. 82, RTO Society, New Manish Nagar,</strong><br />
                  Behind Mahajan Atta Chaki,<br />
                  Opposite Hotel Manomay,<br />
                  Manish Nagar, Nagpur — <strong className="text-navy">440015</strong>
                </p>
              </div>
            </div>

            <div className="bg-navy rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-gold-light" />
                <h4 className="text-gold-light text-sm font-bold uppercase tracking-wider">
                  Office Hours
                </h4>
              </div>
              <div className="text-white/85 text-sm leading-relaxed space-y-2">
                <p><strong className="text-white">Monday to Sunday:</strong> 9:00 AM – 7:00 PM</p>
                <p><strong className="text-white">WhatsApp Enquiries:</strong> Available 24/7</p>
                <p className="text-gold-light/80">Walk-ins welcome — no appointment needed.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold" />
              <a
                href="mailto:SHREEDEVLOPERS2026@GMAIL.COM"
                className="text-navy font-semibold text-sm hover:text-gold transition-colors"
              >
                SHREEDEVLOPERS2026@GMAIL.COM
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: -2 }}
            className="perspective-1000"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/15 h-[380px]">
              <iframe
                src="https://maps.google.com/maps?q=Hotel+Manomay+Manish+Nagar+Nagpur+440015&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                title="Shree Developers Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
