import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
      <motion.a
        href="tel:+966500000000" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-luxury-black text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-gold/30"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%AC%D9%85%D9%84%D8%A9%20%D9%84%D9%84%D8%B9%D9%88%D8%AF" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20"
        aria-label="واتساب"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
