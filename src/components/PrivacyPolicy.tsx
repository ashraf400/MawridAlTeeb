import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-luxury-cream py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-gold/10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 gold-gradient rounded-2xl flex items-center justify-center text-white">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-serif font-bold">سياسة الخصوصية</h1>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">1. جمع المعلومات</h2>
            <p>نحن نجمع المعلومات التي تقدمها لنا مباشرة عند تعبئة نموذج طلب عرض السعر، بما في ذلك الاسم، اسم الشركة، البريد الإلكتروني، ورقم الهاتف.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">2. استخدام المعلومات</h2>
            <p>نستخدم المعلومات التي نجمعها للتواصل معك بخصوص طلبك، وتقديم عروض أسعار مخصصة، وتحسين خدماتنا التجارية المقدمة لك.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">3. حماية البيانات</h2>
            <p>نحن نطبق مجموعة من إجراءات الأمان للحفاظ على سلامة معلوماتك الشخصية. لا نقوم ببيع أو تأجير بياناتك لأطراف ثالثة.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-luxury-black mb-4">4. ملفات تعريف الارتباط (Cookies)</h2>
            <p>قد نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم على موقعنا وفهم كيفية استخدام الموقع.</p>
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
