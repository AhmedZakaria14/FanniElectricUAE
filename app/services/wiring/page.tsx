import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, Clock, ShieldCheck, Zap, PenTool, Home, Factory, MessageCircle, Info, MapPin } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import ServiceNav from '@/components/service-nav';

import wiringInstallation1 from '@/src/assets/images/wiring_installation_1781704581135.jpg';
import wiringInstallation2 from '@/src/assets/images/wiring_installation_2_1781705633034.jpg';
import smartHome from '@/src/assets/images/smart_home_1781706915423.jpg';

export const metadata = {
  title: 'تمديدات كهربائية للمنازل والمحلات وتأسيس الأنظمة الذكية | فني كهرباء الامارات',
  description: 'أفضل مقاول تمديدات كهربائية وتأسيس كهرباء للمنازل والمشاريع التجارية في دبي والشارقة وعجمان. موافقات ديوا وتأسيس أنظمة السمارت هوم بأعلى معايير الجودة.',
};

export default function WiringService() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-[#F3F3F3] text-xs py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">تمديدات منزلية وتجارية ذكية</span>
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
                <span className="bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><Home className="w-3 h-3"/> مشاريع وتأسيس</span>
                <span className="text-gray-500 text-xs text-left" dir="ltr">SKU: WRN-PRO-02</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-amazon-blue mb-4 leading-tight">
                تمديدات كهربائية وتأسيس شامل معتمد (للمنازل، المحلات، وأنظمة السمارت هوم)
              </h1>

              {/* Images Grid */}
              <div className="grid grid-cols-1 gap-2 mb-6">
                <div className="relative h-64 md:h-96 w-full rounded overflow-hidden">
                  <Image 
                    src={wiringInstallation2} 
                    alt="تمديدات وتأسيس شبكات كهربائية في فيلا بدبي" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="relative h-28 sm:h-36 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={smartHome} 
                      alt="تأسيس مفاتيح المنزل الذكي Smart Home" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="relative h-28 sm:h-36 w-full rounded overflow-hidden border border-gray-200">
                    <Image 
                      src={wiringInstallation1} 
                      alt="فني كهرباء يقوم بتمديد أسلاك احترافية" 
                      fill 
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4 text-amazon-blue">بنية تحتية كهربائية تدوم طويلاً</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  البنية التحتية الكهربائية هي القلب النابض لأي مشروع حديث، سواء كان فيلا سكنية فاخرة أو محلاً تجارياً عالي الاستهلاك. في <span className="font-bold text-amazon-orange">فني كهرباء الامارات</span>، نقدم حلول التأسيس والتمديد من الحفر على العظم وحتى التشطيب النهائي الجمالي (Fit-out).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F3F3F3] p-4 rounded text-sm">
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تأسيس المخططات الكهربائية للمباني وفق معايير DEWA و SEWA</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">توزيع متوازن ومدروس للأحمال الكهربائية (3-Phase Load Distribution)</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تأسيس البنية التحتية للمنازل الذكية (Smart Home Automation)</span></li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تعديلات التمديدات (Electrical Fit-out) للمحلات التجارية والمطاعم</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">تأسيس شبكات الكاميرات (CCTV)، الإنترنت التسلسلي، والدش المركزي</span></li>
                    <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" /> <span className="text-gray-800">استخدام أسلاك مقاومة للحريق من مصادر معتمدة دولياً ومحلياً (مثل كابلات دوكاب)</span></li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Table of Contents */}
            <div className="bg-white p-4 shadow-sm border border-gray-200">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2"><Info className="w-5 h-5 text-amazon-blue" /> جدول المحتويات</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#007185]">
                <li><a href="#services-residential" className="hover:underline hover:text-amazon-orange">التمديدات السكنية والفلل</a></li>
                <li><a href="#services-commercial" className="hover:underline hover:text-amazon-orange">تجهيزات المحلات التجارية والمشاريع</a></li>
                <li><a href="#smart-home" className="hover:underline hover:text-amazon-orange">تأسيس المنازل الذكية (Smart Home)</a></li>
                <li><a href="#safety-standards" className="hover:underline hover:text-amazon-orange">معايير الأمان وموافقات ديوا</a></li>
                <li><a href="#materials" className="hover:underline hover:text-amazon-orange">المواد والقطع المستخدمة</a></li>
                <li><a href="#related-services" className="hover:underline hover:text-amazon-orange">خدمات ذات صلة</a></li>
              </ul>
            </div>

            {/* Content Sections */}
            <div className="bg-white p-4 lg:p-6 shadow-sm border border-gray-200 space-y-8">
              
              <section id="services-residential">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><Home className="text-amazon-orange" /> التمديدات السكنية لتأسيس الفلل والشقق</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>تأسيس كهرباء الفيلا أو المنزل الجديد ليس مجرد تمديد أسلاك؛ بل هو فن رسم مسارات الطاقة لخدمة راحتك اليومية. من توزيع الديكورات المضيئة (Spotlights و LED Strips) في الأسقف المستعارة، إلى تحديد أماكن الأفياش بدقة جانب الأسرة وخلف الشاشات لضمان عدم وجود أسلاك متدلية مشوهة للمنظر.</p>
                  <p>نقوم بمهام متعددة في المشاريع السكنية أبرزها:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li>حفر الجدران وتمديد مواسير الـ PVC بمسارات هندسية مرتبة.</li>
                    <li>تأسيس إنارة الحدائق الخارجية والأسوار المقاومة للعوامل الجوية (Waterproof IP65).</li>
                    <li>تحضير نقاط للسيارات الكهربائية (EV Chargers) في كراج الفيلا، تماشياً مع رؤية الإمارات للمستقبل.</li>
                    <li>تركيب لوحات التوزيع الرئيسية والفرعية (MDB & SMDB) مع قواطع الحماية ضد الصدمات المتطورة.</li>
                  </ul>
                </div>
              </section>

              <section id="services-commercial">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><Factory className="text-amazon-orange" /> تجهيزات الكهرباء للمحلات والمشاريع التجارية (Fit-outs)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>الوقت هو أهم عنصر عند تجهيز مطعم، عيادة، أو محل تجاري جديد (Fit-out). نجاح مشروعك يتطلب بنية كهربائية تتحمل معدات ثقيلة مثل الأفران، مكيفات التبريد العملاقة، وأجهزة الليزر الطبي دون أن يفصل التيار فجأة.</p>
                  <p>فريقنا متخصص في أعمال الـ Commercial Fit-outs في المولات والمراكز التجارية في دبي والشارقة. نحن نتكفل بـ:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li>الالتزام الكامل بمتطلبات إدارة المبنى (Facility Management) وأوقات العمل المسموحة.</li>
                    <li>توزيع الأحمال على ثلاثة فازات (3-Phase) لتجنب التحميل الزائد على خط واحد.</li>
                    <li>إمداد الأسلاك المعزولة عبر الصواني المعدنية (Cable Trays) في الأسقف المكشوفة بأسلوب ديكوري وتجاري حديث (Industrial Look).</li>
                    <li>تأسيس السيرفرات وشبكات نقاط البيع (POS) بدقة عالية.</li>
                  </ul>
                </div>
              </section>

              <section id="smart-home">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><Zap className="text-amazon-orange" /> تأسيس كهرباء المنازل الذكية (Smart Home Systems)</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>تحويل منزلك إلى &quot;منزل ذكي&quot; يبدأ من مرحلة العظم. الأجهزة الذكية الحديثة من علامات مثل (KNX، Legrand، Sonoff، و Tuya) تتطلب تأسيس بنية تحتية تحتوي على خطوط الـ Neutral في جميع مفاتيح الإضاءة، وهو ما كان يُتجاهل في التأسيس القديم.</p>
                  <p>نحن نجهز منزلك ليكون متوافقاً 100% مع أنظمة الـ IoT (إنترنت الأشياء). يمكننا تمديد كابلات التحكم، وتجهيز الغرف لتركيب:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li>مفاتيح إضاءة تعمل باللمس ويمكن التحكم بها عبر الهاتف أو الأوامر الصوتية (Alexa / Google Assistant).</li>
                    <li>ستائر كهربائية (Motorized Blinds) تفتح وتغلق أوتوماتيكياً.</li>
                    <li>أنظمة تحكم ذكية بالمكيفات (Smart Thermostats).</li>
                    <li>أنظمة إنذار ومراقبة متكاملة.</li>
                  </ul>
                </div>
              </section>

              <section id="safety-standards">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><ShieldCheck className="text-amazon-orange" /> معايير ديوا (DEWA) وسيوة (SEWA) وتأمين الاعتمادات</h2>
                <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                  <p>تنفيذ الأعمال الكهربائية في الإمارات يتطلب الامتثال الدقيق لقوانين واشتراطات الهيئات الاتحادية والمحلية للحصول على الموافقة وإطلاق التيار. أي خطأ في ألوان الأسلاك (Red, Yellow, Blue, Black, Green/Yellow) أو حجم القواطع قد يؤدي إلى رفض المعاملة.</p>
                  <p>يمتلك <span className="font-bold">فني كهرباء الامارات</span> خبرة عميقة في هذه الاشتراطات. نحن نرافقك حتى اجتياز الفحص النهائي الحكومي، ونضمن لك:</p>
                  <ul className="list-disc pr-5 space-y-2">
                    <li>تركيب نظام التأريض (Earthing/Grounding) الصحيح لمنع خطر الصعق تماماً.</li>
                    <li>تركيب قواطع الـ Earth Leakage (ELCB) الحساسة جداً في الأماكن الرطبة كالحمامات والمطابخ.</li>
                    <li>توفير مخططات (As-Built Drawings) للجهات المعنية عند الحاجة لمشاريع التطوير الكبرى.</li>
                  </ul>
                </div>
              </section>

              <section id="materials">
                <h2 className="text-xl font-bold text-amazon-blue mb-3 border-b pb-2 flex items-center gap-2"><PenTool className="text-amazon-orange" /> المواد والخامات المستخدمة</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">في عالم الكهرباء، &quot;الرخيص يكلفك الكثير&quot;. التوفير في جودة كابل أو قاطع قد يؤدي إلى حريق يدمر المبنى بالكامل. لذلك، سياستنا الصارمة هي استخدام مواد خام أصلية 100% ومعتمدة من ESMA (هيئة الإمارات للمواصفات والمقاييس). نحن نعتمد على كابلات مطابقة للمواصفات (مثل Ducab أو Riyadh Cables)، وقواطع ومفاتيح من شركات رائدة مثل (ABB، Schneider Electric، Legrand، و Panasonic).</p>
              </section>

              <section id="related-services" className="bg-gray-50 p-4 border border-gray-200 rounded">
                <h2 className="text-lg font-bold text-amazon-blue mb-3">اقرأ أيضاً (خدمات تكميلية)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <Link href="/services/emergency-repair" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <Zap className="w-4 h-4" /> حدث شورت مفاجئ في تمديداتك؟ اطلب فني طوارئ
                  </Link>
                  <Link href="/services/maintenance" className="flex items-center gap-2 text-[#007185] hover:text-amazon-orange hover:underline font-bold">
                    <ShieldCheck className="w-4 h-4" /> عقود صيانة وقائية شاملة للمباني والمجمعات
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
                <span className="text-2xl font-bold text-amazon-blue">تسعير حسب المخطط</span>
                <p className="text-xs text-gray-500 mt-1">المشاريع الجديدة والتأسيس تتطلب زيارة ميدانية أو الإطلاع عن بعد على المخططات لتقديم عرض سعر رسمي.</p>
              </div>

              <div className="bg-[#FFF9E6] border border-[#FF9900] p-3 rounded text-sm leading-relaxed text-black mb-5">
                <div className="font-bold mb-1 flex items-center gap-1"><MapPin className="w-4 h-4 text-amazon-orange"/> تغطية المشاريع:</div>
                نغطي طلبات التأسيس في <span className="font-bold">كافة مناطق دبي، الشارقة، وعجمان</span>.
              </div>

              <div className="space-y-3 mb-6 text-sm border-t border-b border-gray-100 py-4">
                <div className="flex gap-2 items-center"><PenTool className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">دراسة مجانية للمخطط المبدئي</span></div>
                <div className="flex gap-2 items-center"><ShieldCheck className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">ضمان شامل وممتد على التنفيذ</span></div>
                <div className="flex gap-2 items-center"><Clock className="w-4 h-4 text-green-600" /> <span className="text-gray-800 font-medium">التزام تعاقدي بالجداول الزمنية</span></div>
              </div>

              <a href="https://wa.me/971522815005" target="_blank" rel="noopener noreferrer" className="w-full mb-3 bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3 rounded-lg border border-[#F2C200] shadow-sm transition duration-200 text-sm flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> أرسل مخططك عبر واتساب
              </a>
              <a href="#booking-form-section" className="w-full bg-[#FFA41C] hover:bg-[#FF9900] text-amazon-blue font-bold py-3 rounded-lg border border-[#FF8F00] shadow-sm transition duration-200 text-sm flex items-center justify-center">
                احجز معاينة مهندس للتأسيس
              </a>
              <p className="text-[10px] text-center text-gray-500 mt-2">بالنقر، أنت تطلب تواصل من فريق المشاريع لمناقشة تفاصيل المبنى.</p>
            </div>

          </div>
        </div>

        {/* Full-width section for Form below content */}
        <div className="mt-8 border-t border-gray-200 pt-8" id="booking-form-section">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-amazon-blue">حدد موعد مقايسة لمشروعك</h2>
            <BookingForm />
          </div>
        </div>

      </div>
    </>
  );
}
