import Image from 'next/image';
import Link from 'next/link';
import { Calendar, CheckCircle2, ChevronRight, Clock, ShieldCheck, Zap, AlertTriangle, PenTool, Home, MessageCircle, Info, MapPin } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import FAQAccordion from '@/components/faq-accordion';
import ServiceNav from '@/components/service-nav';

import heroImage from '@/src/assets/images/dubai_electrician_1781708702166.jpg';
import repairImage from '@/src/assets/images/electrical_repair_1781704567775.jpg';
import panelImage from '@/src/assets/images/panel_dubai_1781706867088.jpg';
import smartHomeImage from '@/src/assets/images/smart_home_1781706915423.jpg';

export const metadata = {
  title: 'كهربائي منازل في دبي - 0502067679 | فني كهرباء الامارات طوارئ 24 ساعة',
  description: 'ابحث عن أفضل كهربائي منازل في دبي 0502067679. شركة فني كهرباء الامارات تقدم خدمات تصليح، صيانة أعطال، وتأسيس كهرباء للفلل بأسعار رخيصة وخدمة 24 ساعة.',
  keywords: 'كهربائي منازل في دبي, كهربائي دبي, فني كهربائي دبي, تصليح كهرباء دبي, مقاول كهرباء دبي',
};

export default function ElectricianInDubai() {
  return (
    <>
      <div className="bg-[#F3F3F3] text-xs py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/" className="hover:underline hover:text-amazon-orange">المناطق</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">كهربائي منازل في دبي</span>
        </div>
      </div>

      <ServiceNav />

      <div className="max-w-7xl mx-auto px-4 w-full py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amazon-orange text-white text-xs font-bold px-3 py-1 rounded">خدمة دبي 24/7</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-amazon-blue mb-6 leading-tight">
                كهربائي منازل في دبي - خدمات سريعة وآمنة من فني كهرباء الامارات
              </h1>

              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image 
                  src={heroImage} 
                  alt="كهربائي منازل محترف في دبي" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
                <p>
                  إذا كنت تبحث عن <strong>كهربائي منازل في دبي</strong> يقدم خدمات مهنية سريعة على مدار اليوم، فأنت في المكان الصحيح. مع التطور الكبير في نمط الحياة اليومي داخل إمارة دبي واسترعاء الانتباه للاعتماد الكلي على الطاقة الكهربائية داخل المنازل، الفلل، والمؤسسات التجارية، بات من الضروري الاستعانة بفني كهربائي موثوق وخبير. نحن في <strong>فني كهرباء الامارات</strong> نفخر بتقديم مجموعة شاملة من خدمات تصليح، صيانة، وتأسيس الأنظمة الكهربائية المتكاملة لجميع الأحياء في دبي.
                </p>
                <p>
                  من الأعطال الطارئة مثل انقطاع التيار الكهربائي أو الالتماسات المفاجئة، إلى تجهيز التمديدات الحديثة وأنظمة المنازل الذكية (Smart Home)، يحتاج كل مسكن في دبي لرقم <strong>كهربائي دبي</strong> متاح للتدخل العاجل. اتصل الآن على الخط الساخن <strong>0502067679</strong> للحصول على أمهر الفنيين وأرخص الأسعار.
                </p>

                <div className="bg-blue-50 border-r-4 border-amazon-blue p-5 my-8">
                  <h3 className="font-bold text-lg text-amazon-blue mb-2">لماذا الكهرباء لا تحتمل التأجيل؟</h3>
                  <p className="text-sm">إن أعطال الكهرباء قد تشكل خطراً حقيقياً على الأرواح الممتلكات. السخونة الزائدة في الأسلاك، التوصيلات المرتخية، والمقابس التالفة هي بوادر حرائق. استجابتنا الفورية في أي وقت طوال الـ 24 ساعة تخفف من حدة الخطر وتعيد الاستقرار لمنزلك.</p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3 text-amazon-blue">
                <Info className="w-6 h-6 text-amazon-orange" /> جدول المحتويات
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-[#007185]">
                <li><a href="#need-electrician" className="hover:underline hover:text-amazon-orange">لماذا تحتاج أفضل كهربائي منازل في دبي؟</a></li>
                <li><a href="#services" className="hover:underline hover:text-amazon-orange">أبرز خدمات كهربائي دبي</a></li>
                <li><a href="#emergency" className="hover:underline hover:text-amazon-orange">تصليح الأعطال الكهربائية وطوارئ 24 ساعة</a></li>
                <li><a href="#wiring-setup" className="hover:underline hover:text-amazon-orange">تأسيس وتشطيب كهرباء الفلل في دبي</a></li>
                <li><a href="#smart-home" className="hover:underline hover:text-amazon-orange">تركيب أنظمة السمارت هوم وتمديداتها</a></li>
                <li><a href="#lighting" className="hover:underline hover:text-amazon-orange">فك وتركيب اسبوتات ونجف الإضاءة</a></li>
                <li><a href="#appliances" className="hover:underline hover:text-amazon-orange">إصلاح وتوصيل الأجهزة المنزلية</a></li>
                <li><a href="#coverage" className="hover:underline hover:text-amazon-orange">أحياء ومناطق دبي التي نغطيها</a></li>
                <li><a href="#pricing" className="hover:underline hover:text-amazon-orange">أسعار كهربائي دبي وكيف نقدم سعراً رخيصاً؟</a></li>
                <li><a href="#tips" className="hover:underline hover:text-amazon-orange">نصائح من أفضل فني كهرباء</a></li>
                <li><a href="#faq" className="hover:underline hover:text-amazon-orange">الأسئلة الشائعة لعملائنا في دبي</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg space-y-10 prose max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              
              <section id="need-electrician">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">لماذا تحتاج أفضل كهربائي منازل في دبي؟</h2>
                <p>
                  تتميز إمارة دبي بمناخها الحار جداً في أغلب أوقات العام، مما يجعل وحدات التكييف والتبريد تعمل بأقصى طاقة. هذا الضغط المستمر يولد أحمالاً ضخمة على الشبكات الكهربائية داخل أي مبنى. التمديدات القديمة أو ذات الجودة الرديئة قد لا تتحمل هذه الأحمال، مما يستوجب الاستعانة بـ <strong>كهربائي فني</strong> ذو كفاءة، لديه الأدوات لتوزيع الأحمال (Load Balancing) بدقة وفحص نقاط الضعف باللوحة الرئيسية.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-bold mb-2">تجارب موثوقة:</h4>
                    <p className="text-sm">خبرة تتخطى الـ 10 سنوات في التعامل مع اشتراطات هيئة كهرباء ومياه دبي (DEWA)، مما يعني عدم وجود أي أخطاء تتسبب بمخالفات.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-bold mb-2">أمان أولاً:</h4>
                    <p className="text-sm">لا نقوم بتعديل أي سلك دون إغلاق التيار وقياس الجهد بأدق الأجهزة المعتمدة دولياً، نلتزم بالسلامة القصوى.</p>
                  </div>
                </div>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">أبرز خدمات كهربائي دبي من شركتنا</h2>
                <p>تتعامل شركة <strong>فني كهرباء الامارات (FanniElectricUAE)</strong> مع كافة التفاصيل من الألف للياء، نغطي كل احتياجات المنازل في مجال الكهرباء:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amazon-orange mt-1 flex-shrink-0" />
                    <span><strong>صيانة الأعطال:</strong> تشخيص انقطاع التيار والترييب المستمر للقواطع.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amazon-orange mt-1 flex-shrink-0" />
                    <span><strong>تركيب اللوحات الرئيسية (DBs):</strong> تغيير وترتيب الأسلاك وتأمين عازليتها.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amazon-orange mt-1 flex-shrink-0" />
                    <span><strong>أعمال الصيانة الدورية:</strong> الفحص الحراري بالإنفراريد للكشف عن أي حرارة زائدة باللوحات قبل أن تحترق.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amazon-orange mt-1 flex-shrink-0" />
                    <span><strong>تأسيس كهرباء الفلل:</strong> وتمديد الكابلات للأبنية قيد الإنشاء.</span>
                  </li>
                </ul>
              </section>

              <section id="emergency">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">تصليح الأعطال الكهربائية وطوارئ 24 ساعة</h2>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <p>
                      نتفهم تماماً حالة الهلع عند شم رائحة دخان تصدر من أحد المقابس، أو شرر يتطاير، أو انقطاع مفاجئ بالكامل عن المنزل ليلاً. بناءً عليه خصصنا فرق <strong>طوارئ كهرباء دبي</strong> موزعة استراتيجياً للوصول خلال 30 دقيقة لأغلب أرجاء دبي. 
                    </p>
                    <p className="mt-3">
                      بمجرد اتصالك، يصل الفني ومعه تشكيلة كاملة من قطع الغيار الأصلية المعتمدة ليعالج الماس الكهربائي ويعيد التيار.
                    </p>
                    <Link href="/services/emergency-repair" className="mt-4 inline-flex items-center gap-1 text-amazon-orange font-bold hover:underline">
                      &rarr; اكتشف المزيد عن خدمة الطوارئ لدينا
                    </Link>
                  </div>
                  <div className="w-full md:w-1/3 relative h-48 rounded-lg overflow-hidden border">
                    <Image src={repairImage} alt="طوارئ كهرباء دبي 24 ساعة" fill className="object-cover" />
                  </div>
                </div>
              </section>

              <section id="wiring-setup">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">تأسيس وتشطيب كهرباء الفلل في دبي</h2>
                <p>مرحلة العظم والتشطيب هي الأهم، فكابلات الكهرباء كالشرايين في جسم المبنى. نقوم بالتالي:</p>
                <ol className="list-decimal pr-6 space-y-3">
                  <li><strong>حفر وتجهيز المسارات:</strong> عمل مسارات دقيقة بالصاروخ (Wall Chasing) دون الإضرار بخرسانة البناء.</li>
                  <li><strong>تمديد المواسير والبواطات:</strong> استخدام مواسير مقاومة للحريق من أجود الأنواع.</li>
                  <li><strong>سحب الأسلاك وتوزيعها:</strong> بألوان قياسية مطابقة لمعايير ديوا (أحمر، أصفر، أزرق، أسود، وأخضر للتأريض).</li>
                  <li><strong>تركيب المقلد والمقابس:</strong> التشطيب النهائي بقطع عالمية (مثل شنايدر، إيه بي بي، باناسونيك وغيرها).</li>
                </ol>
                <Link href="/services/wiring" className="mt-4 inline-flex items-center gap-1 text-amazon-orange font-bold hover:underline">
                  &rarr; اقرأ تفاصيل خدمة التأسيس والتمديدات
                </Link>
              </section>

              <section id="smart-home">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">تركيب أنظمة السمارت هوم وتمديداتها</h2>
                <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                  <div className="flex-1">
                    <p>
                      دبي مدينة التكنولوجيا، ولا عجب أن الكثير من الفلل والشقق تنتقل للاعتماد على أنظمة التحكم الذكي (Smart Home). كهربائي منازل دبي من شركتنا ملم بجميع أنظمة (KNX, Wi-Fi Switches, Sonoff, Tuya). نقوم بتمديد سلك الـ &quot;Neutral&quot; الإضافي المطلوب في كل العلب، وتأسيس شبكات التحكم التي تتيح لك إدارة إضاءة منزلك ومكيفاته من جوالك أو بأوامر أليكسا الصوتية.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 relative h-48 rounded-lg overflow-hidden border">
                    <Image src={smartHomeImage} alt="كهربائي انظمة ذكية سمارت هوم دبي" fill className="object-cover" />
                  </div>
                </div>
              </section>

              <section id="lighting">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">فك وتركيب الإضاءة، اسبوتات ونجف دبي</h2>
                <p>كل مصمم ديكور يعلم أن الإضاءة هي روح المكان. نوفر عمالة للقيام بمهام تشمل:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تركيب ثريات كريستال ضخمة لأسقف الفلل العالية بأمان كامل مستخدمين سقالات ونشات رفع.</li>
                  <li>قص وتركيب الاسبوتات المخفية (Spotlights) والإنارة المخفية (LED Strips) في الجبس بورد.</li>
                  <li>تركيب إضاءة الحدائق (Landscape Lighting) المقاومة للماء والعوامل الجوية.</li>
                  <li>تركيب كشافات مستشعرات الحركة لتوفير الطاقة في الممرات.</li>
                </ul>
              </section>

              <section id="appliances">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">إصلاح وتوصيل الأجهزة المنزلية</h2>
                <p>
                  الكثير من الأجهزة المطبخية تتطلب توصيلاً آمناً من نقاط مخصصة (Isolators). مقبس الثلاجة أو الغسالة العادي لا يصلح لفرن أو موقد بيلت إن (Built-in Hob). نوفر في دبي فنيين متخصصين لـ:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li>تركيب وصيانة سخانات المياه وتوصيلها بمفتاح الأمان الخارجي.</li>
                  <li>تأسيس خطوط الأفران العالية الجهد وتركيبها.</li>
                  <li>توصيل المكيفات الاسبليت وتمديد كابلاتها بطرق مخفية في دبي.</li>
                </ul>
              </section>

              <section id="coverage">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">أحياء ومناطق دبي التي نغطيها</h2>
                <p>نعمل على مدار الساعة ونصلك أينما كنت في أي حي من أحياء دبي والمجمعات السكنية الجديدة أو العريقة:</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-center border-collapse border border-gray-300 min-w-[500px]">
                    <thead className="bg-[#f2f2f2]">
                      <tr>
                        <th className="p-3 border">ديرة ومحيطها</th>
                        <th className="p-3 border">بر دبي ومحيطها</th>
                        <th className="p-3 border">دبي المستحدثة (الجديدة)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 border">المرقبات، الرقة</td>
                        <td className="p-3 border">الكرامة، الرفاعة</td>
                        <td className="p-3 border">دبي مارينا (Dubai Marina)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 border">مردف، المحيصنة</td>
                        <td className="p-3 border">جميرا، أم سقيم</td>
                        <td className="p-3 border">جميرا بيتش ريزيدنس (JBR)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 border">الورقاء، الطوار</td>
                        <td className="p-3 border">البرشاء، القوز</td>
                        <td className="p-3 border">المرابع العربية (Arabian Ranches)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 border">ديرة سيتي سنتر</td>
                        <td className="p-3 border">الوصل، الصفا</td>
                        <td className="p-3 border">قرية جميرا الدائرية (JVC)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="pricing">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">أسعار كهربائي دربي وكيف نقدم سعراً رخيصاً؟</h2>
                <p>
                  <strong>كهربائي منازل رخيص في دبي</strong> لا يعني جودة منخفضة، بل يعني كفاءة في العمل وتقليل في الهدر. الكشف على الأعطال بأسعار رمزية (تبدأ من 100 درهم وتخصم إذا تم الإصلاح). 
                </p>
                <div className="bg-gray-50 border-r-4 border-green-500 p-4 mt-4">
                  <strong>نقدم تسعيراً شفافاً:</strong> قبل بدء العمل، نوضح لك المشكلة وقطع الغيار المطلوبة وتكلفة التركيب. لا تغييرات مفاجئة في الفاتورة النهائية.
                </div>
              </section>

              <section id="tips">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">نصائح لتجنب الأعطال الكهربائية والحفاظ على السلامة</h2>
                <ul className="list-disc pr-6 space-y-3">
                  <li><strong>تجنب الحمل الزائد:</strong> لا تستخدم مشترك (Extension) لتشغيل أجهزة ذات سحب عالي (الميكروويف، دفاية، مكواة) معاً في آن واحد.</li>
                  <li><strong>الصيانة الوقائية:</strong> اطلب من كهربائي فحص اللوحة الرئيسية (Distribution Board) مرة سنوياً وشد البراغي لتقليل المقاومة الكهربائية.</li>
                  <li><strong>استخدم منتجات أصلية:</strong> تجنب المقابس والكابلات المقلدة الرخيصة؛ فهي السبب الأول لاشتعال النيران لا قدر الله.</li>
                </ul>
                <Link href="/services/maintenance" className="mt-4 inline-flex items-center gap-1 text-amazon-orange font-bold hover:underline">
                  &rarr; تصفح باقات الصيانة الدورية الموفرة
                </Link>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">الأسئلة الشائعة حول خدمات كهربائي المنازل دبي</h2>
                <FAQAccordion faqs={[
                  {
                    question: 'هل يتوفر لديكم عامل كهربائي للطوارئ 24 ساعة بدبي؟',
                    answer: 'نعم، لدينا فرق طوارئ متفرغة تعمل بنظام المناوبات لتغطية الفترات الليلية وأيام العطل الرسمية للاستجابة للأعطال العاجلة في كافة أنحاء دبي.'
                  },
                  {
                    question: 'عما يبحث الناس عند طلب "كهربائي فلل دبي" منكم؟',
                    answer: 'يبحثون عن الموثوقية والمقاول المعتمد الذي يقدم خدمات التأسيس، الإنارة الديكورية، صيانة لوحات الكهرباء الكبيرة، وتوزيع الأحمال بأمان دون التسبب بـ (Tripping) مزعج للقواطع.'
                  },
                  {
                    question: 'كيف يمكنني حجز موعد مع فني كهربائي منازل؟',
                    answer: 'يمكنك ببساطة الانصال على رقمنا المباشر 0502067679، أو ترك رسالة على الواتس آب، أو الحجز عبر النموذج الموجود بنهاية هذه الصفحة.'
                  },
                  {
                    question: 'هل تقدمون ضماناً على الإصلاح؟',
                    answer: 'بالتأكيد، نعطي فترة ضمان تمتد من 30 يوماً وحتى 6 أشهر حسب طبيعة الإصلاح أو التركيب لتأكيد ثقتنا بعملنا والمواد التي نوردها.'
                  }
                ]} />
              </section>

              {/* Internal Links for SEO */}
              <section className="bg-gray-100 p-6 rounded-lg mt-8 border border-gray-200">
                <h3 className="font-bold text-lg mb-3">مقالات وخدمات ذات صلة بمدن أخرى:</h3>
                <ul className="flex flex-col gap-2">
                  <li><Link href="/electrician-in-sharjah" className="text-[#007185] hover:text-amazon-orange hover:underline">فني كهرباء منازل في الشارقة - خدمة فورية</Link></li>
                  <li><Link href="/electrician-in-ajman" className="text-[#007185] hover:text-amazon-orange hover:underline">كهربائي رخيص ومحترف بعجمان 24 ساعة</Link></li>
                  <li><Link href="/services/emergency-repair" className="text-[#007185] hover:text-amazon-orange hover:underline">كل ما تود معرفته عن أعطال الالتماس وكيفية حلها</Link></li>
                </ul>
              </section>

              {/* FAQ Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "هل يتوفر لديكم عامل كهربائي للطوارئ 24 ساعة بدبي؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "نعم، لدينا فرق طوارئ متفرغة تعمل بنظام المناوبات لتغطية الفترات الليلية وأيام العطل الرسمية للاستجابة للأعطال العاجلة في كافة أنحاء دبي."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "كيف يمكنني حجز موعد مع فني كهربائي منازل؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "يمكنك ببساطة الانصال على رقمنا المباشر 0502067679، أو ترك رسالة على الواتس آب."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "هل تقدمون ضماناً على الإصلاح؟",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "بالتأكيد، نعطي فترة ضمان تمتد من 30 يوماً وحتى 6 أشهر حسب طبيعة الإصلاح أو التركيب لتأكيد ثقتنا بعملنا والمواد التي نوردها."
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
                  <PenTool className="w-8 h-8 text-amazon-blue" />
                </span>
                <h3 className="font-bold text-xl text-amazon-blue">كهربائي دبي متاح الآن</h3>
                <p className="text-sm text-gray-500 mt-2">اتصل بنا للتدخل السريع أو حجز التركيبات</p>
              </div>

              <a href="tel:0502067679" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3.5 rounded-full shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 mb-4 border border-[#F2C200]">
                <span className="text-xs font-normal">خط ساخن مباشر</span>
                <span className="text-lg tracking-wider" dir="ltr">050 206 7679</span>
              </a>

              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-full shadow-sm transition-all duration-200 flex items-center justify-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5" /> تحدث عبر واتساب
              </a>

              <div className="border-t border-gray-100 pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">تغطية لكافة مناطق وأحياء دبي</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">خدمة طوارئ واستجابة 24 ساعة</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">فنيين خبراء بضمان جودة تام</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 shadow-sm border border-gray-200 rounded-lg">
                <h3 className="font-bold text-amazon-blue mb-4">اطلب موعد مسبق لزيارة دبي</h3>
                <BookingForm />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
