import Image from 'next/image';
import Link from 'next/link';
import { Calendar, CheckCircle2, ChevronRight, Clock, ShieldCheck, Zap, AlertTriangle, PenTool, Home, MessageCircle, Info, MapPin } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import FAQAccordion from '@/components/faq-accordion';
import ServiceNav from '@/components/service-nav';

import heroImage from '@/src/assets/images/ajman_electrician_1781708736147.jpg';
import repairImage from '@/src/assets/images/emergency_night_1781706888867.jpg';

export const metadata = {
  title: 'كهربائي في عجمان - 0502067679 فني كهرباء منازل 24 ساعة رخيص',
  description: 'مطلوب كهربائي في عجمان؟ فني كهرباء الامارات لخدمتك 24 ساعة لحل أعطال المنازل والفلل والمحلات بسرعة وأسعار تنافسية. خدمة فورية اتصل الآن.',
  keywords: 'كهربائي في عجمان, كهربائي عجمان, كهربائي منازل في عجمان, تصليح كهرباء عجمان, اعطال كهرباء عجمان',
};

export default function ElectricianInAjman() {
  return (
    <>
      <div className="bg-[#F3F3F3] text-xs py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/" className="hover:underline hover:text-amazon-orange">المناطق</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">كهربائي في عجمان</span>
        </div>
      </div>

      <ServiceNav />

      <div className="max-w-7xl mx-auto px-4 w-full py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amazon-orange text-white text-xs font-bold px-3 py-1 rounded">خدمة عجمان طوارئ وصيانة</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-amazon-blue mb-6 leading-tight">
                كهربائي في عجمان - إصلاح فوري وأعطال منازل على مدار 24 ساعة بأسعار مميزة
              </h1>

              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image 
                  src={heroImage} 
                  alt="فني كهرباء عجمان - إصلاح منازل" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
                <p>
                  من الطبيعي أن تبحث عن <strong>كهربائي في عجمان</strong> يجمع بين الخبرة العالية والأسعار المناسبة عندما تواجه عطلاً كهربائياً. الأعطال الكهربائية عادة ما تقتحم هدوء المنزل بلا سابق إنذار، فقد يفصل القاطع فجأة صيفاً، أو تنقطع إنارة مبنى تجاري كامل مما يعطل عملك. للرد على هذه الانقطاعات المزعجة، يقدم لك <strong>فني كهرباء الامارات (FanniElectricUAE)</strong> أفضل مقاولي وفنيي الكهرباء لخدمتك في جميع المجمعات والفلل والشقق بإمارة عجمان.
                </p>
                <p>
                  لا نُساوم في السلامة أو في الالتزام بالوقت؛ فنحن نعلم أن توفر <strong>فني كهرباء منازل 24 ساعة</strong> يمثل للجميع طوق النجاة. نقدم خدمات شاملة من توصيل إضاءة، تركيب السخانات والمكيفات، تمديد خطوط جديدة للملاحق، إلى التعامل بحسم مع الالتماسات الكهربائية. اتصل هاتفياً <strong>0502067679</strong> لخدمة فورية وتكلفة شفافة تماماً.
                </p>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3 text-amazon-blue">
                <Info className="w-6 h-6 text-amazon-orange" /> دليل قراءة الخدمة
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-[#007185]">
                <li><a href="#why-choose-us" className="hover:underline hover:text-amazon-orange">أسباب تجعلنا الخيار الأمثل بعجمان</a></li>
                <li><a href="#residential-services" className="hover:underline hover:text-amazon-orange">خدمات منازل وشقق عجمان الشاملة</a></li>
                <li><a href="#emergency" className="hover:underline hover:text-amazon-orange">التعامل مع الطوارئ الليلية والإصلاحات 24/7</a></li>
                <li><a href="#lighting" className="hover:underline hover:text-amazon-orange">تجهيزات الإضاءة والنجف والمكيفات</a></li>
                <li><a href="#pricing" className="hover:underline hover:text-amazon-orange">أسعار كهربائي في عجمان هل هي غالية؟</a></li>
                <li><a href="#tips" className="hover:underline hover:text-amazon-orange">تحذيرات ونصائح لمنع حرائق الكهرباء</a></li>
                <li><a href="#faq" className="hover:underline hover:text-amazon-orange">أكثر الأسئلة تداولاً (FAQs)</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg space-y-10 prose max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              
              <section id="why-choose-us">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">لماذا تختار كهربائي في عجمان من فني الإمارات؟</h2>
                <p>
                  ليس من الحكمة تسليم أعمال الكهرباء المليئة بالتفاصيل المخفية لمبتدئين. نتميز في فني كهرباء الامارات بالآتي:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                  <div className="border border-gray-200 p-4 rounded">
                    <ShieldCheck className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-bold text-amazon-blue">أمان وامتثال تام</h4>
                    <p className="text-sm mt-1 text-gray-600">أسلاك معتمدة واتباع دقيق لمقاييس الاتحادية لحماية الممتلكات.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <Clock className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-bold text-amazon-blue">استجابة فائقة</h4>
                    <p className="text-sm mt-1 text-gray-600">سيارات وفرق منتشرة تصل لعجمان الصناعية أو السكنية في وقت قصير جداً.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                    <h4 className="font-bold text-amazon-blue">حلول اقتصادية مع ضمان</h4>
                    <p className="text-sm mt-1 text-gray-600">لا نكلفك ما لا تحتاجه، التشخيص دقيق والضمان يعطيك الارتياح المالي.</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded">
                    <PenTool className="w-8 h-8 text-red-500 mb-2" />
                    <h4 className="font-bold text-amazon-blue">معدات متطورة للفحص</h4>
                    <p className="text-sm mt-1 text-gray-600">أجهزة أوم ميتر والبحث عن الأعطال بدون تكسير الجدران وتشويهها.</p>
                  </div>
                </div>
              </section>

              <section id="residential-services">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">خدمات كهربائي منازل في عجمان</h2>
                <p>سواء أكان منزلك شقة حديثة في أبراج عجمان أو فيلا ممتدة في منطقة المويهات أو الروضة، نحمل قائمة كافية من الخدمات:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>فحص لوحات التوزيع وتغييرها:</strong> لو فصل القاطع مراراً، نكتشف السبب (حمل عالي أم التماس مسرب).</li>
                  <li><strong>تغيير المفاتيح (Switches/Sockets):</strong> المعطوبة، أو تصبغ لونها نتيجة لحرارة الأسلاك الكامنة خلفها، أو استبدالها بمفاتيح ذكية (Smart Switches).</li>
                  <li><strong>صيانة وإصلاح التمديدات:</strong> سحب الكابلات التالفة بفعل الزمن وتمرير كابلات قادرة على تحمل الضغوط الحالية من أجهزة التكييف القوية وغيرها.</li>
                  <li><strong>تأسيسات فلل كاملة:</strong> توزيع وموازنة نظام الـ 3-Phase لمشاريع الفلل في عجمان بصورة هندسية مدروسة.</li>
                </ul>
              </section>

              <section id="emergency">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">كهربائي في عجمان 24 ساعة - للطوارئ</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <p>
                      تنطفئ الأنوار، يتوقف التكييف، ويحل الحر. هذا هو السيناريو الأسوأ ليلاً بعجمان! لحسن الحظ <strong>فني كهرباء منازل 24 ساعة</strong> حاضر لإنقاذ اليوم. بمجرد اتصالك نتجه إليك سريعاً لعزل التماس أو استبدال خط الكهرباء المتضرر. السرعة مطلب لأن التهاون قد يعني ذوبان باقي كابلات الدائرة أو تضرر الأجهزة الكهربائية (ثلاجات، تلفزيونات) بفعل ترددات التيار العشوائية.
                    </p>
                    <Link href="/services/emergency-repair" className="mt-4 inline-flex items-center gap-1 text-amazon-orange font-bold hover:underline">
                      &rarr; اطلب ورشة طوارئ إصلاح الأعطال الآن
                    </Link>
                  </div>
                  <div className="w-full md:w-1/3 relative h-48 rounded-lg overflow-hidden border border-gray-200 shadow">
                    <Image src={repairImage} alt="كهربائي لحل الطوارئ بعجمان" fill className="object-cover" />
                  </div>
                </div>
              </section>

              <section id="lighting">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">تركيب وتصليح جميع تجهيزات الإضاءة والأجهزة</h2>
                <p>مرحلة الفاينش والتركيبات المظهرية جزء كبير من طلباتنا:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تركيب المخفي والمظهري من اسبوتات (Spotlights) وثريات ونجف كبير الحجم بمخاطر معدومة لسقوطها.</li>
                  <li>توصيل وتركيب مراوح الأسقف الشائعة في عجمان بطريقة آمنة ومتوازنة.</li>
                  <li>توصيل أفران الكهرباء الكبيرة (Electric Ovens) بسلك وقاطع مستقل حسب الأصول الهندسية.</li>
                  <li>توفير وتأسيس إضاءة الحدائق وتوصيلات المضخات الخارجية.</li>
                </ul>
              </section>

              <section id="pricing">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">أسعار كهربائي في عجمان.. هل هي معقدة أو غالية؟</h2>
                <p>
                  نسمع دائماً شكوى العملاء من التفاوت المخيف بالأسعار. لدينا قائمة أسعار <strong>معيارية ورخيصة</strong> تناسب السوق بعجمان. يبدأ الفحص والكشف من 50 إلى 150 درهم بحسب المسافة وتعقيد العطل، ويكون <strong>مجاناً</strong> من الفاتورة الإجمالية إذا جرى الاتفاق على الإصلاح. 
                </p>
                <p className="mt-2">
                  يؤمّن فنيونا قطع الغيار الأصلية مع فواتيرها لحماية حق العميل، فالتزامنا بالمصداقية هو رأسمالنا كـ كهربائي منازل رخيص ومعتمد في عجمان.
                </p>
              </section>

              <section id="tips">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">نصائح من معلم كهربائي لحماية عائلتك</h2>
                <div className="bg-[#FFF9E6] border border-[#FF9900] p-4 rounded text-sm leading-relaxed text-black">
                  <ul className="list-disc pr-5 space-y-2">
                    <li>لا تتجاهل نزول القاطع (Tripping Breaker) بشكل متكرر، هذا صوت أمان يقول: هناك مشكلة حرارة أو التماس بالداخل.</li>
                    <li>لا توصل أجهزة تصدر حرارة (سخان، غلاية ماء، مدفأة) على مشترك كهربائي (Extension)، بل مباشرة بالمقبس في الحائط.</li>
                    <li>احرص على ألا تقوم بغسل المطابخ أو الحمامات بالماء الوفير دون التأكد من وجود أغطية واقية ضد رذاذ الماء (IP Cover) على المقابس لتفادي صعق مائي.</li>
                  </ul>
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">الأسئلة الشائعة حول فني كهرباء عجمان</h2>
                <FAQAccordion faqs={[
                  {
                    question: 'هل كهربائي عجمان متاح للعمل أيام الجمعة أو العطل؟',
                    answer: 'نعم وبكل تأكيد، أيام العطل يرتفع استهلاك المنازل والأعطال أيضاً، لذا خدماتنا وقسم الطوارئ السريع يعمل دون توقف لراحتكم 24 ساعة.'
                  },
                  {
                    question: 'كم يستغرق الفني للوصول إلي بمناطق عجمان؟',
                    answer: 'بفضل فرقنا المتنقلة بين أحياء عجمان (كالنعيمية، الكرامة، الراشدية، الصناعية)، نصلك في الغالب خلال 30 لـ 45 دقيقة من تسجيل الطلب.'
                  },
                  {
                    question: 'هل تخدمون الشركات والمحلات والمكاتب في عجمان؟',
                    answer: 'نعم نقوم بتأسيس محلات وتعديل المخططات الكهربائية (Fit-out) لاستخراج الموافقات اللازمة للتمكين التجاري للمطاعم والعيادات ومحلات البيع بالتجزئة.'
                  }
                ]} />
              </section>

              {/* Internal Links for SEO */}
              <section className="bg-gray-100 p-6 rounded-lg mt-8 border border-gray-200">
                <h3 className="font-bold text-lg mb-3">شاهد خدمات أخرى تهم أصحاب المنازل:</h3>
                <ul className="flex flex-col gap-2">
                  <li><Link href="/electrician-in-dubai" className="text-[#007185] hover:text-amazon-orange hover:underline">كهربائي دبي 24 ساعة لتلبية أعطال الشقق والفلل</Link></li>
                  <li><Link href="/electrician-in-sharjah" className="text-[#007185] hover:text-amazon-orange hover:underline">أفضل فني كهرباء لجميع مناطق الشارقة</Link></li>
                  <li><Link href="/services/wiring" className="text-[#007185] hover:text-amazon-orange hover:underline">أعمال التأسيسات وتمديدات الكهرباء للبيوت الجديدة</Link></li>
                </ul>
              </section>

              {/* FAQ Schema json */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "هل كهربائي عجمان متاح للعمل أيام الجمعة أو العطل؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "نعم وبكل تأكيد، أيام العطل يرتفع استهلاك المنازل والأعطال أيضاً، لذا خدماتنا وقسم الطوارئ السريع يعمل دون توقف لراحتكم 24 ساعة."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "كم يستغرق الفني للوصول إلي بمناطق عجمان؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "نصلك في الغالب خلال 30 لـ 45 دقيقة من تسجيل الطلب."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "هل تخدمون الشركات والمحلات والمكاتب في عجمان؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "نعم نقوم بتأسيس محلات وتعديل المخططات الكهربائية (Fit-out) لاستخراج الموافقات اللازمة للتمكين التجاري."
                        }
                      }
                    ]
                  })
                }}
              />

            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 shadow-sm border border-gray-200 sticky top-24 rounded-lg">
              <div className="text-center mb-6">
                <span className="inline-block p-4 rounded-full bg-blue-50 mb-3">
                  <ShieldCheck className="w-8 h-8 text-amazon-blue" />
                </span>
                <h3 className="font-bold text-xl text-amazon-blue">فني كهرباء عجمان متاح</h3>
                <p className="text-sm text-gray-500 mt-2">اتصل بنا للتدخل السريع أو حجز المواعيد</p>
              </div>

              <a href="tel:0502067679" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3.5 rounded-full shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 mb-4 border border-[#F2C200]">
                <span className="text-xs font-normal">تواصل هاتفياً مباشرة</span>
                <span className="text-lg tracking-wider" dir="ltr">050 206 7679</span>
              </a>

              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-full shadow-sm transition-all duration-200 flex items-center justify-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5" /> تحدث معنى عبر واتساب
              </a>

              <div className="border-t border-gray-100 pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">تغطية النعيمية، الكرامة وصناعية عجمان</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">تجهيزات طوارئ ليلية للماس الكهربائي</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">أرخص وأفضل أسعار بعجمان وبضمان</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 shadow-sm border border-gray-200 rounded-lg">
                <h3 className="font-bold text-amazon-blue mb-4">اطلب موعد مسبقاً لعجمان</h3>
                <BookingForm />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
