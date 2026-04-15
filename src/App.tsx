import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Truck, 
  ShieldCheck, 
  Users, 
  ArrowLeft, 
  Star,
  Globe,
  Zap
} from 'lucide-react';
import B2BForm from './components/B2BForm';
import FloatingActions from './components/FloatingActions';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPath === '#privacy') return <PrivacyPolicy />;
  if (currentPath === '#terms') return <TermsAndConditions />;

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-white font-serif text-3xl font-bold shadow-lg shadow-gold/20 border border-white/20">ع</div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none">عود برستيج</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">OUD PRESTIGE B2B</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-gold transition-colors">عن الشركة</a>
            <a href="#products" className="hover:text-gold transition-colors">منتجاتنا</a>
            <a href="#wholesale" className="hover:text-gold transition-colors">تجارة الجملة</a>
            <a href="#contact" className="bg-luxury-black text-white px-6 py-2 rounded-full hover:bg-gold transition-all">اطلب الآن</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform origin-top-right -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3 h-3 fill-gold" /> شريكك الموثوق في تجارة العود بالجملة
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
              فخامة العود <br /> 
              <span className="text-gold italic">لأعمالك التجارية</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              نحن نوفر أجود أنواع العود الطبيعي والمحسن ودهن العود مباشرة من المصادر في جنوب شرق آسيا إلى مستودعاتك في الخليج. حلول متكاملة لتجار التجزئة والشركات.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-luxury-black text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gold transition-all shadow-xl shadow-black/10">
                ابدأ شراكتك معنا <ArrowLeft className="w-5 h-5" />
              </a>
              <a href="#wholesale" className="border border-gray-200 px-10 py-4 rounded-xl font-bold hover:border-gold transition-all">
                تصفح الكتالوج
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-2xl font-serif font-bold text-gold">+500</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">عميل B2B</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-serif font-bold text-gold">+10</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">سنوات خبرة</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-serif font-bold text-gold">100%</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">ضمان الجودة</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white">
              <img 
                src="https://cdn.salla.sa/PdQKdV/595c1da1-7f03-4006-8139-50f6a33f1af4-1000x1000-yBhhhrIgUcz74SN0jfZ2NqZQGb3WEGOpf2m9Y7fW.jpg" 
                alt="Luxury Oud Display" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gold/20 max-w-[200px] -rotate-3">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
              </div>
              <p className="text-xs font-bold leading-relaxed">"أفضل مورد عود تعاملنا معه في المنطقة، جودة ثابتة وتوريد موثوق."</p>
              <p className="text-[10px] text-gray-400 mt-2">— مدير مشتريات، الرياض</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">لماذا تختار عود برستيج لأعمالك؟</h2>
            <p className="text-gray-600">نحن نفهم احتياجات السوق الخليجي ونوفر حلولاً مخصصة تضمن لك الربحية والتميز.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Award, title: "جودة مختبرة", desc: "كل دفعة تمر باختبارات جودة صارمة لضمان الرائحة والثبات." },
              { icon: Truck, title: "شحن سريع", desc: "توصيل مباشر لجميع دول الخليج مع تخليص جمركي متكامل." },
              { icon: ShieldCheck, title: "أسعار تنافسية", desc: "أسعار جملة حقيقية تمنحك هوامش ربح ممتازة في السوق." },
              { icon: Users, title: "دعم مخصص", desc: "مدير حساب خاص لمتابعة طلباتك وتوفير احتياجاتك الخاصة." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-3xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gold/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section id="products" className="py-24 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold mb-4">تشكيلة الجملة المختارة</h2>
              <p className="text-gray-600">نوفر خيارات متنوعة تناسب كافة شرائح عملائك، من العود اليومي إلى النوادر الاستثمارية.</p>
            </div>
            <a href="#contact" className="text-gold font-bold flex items-center gap-2 hover:underline">
              طلب الكتالوج الكامل <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "العود الطبيعي", type: "تراد، مروكي، كلمنتان", img: "https://cdn.salla.sa/PdQKdV/595c1da1-7f03-4006-8139-50f6a33f1af4-1000x1000-yBhhhrIgUcz74SN0jfZ2NqZQGb3WEGOpf2m9Y7fW.jpg" },
              { title: "العود المحسن", type: "سوبر، دبل سوبر، ملكي", img: "https://images.unsplash.com/photo-1519669011783-4eaa93fa1b7d?auto=format&fit=crop&w=800&q=80" },
              { title: "أدهان العود", type: "بيور، معتق، خلطات خاصة", img: "https://media.zid.store/cf6ba7d9-275c-4d2f-8fdb-3834401a5e3f/002249b1-650c-4d27-88ca-1451e1c1c63e.jpg" }
            ].map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-8 right-8 left-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-white/70">{product.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Process */}
      <section id="wholesale" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold mb-8">كيف نبدأ العمل معاً؟</h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "تقديم الطلب", desc: "املأ نموذج الفلترة وتزويدنا بتفاصيل نشاطك التجاري." },
                  { step: "02", title: "الاستشارة والفرز", desc: "نتواصل معك لفهم احتياجاتك وتقديم العينات المناسبة." },
                  { step: "03", title: "توقيع الاتفاقية", desc: "اعتماد أسعار الجملة المخصصة لك وجدولة التوريد." },
                  { step: "04", title: "التوريد المستمر", desc: "شحن دوري ودعم فني وتسويقي لضمان نجاح مبيعاتك." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-serif font-bold text-gold/20">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-luxury-cream p-12 rounded-[3rem] relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full -mr-8 -mt-8 blur-2xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <Globe className="text-gold w-6 h-6" />
                    <div>
                      <div className="text-sm font-bold">تغطية شاملة</div>
                      <div className="text-xs text-gray-400">السعودية، الإمارات، الكويت، قطر، عمان، البحرين</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <Zap className="text-gold w-6 h-6" />
                    <div>
                      <div className="text-sm font-bold">تجهيز سريع</div>
                      <div className="text-xs text-gray-400">شحن خلال 48 ساعة للطلبات المعتمدة</div>
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1615485240384-552e400e9c24?auto=format&fit=crop&w=1200&q=80" 
                    alt="B2B Business Process" 
                    className="rounded-2xl shadow-lg mt-8"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">ماذا يقول شركاؤنا؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ثقة عملائنا هي رأس مالنا الحقيقي. نفخر بخدمة نخبة من الشركات في المنطقة.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "الجودة ثابتة في كل دفعة نطلبها، وهذا ما يجعلنا نعتمد عليهم كمورد أساسي لسلسلة متاجرنا.",
                name: "أحمد المنصور",
                role: "مدير المشتريات",
                company: "شركة العطور الفاخرة",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
              },
              {
                quote: "سرعة التوريد والاحترافية في التعامل جعلت من عود برستيج الشريك الأفضل لنا في المناسبات الكبرى.",
                name: "سارة العتيبي",
                role: "رئيسة العمليات",
                company: "مجموعة التراث الخليجي",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
              },
              {
                quote: "دهن العود لديهم يتميز بنقاء عالٍ وثبات مذهل، نال إعجاب عملائنا الأكثر تطلباً.",
                name: "محمد القحطاني",
                role: "المدير التنفيذي",
                company: "دار الطيب والعود",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="relative p-10 rounded-[2.5rem] bg-luxury-cream border border-gold/5 hover:border-gold/20 transition-all group"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 fill-white" />
                </div>
                
                <div className="mb-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg text-luxury-black font-medium leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gold/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-luxury-black">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {testimonial.role} | {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="contact" className="py-24 bg-luxury-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-gold rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">انضم إلى شبكة شركائنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نحن نبحث عن شركاء جادين للنمو معاً. املأ النموذج أدناه وسيقوم فريق مبيعات الجملة بالتواصل معك.</p>
          </div>
          
          <B2BForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center text-white font-serif text-3xl font-bold shadow-lg shadow-gold/20 border border-white/20">ع</div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold tracking-tight leading-none">عود برستيج</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">OUD PRESTIGE B2B</span>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                الوجهة الأولى لتجارة العود بالجملة في الخليج العربي. نجمع بين الأصالة والاحترافية لخدمة أعمالكم.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">روابط سريعة</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">عن الشركة</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">المنتجات</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-gold">تواصل معنا</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>الرياض، المملكة العربية السعودية</li>
                <li>info@oudprestige.com</li>
                <li dir="ltr">+966 500 000 000</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2026 عود برستيج. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
              <a href="#privacy" className="hover:text-white">سياسة الخصوصية</a>
              <a href="#terms" className="hover:text-white">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>

      <FloatingActions />
    </div>
  );
}

