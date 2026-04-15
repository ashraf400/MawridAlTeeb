import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-luxury-cream py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-gold/10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-white">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-serif font-bold">الشروط والأحكام</h1>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">1. قبول الشروط</h2>
            <p>باستخدامك لموقع "عود برستيج B2B"، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">2. خدمات الجملة</h2>
            <p>العروض المقدمة عبر الموقع مخصصة للشركات والمؤسسات التجارية فقط. نحتفظ بالحق في رفض أي طلب لا يستوفي معايير البيع بالجملة.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">3. الملكية الفكرية</h2>
            <p>جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والشعارات، هي ملك لشركة "عود برستيج" ومحمية بموجب قوانين الملكية الفكرية.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">4. حدود المسؤولية</h2>
            <p>نحن نسعى جاهدين لضمان دقة المعلومات على الموقع، ولكننا لا نتحمل المسؤولية عن أي أخطاء غير مقصودة في الأسعار أو مواصفات المنتجات.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <a 
            href="#"
            className="flex items-center gap-2 text-gold font-bold hover:underline"
          >
            <ArrowRight className="w-5 h-5" /> العودة للرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}
