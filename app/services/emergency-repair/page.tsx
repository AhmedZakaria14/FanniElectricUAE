import { CheckCircle2,Activity,AlertTriangle,ChevronRight,Clock,Info,MapPin,MessageCircle,PenTool,ShieldCheck,Zap } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

import BookingForm from '@/components/booking-form';
import LiveCounter from '@/components/live-counter';
import ServiceNav from '@/components/service-nav';

import electricalRepair1 from '@/src/assets/images/electrical_repair_1781704567775.jpg';
import electricalRepair2 from '@/src/assets/images/emergency_repair_2_1781705617033.jpg';
import emergencyNight from '@/src/assets/images/emergency_night_1781706888867.jpg';

export const metadata = {
  title: 'إصلاح أعطال كهربائية طارئة | دبي، الشارقة، عجمان | فني كهرباء الامارات',
  description: 'أفضل خدمة طوارئ وإصلاح أعطال كهربائية على مدار 24 ساعة في دبي، الشارقة، وعجمان. فني كهربائي معتمد لإصلاح الالتماسات وانقطاع التيار الكهربائي فوراً.',
  alternates: {
    canonical: "https://www.fannielectricuae.com/services/emergency-repair",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "إصلاح أعطال كهربائية طارئة",
  "name": "خدمة إصلاح أعطال كهربائية طارئة فورية في دبي، الشارقة وعجمان",
  "description": "نقدم خدمة استجابة سريعة للتعامل مع كافة الحالات الكهربائية الطارئة والمستعجلة. فريقنا من الفنيين المعتمدين والمعدين جيداً يصلون إليك في غضون وقت قصير (30 إلى 45 دقيقة) لتشخيص وإصلاح العطل بأعلى درجات الأمان والاحترافية.",
  "provider": {
    "@type": "Organization",
    "name": "فني كهرباء الامارات",
    "url": "https://www.fannielectricuae.com/"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "دبي"
    },
    {
      "@type": "State",
      "name": "الشارقة"
    },
    {
      "@type": "State",
      "name": "عجمان"
    }
  ],
  "url": "https://www.fannielectricuae.com/services/emergency-repair",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "خدمات فني كهرباء الامارات",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "إصلاح أعطال طارئة",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تشخيص دقيق باستخدام أجهزة متطورة"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تصليح الالتماسات الكهربائية المعقدة"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "استجابة ليلية في دبي والشارقة وعجمان"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة توزيع الأحمال لتجنب فصل القواطع المتكرر"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إصلاح لوحات التوزيع الرئيسية للمنازل والمحلات"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "توفير قطع غيار أصلية ومطابقة لمعايير ديوا وسيوة"
            }
          }
        ]
      }
    ]
  }
};

export default function EmergencyRepairService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumbs */}
      <div className="bg-[#F3F3F3] text-sm py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">إصلاح أعطال طارئة 24/7</span>
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
                <span className="bg-red-100 text-red-800 text-[10px] sm:text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> خدمة طوارئ 24 ساعة</span>
                <span className="text-gray-500 text-xs text-left" dir="ltr">SKU: EMG-REP-01</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-amazon-blue mb-4 leading-tight">
                إصلاح أعطال كهربائية طارئة فورية في دبي، الشارقة وعجمان
              </h1>

              {/* Images Grid */}
              <div className="grid grid-cols-1 gap-2 mb-6">
                <div className="relative h-64 md:h-96 w-full rounded overflow-hidden">
                  <Image 
                    src={electricalRepair2} 
                    alt="فني كهرباء يعالج التماس كهربائي في دبي" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="relative h-24 sm:h-32 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={electricalRepair1} 
                      alt="فني يرتدي قفازات أثناء إصلاح لوحة كهربائية" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="relative h-24 sm:h-32 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={emergencyNight} 
                      alt="تصليح أعطال كهربائية طارئة في الليل" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4 text-amazon-blue">لماذا تختار خدمة الطوارئ من فني كهرباء الامارات؟</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  هل تواجه انقطاعًا مفاجئًا في التيار الكهربائي في منتصف الليل؟ أو التماس يعرض سلامة أسرتك أو منشأتك للخطر؟ نحن في <span className="font-bold text-amazon-orange">فني كهرباء الامارات</span> (FanniElectricUAE) نقدم خدمة استجابة سريعة للتعامل مع كافة الحالات الكهربائية الطارئة والمستعجلة. فريقنا من الفنيين المعتمدين والمعدين جيداً يصلون إليك في غضون وقت قصير (30 إلى 45 دقيقة) لتشخيص وإصلاح العطل بأعلى درجات الأمان والاحترافية.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3] p-4 rounded text-base">
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تشخيص دقيق باستخدام أجهزة متطورة (Multimeters و Thermal Imagers)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تصليح الالتماسات الكهربائية المعقدة (Short Circuit) بأمان تام</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">استجابة ليلية في دبي والشارقة وعجمان بدون رسوم مبالغ فيها</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">إعادة توزيع الأحمال لتجنب فصل القواطع المتكرر (Tripping Breakers)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">إصلاح لوحات التوزيع الرئيسية للمنازل والمحلات (DB Panels)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">توفير قطع غيار أصلية ومطابقة لمعايير ديوا (DEWA) وسيوة (SEWA)</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Table of Contents */}
            <div className="bg-white p-4 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Info className="w-5 h-5 text-amazon-blue" /> جدول المحتويات</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#007185]">
                <li><a href="#what-is-emergency" className="hover:underline hover:text-amazon-orange">ما هي أعطال الكهرباء الطارئة؟</a></li>
                <li><a href="#coverage-dubai" className="hover:underline hover:text-amazon-orange">خدماتنا في دبي (أهم المناطق)</a></li>
                <li><a href="#coverage-sharjah" className="hover:underline hover:text-amazon-orange">تغطية طوارئ الشارقة</a></li>
                <li><a href="#coverage-ajman" className="hover:underline hover:text-amazon-orange">فني كهرباء عجمان للحالات العاجلة</a></li>
                <li><a href="#process" className="hover:underline hover:text-amazon-orange">خطوات الفحص والإصلاح</a></li>
                <li><a href="#related-services" className="hover:underline hover:text-amazon-orange">خدمات ذات صلة</a></li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="bg-white p-4 lg:p-6 shadow-sm border border-gray-200 space-y-8">
              
              <section id="what-is-emergency">
                <h2 className="text-2xl font-bold text-amazon-blue mb-3 border-b pb-2">ما هي الأعطال الكهربائية التي تتطلب تدخلاً طارئاً؟</h2>
                <div className="text-base text-gray-700 leading-relaxed space-y-4">
                  <p>الكهرباء ليست شيئاً يمكن التهاون معه. بعض المشاكل قد تبدو بسيطة ولكنها تخفي خلفها كوارث محتملة. يجب عليك الاتصال بفني كهرباء طوارئ فوراً في الحالات التالية:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li><strong>رائحة حريق أو دخان من المقابس:</strong> هذا يدل على ذوبان الأسلاك الداخلية بسبب حمل زائد، وهو خطر حريق مباشر.</li>
                    <li><strong>انقطاع التيار عن جزء من المنزل دون الآخر:</strong> مؤشر على تلف في أحد خطوط التوزيع (Phase) أو احتراق أحد القواطع الفرعية.</li>
                    <li><strong>صعق كهربائي خفيف عند لمس الأجهزة:</strong> يعني أن هناك تسريب للتيار وضعف في نظام التأريض (Earthing)، مما يشكل خطراً مميتاً على أفراد الأسرة.</li>
                    <li><strong>الشرار عند توصيل الأجهزة:</strong> يدل على ارتخاء في الوصلات النحاسية الداخلية.</li>
                  </ul>
                  <p>تجاهل هذه العلامات قد يؤدي إلى تلف الأجهزة باهظة الثمن، والأهم من ذلك، يعرض حياتك وحياة عائلتك للخطر. في <span className="font-bold">فني كهرباء الامارات</span>، نتعامل مع هذه البلاغات كأولوية قصوى.</p>
                </div>
              </section>

              <section id="coverage-dubai">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 flex items-center gap-2 border-b pb-2"><MapPin className="text-amazon-orange" /> تغطية طوارئ دبي (Dubai Emergency Electrician)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>باعتبار دبي مدينة لا تنام، فإن حاجتها لخدمات الدعم الكهربائي المستمرة أولوية لنا. نمتلك فرقاً متنقلة وموزعة استراتيجياً في إمارة دبي لضمان تقليل وقت الاستجابة.</p>
                  <p>نغطي في دبي كافة المجمعات والمناطق السكنية والتجارية، بما في ذلك:</p>
                  <div className="bg-gray-50 border p-3 rounded text-xs text-gray-600 grid grid-cols-2 md:grid-cols-3 gap-2">
                    <span>• دبي مارينا</span>
                    <span>• جميرا (1، 2، 3)</span>
                    <span>• البرشاء (جنوب، 1، 2)</span>
                    <span>• الخليج التجاري</span>
                    <span>• ديرة والمرقبات</span>
                    <span>• بر دبي والكرامة</span>
                    <span>• مردف والورقاء</span>
                    <span>• المرابع العربية</span>
                    <span>• نخلة جميرا</span>
                  </div>
                  <p>سواء كانت مشكلتك في شقة في الطابق الخمسين، أو فيلا مستقلة، فنيونا مجهزون بأدوات الفحص والسلالم وقطع الغيار المعتمدة من هيئة كهرباء ومياه دبي (DEWA) للعمل فوراً وبدون تأخير.</p>
                </div>
              </section>

              <section id="coverage-sharjah">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 flex items-center gap-2 border-b pb-2"><MapPin className="text-amazon-orange" /> فني كهرباء طوارئ في الشارقة (Sharjah)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>في الشارقة، تتنوع المباني بين القديمة التي قد تعاني من تهالك التمديدات، والمباني الحديثة التي تتطلب دقة عالية في التعامل مع الأحمال. فريق <span className="font-bold">فني كهرباء الامارات</span> خبير في كلتا الحالتين المطابقتين لاشتراطات هيئة كهرباء ومياه الشارقة (SEWA).</p>
                  <p>تتضمن استجابتنا في الشارقة المناطق الحيوية التالية:</p>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>منطقة المجاز، التعاون، والخان حيث الكثافة السكانية والأعطال المفاجئة في اللوحات المشتركة.</li>
                    <li>المناطق الصناعية (الصناعية 1 إلى 17) لمعالجة أعطال المصانع المستعجلة التي توقف الإنتاج.</li>
                    <li>الرملة، العزرة، المرقاب، ومويلح للفلل السكنية والتجمعات التجارية.</li>
                  </ul>
                  <p>لا تدع عطلًا كهربائيًا يفسد يومك، محترفونا متواجدون لحل المشكلة من جذورها بشكل سريع ومضمون.</p>
                </div>
              </section>

              <section id="coverage-ajman">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 flex items-center gap-2 border-b pb-2"><MapPin className="text-amazon-orange" /> خدمات طوارئ عجمان السريعة (Ajman)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>تتميز عجمان بنموها السكني والتجاري السريع. نقدم خدماتنا في عجمان بنفس مستوى الجودة والسرعة، مع التركيز على الكفاءة والتكلفة الميسرة التي تناسب جميع الفئات.</p>
                  <p>يصل الفنيون التابعون لنا بسرعة إلى:</p>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>منطقة النعيمية والراشدية حيث تكثر البنايات السكنية والتجارية.</li>
                    <li>الروضة، المويهات، والجرف وهي المناطق التي تشهد كثافة في بناء الفلل والمجمعات السكنية.</li>
                    <li>الرميلة وكورنيش عجمان لخدمة المطاعم والمقاهي والشقق المطلة على البحر.</li>
                  </ul>
                  <p>نحرص في عجمان على توفير قطع غيار عالية الجودة لضمان ألا تتكرر المشكلة، مما يحفظ مالك وجهدك في المستقبل.</p>
                </div>
              </section>

              <section id="process">
                <h2 className="text-xl font-bold text-amazon-blue mb-4 border-b pb-2">كيف نعمل؟ (خطوات الفحص والإصلاح)</h2>
                <div className="space-y-6 text-sm text-gray-700">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-amazon-orange text-amazon-blue font-bold flex items-center justify-center text-lg z-10"><Activity className="w-5 h-5"/></div>
                      <div className="w-0.5 bg-gray-200 h-full mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-base mb-1 text-amazon-blue">الاستجابة والتقييم الأولي المخبري</h3>
                      <p className="leading-relaxed">عند وصول الفني، يتم أولاً تأمين المكان لتجنب أي صدمة كهربائية للمتواجدين. ثم نستخدم أجهزة قياس الجهد وقياس العازلية (Megger) لتحديد مسار الالتماس الدقيق حتى لو كان داخل الجدران.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-amazon-orange text-amazon-blue font-bold flex items-center justify-center text-lg z-10"><PenTool className="w-5 h-5"/></div>
                      <div className="w-0.5 bg-gray-200 h-full mt-2"></div>
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-base mb-1 text-amazon-blue">عزل العطل وإصلاحه</h3>
                      <p className="leading-relaxed">نعزل الجزء المتضرر من الشبكة حتى لا تتأثر باقي غرف المنزل. نقوم بتغيير الكابلات المحترقة أو استبدال القواطع الرئيسية (Main Breakers أو ELCB) لضمان عودة التيار بانتظام.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-amazon-orange text-amazon-blue font-bold flex items-center justify-center text-lg z-10"><ShieldCheck className="w-5 h-5"/></div>
                    </div>
                    <div className="pb-2">
                      <h3 className="font-bold text-base mb-1 text-amazon-blue">اختبار الأمان والموثوقية</h3>
                      <p className="leading-relaxed">قبل مغادرة الموقع، يتم تشغيل كافة الأحمال الثقيلة (المكيفات، السخانات) معاً للتأكد من تحمل القواطع الجديدة وعدم ارتفاع حرارة الأسلاك، لضمان نومك قرير العين.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="related-services" className="bg-gray-50 p-4 border border-gray-200 rounded">
                <h2 className="text-lg font-bold text-amazon-blue mb-3">اقرأ أيضاً (خدمات تكميلية)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <Link href="/services/wiring" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <Zap className="w-4 h-4" /> خدمات تمديدات كهربائية وتأسيس منزلي كامل
                  </Link>
                  <Link href="/services/maintenance" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <ShieldCheck className="w-4 h-4" /> باقات الصيانة الكهربائية الدورية لحماية منزلك
                  </Link>
                </div>
              </section>

            </div>

          </div>

          {/* Sidebar / Buying Box */}
          <div className="lg:col-span-4 space-y-4">
            
            <LiveCounter />

            {/* Booking Action Box */}
            <div className="bg-white p-5 shadow-sm border border-gray-200 sticky top-24">
              <div className="mb-4">
                <span className="text-2xl font-bold text-red-700">رسوم الكشف: من AED 120</span>
                <p className="text-xs text-gray-500 mt-1">تُخصم رسوم الكشف في حال الموافقة على التصليح. السعر الإجمالي يعتمد على حجم العمل وقطع الغيار المستخدمة.</p>
              </div>

              <div className="bg-[#FFF9E6] border border-[#FF9900] p-3 rounded text-sm leading-relaxed text-black mb-5">
                <div className="font-bold mb-1 flex items-center gap-1"><Clock className="w-4 h-4 text-amazon-orange"/> وقت الوصول المتوقع:</div>
                ضمن 30 - 45 دقيقة في <span className="font-bold">دبي، الشارقة، وعجمان</span>.
              </div>

              <div className="space-y-3 mb-6 text-sm border-t border-b border-gray-100 py-4">
                <div className="flex gap-2 items-center"><Zap className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">فحص فني باستخدام المجسات الحرارية</span></div>
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">دعم طوارئ ليلي ونهاري 24/7</span></div>
                <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">ضمان 30 يوم على الإصلاحات الطارئة</span></div>
              </div>

              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="w-full mb-3 bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3 rounded-lg border border-[#F2C200] shadow-sm transition duration-200 text-sm flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> واتساب للطوارئ الفورية
              </a>
              <a href="#booking-form-section" className="w-full bg-[#FFA41C] hover:bg-[#FF9900] text-amazon-blue font-bold py-3 rounded-lg border border-[#FF8F00] shadow-sm transition duration-200 text-sm flex items-center justify-center">
                احجز موعد غير طارئ
              </a>
              <p className="text-[10px] text-center text-gray-500 mt-2">بالنقر، أنت تؤكد طلبك للتواصل الفوري من الفنيين المتوفرين.</p>
            </div>

          </div>
        </div>
        
        {/* Full-width section for Form below content */}
        <div className="mt-8 border-t border-gray-200 pt-8" id="booking-form-section">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-amazon-blue">احجز زيارة فني الآن</h2>
            <BookingForm />
          </div>
        </div>

      </div>
    </>
  );
}
