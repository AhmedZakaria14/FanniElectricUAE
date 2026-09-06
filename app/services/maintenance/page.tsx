import { CheckCircle2,AlertTriangle,Calendar,ChevronRight,Clock,FileText,Info,MessageCircle,ShieldCheck,TrendingDown,Zap } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

import BookingForm from '@/components/booking-form';
import ServiceNav from '@/components/service-nav';

import maintenanceElectrician1 from '@/src/assets/images/maintenance_electrician_1781704595136.jpg';
import maintenanceElectrician2 from '@/src/assets/images/maintenance_testing_1781705647084.jpg';
import panelDubai from '@/src/assets/images/panel_dubai_1781706867088.jpg';

export const metadata = {
  title: 'عقود صيانة كهربائية وقائية ودورية للحماية وتوفير الطاقة | فني كهرباء الامارات | الموقع متاح للإيجار',
  description: 'الموقع متاح للإيجار. للتواصل: +201010742430. أفضل خدمات الصيانة الكهربائية الوقائية والدورية في دبي، الشارقة، وعجمان. فحص حراري، وتقليل الفواتير وعمر أطول للأجهزة. فني معتمد لخدمة المباني.',
  alternates: {
    canonical: "https://www.fannielectricuae.com/services/maintenance",
  },
};

export default function MaintenanceService() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-[#F3F3F3] text-sm py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">صيانة دورية ووقائية للمباني</span>
        </div>
      </div>

      <ServiceNav />

      <div className="max-w-7xl mx-auto px-4 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Product Header / Hero */}
            <div className="bg-white p-4 lg:p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 text-[10px] sm:text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> خدمة صيانة وقائية</span>
                <span className="text-gray-500 text-xs text-left" dir="ltr">SKU: MNT-PRO-03</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-amazon-blue mb-4 leading-tight">
                صيانة كهربائية وقائية ودورية شاملة للمنازل والمباني التجارية
              </h1>

              {/* Images Grid */}
              <div className="grid grid-cols-1 gap-2 mb-6">
                <div className="relative h-64 md:h-96 w-full rounded overflow-hidden">
                  <Image 
                    src={maintenanceElectrician2} 
                    alt="فني كهرباء يجري فحص صيانة دورية للمقابس الكهربائية" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="relative h-28 sm:h-36 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={panelDubai} 
                      alt="لوحة توزيع كهربائية في شقة بدبي بعد صيانتها" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="relative h-28 sm:h-36 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={maintenanceElectrician1} 
                      alt="فحص دوري للوحة توزيع الكهرباء الرئيسية" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4 text-amazon-blue">حماية استباقية لاستثمارك وسلامتك</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  الوقاية دائماً أفضل وأقل تكلفة بكثير من العلاج الكارثي، خاصة عندما يتعلق الأمر بالكهرباء. الحرارة المخفية داخل اللوحات، والأسلاك المهترئة غير المرئية، أو كفاءة التوزيع الضعيفة، كلها يمكن أن تقود لفواتير ضخمة وحوادث خطيرة. من خلال برامج الصيانة في <span className="font-bold text-amazon-orange">فني كهرباء الامارات</span>، نستبق العطل قبل حدوثه في أي مكان بدبي أو الشارقة أو عجمان.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3] p-4 rounded text-base">
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تحليل حراري للوحة الرئيسية (Thermal Imaging) لكشف النقاط الساخنة الخطرة المخفية.</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">اختبار متانة وكفاءة نظام التأريض (Grounding/Earthing) لمنع خطر التسريب الأرضي.</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">حماية الأجهزة الباهظة من تقلبات الجهد باختبار القواطع واستقرار التيار الحقيقي.</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تنظيف اللوحات (DB Panels) وربط الوصلات المرتخية (Retightening) التي تسبب التماسات مستقبلية.</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تقييم سلامة المقابس وتغيير التالف منها، لضمان عدم تلف أجهزتك المنزلية المتصلة بها.</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">إصدار تقارير مفصلة تعتمدها الجهات الأمنية وتفيد في رفع كفاءة استهلاك الطاقة لتقليل فواتير ديوا.</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Table of Contents */}
            <div className="bg-white p-4 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Info className="w-5 h-5 text-amazon-blue" /> جدول المحتويات</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#007185]">
                <li><a href="#why-maintenance" className="hover:underline hover:text-amazon-orange">لماذا نحتاج للصيانة الكهربائية الوقائية؟</a></li>
                <li><a href="#what-included" className="hover:underline hover:text-amazon-orange">ماذا تتضمن عملية الفحص الشامل؟ (قائمة الفحص)</a></li>
                <li><a href="#residential" className="hover:underline hover:text-amazon-orange">عقود الصيانة المنزلية (للفلل والشقق)</a></li>
                <li><a href="#commercial" className="hover:underline hover:text-amazon-orange">الصيانة التجارية (للمحلات، المكاتب، المطاعم)</a></li>
                <li><a href="#benefits" className="hover:underline hover:text-amazon-orange">فوائد التعاقد السنوي معنا</a></li>
                <li><a href="#related-services" className="hover:underline hover:text-amazon-orange">خدمات مكملة لمعرفتك</a></li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="bg-white p-4 lg:p-6 shadow-sm border border-gray-200 space-y-8">
              
              <section id="why-maintenance">
                <h2 className="text-2xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><AlertTriangle className="text-amazon-orange" /> لماذا نحتاج للصيانة الكهربائية الوقائية؟</h2>
                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                  <p>تخيل أن تقود سيارتك لمسافة 50,000 كم دون فحص زيوتها أبداً! هكذا تماماً هي شبكة الكهرباء في منزلك. الكهرباء تمر يومياً، 24 ساعة، تحت ضغط كبير خاصة في الصيف عندما تعمل المكيفات بأقصى قدرة في مدن مثل دبي والشارقة الحارة.</p>
                  <p>الحرارة تؤدي لتمدد وانكماش المواصلات النحاسية، وهذا يعني:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li>ارتخاء المسامير (Screws) الموصلة للقواطع الرئيسية بمرور الوقت، مما يؤدي لمقاومة عالية (High Resistance) ثم شرارة، فنار لا سمح الله.</li>
                    <li>تلف عوازل الكابلات (Insulation) نتيجة الحِمل المستمر.</li>
                    <li>تحوّل قواطع التسريب الأرضي (ELCB/RCD) لأجزاء خاملة لا تستجيب عند وجود تماس بين الماء والكهرباء.</li>
                  </ul>
                  <p>الصيانة الوقائية توقف كل هذه السلسلة قبل أن تبدأ، وتحفظ ممتلكاتك، والأهم حماية عائلتك وزملائك في العمل من صدمة كهربائية فجائية.</p>
                </div>
              </section>

              <section id="what-included">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><FileText className="text-amazon-orange" /> ماذا يتضمن الفحص الكهربائي الدوري (Audit Checklist)؟</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>حين يصل فني كهرباء الامارات لزيارة الفحص المجدولة، فإنه يحمل قائمة مرجعية شاملة (Checklist) متبعة عالمياً. وتشمل زيارتنا:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li><strong>تأكيد كفاءة التوزيع باللوحات الفرعية:</strong> شد البراغي بـ (Torque Screwdriver) لمنع أي ارتخاء.</li>
                    <li><strong>التصوير الحراري:</strong> توجيه كاميرا حرارية (Thermal Camera) للوحة لمعرفة ما إذا كانت هناك قواطع تسخن بشكل غير طبيعي.</li>
                    <li><strong>اختبار أحمال السخانات والمكيفات:</strong> نقيس التيار المسحوب بواسطة أجهزة الأميتر (Clamp Meter) لنرى إن كان هناك جهاز معين يستهلك فوق الطبيعي مما يوحي بعطل مبكر فيه.</li>
                    <li><strong>فحص سلامة المآخذ (Sockets) والمفاتيح:</strong> لضمان عدم وجود تشققات، أو تصبغ بلون أصفر ناتج عن الحرارة المخفية.</li>
                    <li><strong>التنظيف الدقيق للمكونات:</strong> إزالة أي غبار أو أوساخ في اللوحة الرئيسية قد تكون سبباً في عدم تفريغ الحرارة بشكل طبيعي.</li>
                  </ul>
                </div>
              </section>

              <section id="residential">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><ShieldCheck className="text-amazon-orange" /> عقود الصيانة المنزلية (فلل وشقق دبي وعجمان)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>إذا كنت تملك فيلتك الخاصة وترغب في الحفاظ عليها في أبهى حلة وتقليل الأعطال الفجائية يوم الجمعة مساءً، نحن نوفر لك عقود صيانة مصممة لأصحاب المنازل. نهتم بـ:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li><strong>مضخات الفلل (Water Pumps):</strong> فحص التوصيلات الكهربائية لمضخات الماء وتأمينها من الصدأ والالتماس الناتج عن الرطوبة.</li>
                    <li><strong>إنارة اللاندسكيب (الحدائق الخارجية):</strong> حيث تكون معرضة للمطر والمياه وأشعة الشمس الساطعة، نتأكد من عازليتها وسلامتها بالكامل.</li>
                    <li><strong>بوابات السور الإلكترونية:</strong> فحص لوحة مفاتيح البوابة والمحركات للتأكد من سلاسة عملها كهربائياً.</li>
                  </ul>
                </div>
              </section>

              <section id="commercial">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><Zap className="text-amazon-orange" /> الصيانة التجارية (للمحلات، المطاعم، المصانع الناشئة)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>انقطاع الكهرباء في مطعم أو مستودع مبرد لمدة ساعة واحدة قد يعادل خسارة تساوي راتب شهر! نقدم لشركائنا في الشارقة ودبي خطط استباقية صارمة تضم:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li><strong>فحص كابلات المصاعد وتغذيات الثلاجات الضخمة (Chillers).</strong></li>
                    <li><strong>التأكد من جاهزية كشافات الطوارئ (Emergency Exit Lights) في حال انقطاع التيار الرئيسي.</strong></li>
                    <li><strong>تأمين تقارير رسمية:</strong> نعطيك تقريراً بحالة المبنى قد يُطلب منك عند تجديد تراخيص الدفاع المدني أو البلدية، أو لاعتماد التأمين.</li>
                  </ul>
                </div>
              </section>

              <section id="benefits">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><TrendingDown className="text-amazon-orange" /> فوائد التعاقد السنوي لتوفير فواتيرك</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">عندما تبرم عقد صيانة سنوي (Annual Maintenance Contract - AMC) معنا، لن تدوم راحة بالك فحسب، بل ستلحظ تغييراً إيجابياً في جيبك. الشبكات المنظمة التي لا تهدر الطاقة بسبب التوصيلات المعيبة، تقلل من فواتير الكهرباء بشكل ملحوظ. كما أن زياراتنا المنتظمة (ربع سنوية أو نصف سنوية) تأتيك بخصم ممتاز على قطع الغيار إن احتجت استبدالاً مستقبلاً، وبتخفيض على استدعاءات الطوارئ الاخرى.</p>
              </section>

              <section id="related-services" className="bg-gray-50 p-4 border border-gray-200 rounded">
                <h2 className="text-lg font-bold text-amazon-blue mb-3">اقرأ أيضاً (خدمات تكميلية)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <Link href="/services/emergency-repair" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <Zap className="w-4 h-4" /> حدث عطل مفاجيء ولم تتم الصيانة؟ فني طوارئ سريع
                  </Link>
                  <Link href="/services/wiring" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <CheckCircle2 className="w-4 h-4" /> تبحث عن تجديد تمديدات مكانك بالكامل؟ أعمال التأسيس
                  </Link>
                </div>
              </section>

            </div>

          </div>

          {/* Sidebar / Buying Box */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Booking Action Box */}
            <div className="bg-white p-5 shadow-sm border border-gray-200 sticky top-24">
              <div className="mb-4">
                <span className="text-2xl font-bold text-amazon-blue">يبدأ من AED 149</span>
                <p className="text-xs text-gray-500 mt-1">سعر زيارة الفحص الوقائي للشقق الصغيرة. تختلف عقود الفلل والمشاريع بناءً على عدد اللوحات.</p>
              </div>

              <div className="bg-[#FFF9E6] border border-[#FF9900] p-3 rounded text-sm leading-relaxed text-black mb-5">
                <div className="font-bold mb-1 flex items-center gap-1"><Clock className="w-4 h-4 text-amazon-orange"/> متوفر للتعاقد الفوري في:</div>
                <span className="font-bold">دبي، الشارقة، وعجمان</span> بجدول زمني مريح لك (صباحي أو مسائي).
              </div>

              <div className="space-y-3 mb-6 text-sm border-t border-b border-gray-100 py-4">
                <div className="flex gap-2 items-center"><Calendar className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">جدولة الزيارات (مرة كل 3 أو 6 أشهر)</span></div>
                <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">فحص اللوحات حرارياً لمنع الاحتراق</span></div>
                <div className="flex gap-2 items-center"><FileText className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">إصدار تقرير كفاءة شامل وموثوق</span></div>
              </div>

              <a href="https://wa.me/201010742430" target="_blank" rel="noopener noreferrer" className="w-full mb-3 bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3 rounded-lg border border-[#F2C200] shadow-sm transition duration-200 text-sm flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> استفسر عن عقود الصيانة (واتساب)
              </a>
              <a href="#booking-form-section" className="w-full bg-[#FFA41C] hover:bg-[#FF9900] text-amazon-blue font-bold py-3 rounded-lg border border-[#FF8F00] shadow-sm transition duration-200 text-sm flex items-center justify-center">
                احجز فحص وقائي مرة واحدة
              </a>
              <p className="text-[10px] text-center text-gray-500 mt-2">بالنقر، أنت تتمكن من حجز زيارة فورية لتقييم الاحتياجات.</p>
            </div>

          </div>
        </div>

        {/* Full-width section for Form below content */}
        <div className="mt-8 border-t border-gray-200 pt-8" id="booking-form-section">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-amazon-blue">حدد موعد للفحص الشامل الآن</h2>
            <BookingForm />
          </div>
        </div>

      </div>
    </>
  );
}
