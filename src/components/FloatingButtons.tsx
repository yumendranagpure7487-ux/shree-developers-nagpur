import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      {/* Call button */}
      <motion.a
        href="tel:+917909917343"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transition-shadow"
      >
        <Phone className="w-6 h-6 text-navy" />
      </motion.a>

      {/* WhatsApp button */}
      <motion.a
        href="https://wa.me/917909917343?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Shree%20Developers%20plots."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2, type: 'spring' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 transition-shadow"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex">
        <a
          href="tel:+917909917343"
          className="flex-1 text-center py-4 bg-gold text-navy font-extrabold text-sm"
        >
          📞 Call Now
        </a>
        <a
          href="https://wa.me/917909917343?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Shree%20Developers%20plots."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-4 bg-whatsapp text-white font-extrabold text-sm"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
