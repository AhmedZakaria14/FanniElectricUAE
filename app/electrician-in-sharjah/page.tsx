import { ChevronRight,Clock,Info,MapPin,MessageCircle,ShieldCheck,Zap } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

import BookingForm from '@/components/booking-form';
import FAQAccordion from '@/components/faq-accordion';
import ServiceNav from '@/components/service-nav';

import heroImage from '@/src/assets/images/sharjah_electrician_1781708718738.jpg';
import maintenanceImage from '@/src/assets/images/emergency_repair_2_1781705617033.jpg';

export const metadata = {
  title: 'كهربائي في الشارقة - 0502067679 فني كهرباء منازل سريع وأرخص سعر',
  description: 'أفضل كهربائي في الشارقة متاح 24 ساعة مع خدمة فورية من شركة فني كهرباء الامارات، مقاول كهرباء لتأسيس الفلل وتصليح الأعطال في الشارقة.',
  keywords: 'كهربائي في الشارقة, كهربائي الشارقة, فني كهرباء الشارقة, كهربائي منازل الشارقة, تصليح كهرباء الشارقة',
};

export default function ElectricianInSharjah() {
  return (
    <>
      <div className="bg-[#F3F3F3] text-xs py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/" className="hover:underline hover:text-amazon-orange">المناطق</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amazon-blue font-bold">كهربائي في الشارقة</span>
        </div>
      </div>

      <ServiceNav />

      <div className="max-w-7xl mx-auto px-4 w-full py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amazon-orange text-white text-xs font-bold px-3 py-1 rounded">خدمة الشارقة الفورية</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-amazon-blue mb-6 leading-tight">
                كهربائي في الشارقة - خبرة واسعة وسرعة استجابة في كافة أعمال الكهرباء
              </h1>

              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image 
                  src={heroImage} 
                  alt="فني كهرباء يعمل في الشارقة" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
                <p>
                  يعد دمج الخدمات السريعة والموثوقة أمراً محورياً لكل منزل، ومما لا شك فيه أن <strong>كهربائي في الشارقة</strong> يعد هو الحل المثالي لكل من يبحث عن فني متخصص ذو مصداقية وقادر على التعامل مع جميع الأعطال الكهربائية المعقدة قبل البسيطة. 
                  نحن في موقع <strong>فني كهرباء الامارات (FanniElectricUAE)</strong> نوفر لك أمهر الفنيين وأحدث الأدوات للقيام بكافة الأعمال، من تمديدات الإنارة، تغيير اللوحات الرئيسية (DB Sets)، وتحديث التأسيس الكامل المتوافق مع اشتراطات هيئة كهرباء ومياه الشارقة (SEWA).
                </p>
                <p>
                  الكهرباء ليست رفاهية يمكن تأجيل إصلاحها. أعطال الالتماسات وذوبان الأسلاك خطر داهم، وهذا ما يدفعنا لتوفير خط ساخن <strong>0502067679</strong> لطلب عامل أو <strong>فني كهربائي منازل بالشارقة</strong> يعمل على مدار الـ 24 ساعة ويصلك لأي حي بكل سرعة مجهزاً بقطع غيار أصلية وموثوقة.
                </p>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b pb-3 text-amazon-blue">
                <Info className="w-6 h-6 text-amazon-orange" /> جدول المحتويات
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-[#007185]">
                <li><a href="#pro-electrician" className="hover:underline hover:text-amazon-orange">دور بهترین كهربائي منازل في الشارقة</a></li>
                <li><a href="#services" className="hover:underline hover:text-amazon-orange">خدمات صيانة وتركيب الكهرباء بالشارقة</a></li>
                <li><a href="#villa" className="hover:underline hover:text-amazon-orange">أعمال كهرباء الفلل والقصور</a></li>
                <li><a href="#tools" className="hover:underline hover:text-amazon-orange">ما الأجهزة والأدوات المستخدمة لدينا؟</a></li>
                <li><a href="#emergency" className="hover:underline hover:text-amazon-orange">كهربائي طوارئ في الشارقة 24 ساعة</a></li>
                <li><a href="#areas" className="hover:underline hover:text-amazon-orange">أين تجدنا في أحياء الشارقة؟</a></li>
                <li><a href="#faq" className="hover:underline hover:text-amazon-orange">الأسئلة المتكررة (FAQ)</a></li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border border-gray-200 rounded-lg space-y-10 prose max-w-none text-gray-700 text-base md:text-lg leading-relaxed">
              
              <section id="pro-electrician">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">مميزات أفضل كهربائي منازل في الشارقة</h2>
                <p>
                  ليس كل عاملاً يحمل مِفكاً يعتبر فني موثوق. الكهرباء نظام حي يدير منزلك ويتطلب فهماً عميقاً. اختيارك لنا يضمن لك الميزات القادمة:
                </p>
                <ul className="list-disc pr-6 space-y-2 mt-4">
                  <li><strong>الخبرة الفنية الممتدة:</strong> معرفة شاملة بطبيعة أحمال كهرباء الشارقة والمباني القديمة والحديثة فيها التي تتطلب طرقاً مختلفة للتعامل.</li>
                  <li><strong>التجهيزات الحديثة:</strong> نكشف عن العطل بجهاز التلف الحراري (Thermal Image) لمعرفة الكيابل التي تسخن خلف الجدران بدون تكسير عشوائي.</li>
                  <li><strong>الأمان واشتراطات الدوائر الحكومية:</strong> أعمالنا متطابقة تماماً مع مقاييس (SEWA) والأنظمة المحلية لمنع الغرامات أو المخاطر.</li>
                </ul>
              </section>

              <section id="services">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">خدمات كهربائي الشارقة وما نقدمه لكم</h2>
                <p>تتضمن حزمتنا الخدماتية الشاملة كل ما تطلبه من تأسيس، إصلاح، وتحديث:</p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-50 text-amazon-blue flex items-center justify-center rounded-full font-bold text-xl">1</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amazon-blue">تركيب الإنارة والديكور</h4>
                      <p className="text-sm mt-1">تجهيز الإضاءات المتطورة، سحب وتمديد اسبوتات الليد (LED Spotlights)، تعليق وتثبيت النجف والثريات الكبيرة بحرص فائق لكي لا تتضرر الأسقف (Gypsum Board).</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-50 text-amazon-blue flex items-center justify-center rounded-full font-bold text-xl">2</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amazon-blue">تصليح الماس وانقطاع التيار</h4>
                      <p className="text-sm mt-1">متخصصون في العثور على مصدر قفلة (Short Circuit) الكهرباء. إذا كانت القواطع تفصل باستمرار (Tripping)، نقوم بإعادة توزيع الأحمال وعزل الخط المُعاب بأحدث الأجهزة.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-50 text-amazon-blue flex items-center justify-center rounded-full font-bold text-xl">3</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amazon-blue">توصيل سخانات المياه ومضخات الخزانات</h4>
                      <p className="text-sm mt-1">كهرباء الماء من أخطر المزيج، نوفر صيانة وتركيب آمن تماماً لمحركات الضخ والسخانات بحيث لا تتسرب أي ذرة تيار إلى خطوط المياه.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="villa">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">كهربائي فلل في الشارقة للأعمال الإنشائية</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3">
                    <Image src={maintenanceImage} alt="تصليح وتأسيس كهرباء الشارقة" className="rounded-lg shadow flex-shrink-0" width={400} height={300} />
                  </div>
                  <div className="flex-1">
                    <p>
                      الفيلا أو البناء الضخم يتطلب &quot;معلم كهربائي&quot; ذو رؤية هندسية، فالتأسيس السيء للفيلا سيكلفك لاحقاً الكثير. 
                      نحن نقدم خدمات متكاملة لتمديدات العظم قبل مرحلة البلاط والمحارة. مقاولو الكهرباء لدينا يؤمنون تأسيس الدوائر المنفصلة للتكييف (AC), والمطابخ (Kitchen Load), والإنارة. لضمان عدم تأثر المنزل كامل بعطل في أحد فروعه.
                    </p>
                    <Link href="/services/wiring" className="mt-4 inline-flex items-center gap-1 text-amazon-orange font-bold hover:underline">
                      &rarr; اكتشف خدمات أعمال تأسيس الفلل
                    </Link>
                  </div>
                </div>
              </section>

              <section id="tools">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">الأدوات الاحترافية مع فني الكهرباء المعتمد</h2>
                <p>لماذا ننجز مهامنا في وقت قياسي وبدقة؟ يعود الفضل للأدوات التي ترافق الفني دائماً:</p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>المقاييس المتعددة (Multimeters):</strong> لاختبار الجهد، التيار، وتوصيل الأسلاك بدقة.</li>
                  <li><strong>أجهزة كشف التماس المخفية (Wire Trackers):</strong> نحدد مشكلة الحائط من الخارج دون التكسير العشوائي الذي يشوه منزلك.</li>
                  <li><strong>المفكات العازلة وحقيبة الأمان:</strong> معدات معتمدة تتحمل ضغط تصل إلى 1000 فولت.</li>
                </ul>
              </section>

              <section id="emergency">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">كهربائي منازل قريب مني - خدمة طوارئ 24 ساعة</h2>
                <p>
                  الشارقة مدينة تنبض بالحياة، سواء كنت في التعاون، أو القاسمية، أو حتى المجاز. عندما تبحث عن <strong>كهربائي منازل قريب مني</strong> فنحن الأقرب بفضل فرقنا المتنقلة والمستعدة لنداءات الطوارئ:
                </p>
                <div className="bg-red-50 p-4 border-r-4 border-red-500 rounded mt-4">
                  <h4 className="font-bold text-red-700">متى تطلب طوارئ؟</h4>
                  <p className="text-sm mt-1 text-red-900">
                    رائحة احتراق بلاستيك مميزة قادمة من اللوحة، شرارة عند إدخال الفيشة، انقطاع التيار عن غرفة وتواجدها بالباقي، أو صدمة كهربائية خفيفة عند لمس الأجهزة كالغسالة. <strong>لا تلمس شيئاً</strong> واتصل مباشرة بـ 0502067679.
                  </p>
                </div>
              </section>

              <section id="areas">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">أين تجدنا في أحياء الشارقة؟</h2>
                <p>التوزيع الجغرافي لفنيي كهرباء الامارات يغطي إمارة الشارقة بشكل ممتاز:</p>
                <p className="mt-3 leading-loose">
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">المجاز</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">التعاون</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">النهدة (الشارقة)</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">القرائن</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">الرحمانية</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">منطقة الخان</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">مويلح التجارية</span>
                  <span className="inline-block bg-gray-100 px-3 py-1 m-1 rounded border">المناطق الصناعية كافة</span>
                </p>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-amazon-blue mb-4 border-b pb-2">سؤال وجواب حول خدمات كهرباء الشارقة</h2>
                <FAQAccordion faqs={[
                  {
                    question: 'هل يتوفر فني كهرباء سريع وقريب ليلاً؟',
                    answer: 'بالطبع، نخصص فريقاً يعمل طوال الليل للإصلاحات العاجلة في مناطق الشارقة دون تطبيق رسوم مبالغ بها.'
                  },
                  {
                    question: 'ما الذي يميز أسعاركم في الشارقة؟',
                    answer: 'التسعير العادل والمسبق. لا نفاجئك، يتم تشخيص العطل بكشف يبدأ من أسعار رمزية يُخصم في حال الإصلاح، ونخبرك تكلفة قطع الغيار مع ضمان عليها قبل البدء.'
                  },
                  {
                    question: 'هل كهربائي الفلبيني أو الهندي متوفر؟',
                    answer: 'نعم، يعمل لدينا خليط من الفنيين متعددي الجنسيات والخبرات والمدربين بشكل عالٍ للتعامل مع العملاء والتصليح بمنتهى المهارة والالتزام.'
                  }
                ]} />
              </section>

              {/* Internal Links */}
              <section className="bg-gray-100 p-6 rounded-lg mt-8 border border-gray-200">
                <h3 className="font-bold text-lg mb-3">قد يهمك أيضاً:</h3>
                <ul className="flex flex-col gap-2">
                  <li><Link href="/electrician-in-dubai" className="text-[#007185] hover:text-amazon-orange hover:underline">كهربائي منازل في دبي - فروع شركتنا</Link></li>
                  <li><Link href="/electrician-in-ajman" className="text-[#007185] hover:text-amazon-orange hover:underline">خدمات كهربائي عجمان بأسعار منافسة</Link></li>
                  <li><Link href="/services/maintenance" className="text-[#007185] hover:text-amazon-orange hover:underline">عقود الصيانة الوقائية السنوية في الشارقة لحماية أجهزتك وكهربائك</Link></li>
                </ul>
              </section>

            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 shadow-sm border border-gray-200 sticky top-24 rounded-lg">
              <div className="text-center mb-6">
                <span className="inline-block p-4 rounded-full bg-blue-50 mb-3">
                  <Zap className="w-8 h-8 text-amazon-blue" />
                </span>
                <h3 className="font-bold text-xl text-amazon-blue">فني كهرباء الشارقة متاح</h3>
                <p className="text-sm text-gray-500 mt-2">نرد على اتصالك في الحال، ونرسل الفني لموقعك</p>
              </div>

              <a href="tel:0502067679" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-bold py-3.5 rounded-full shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-1 mb-4 border border-[#F2C200]">
                <span className="text-xs font-normal">تواصل مباشر</span>
                <span className="text-lg tracking-wider" dir="ltr">050 206 7679</span>
              </a>

              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-full shadow-sm transition-all duration-200 flex items-center justify-center gap-2 mb-6">
                <MessageCircle className="w-5 h-5" /> دردشة الاستفسارات واتساب
              </a>

              <div className="border-t border-gray-100 pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">نصل مويلح، النهدة والمناطق الصناعية</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">طوارئ يومية 24/7 دون تأخير</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">تطبيق صارم لمواصفات SEWA</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 shadow-sm border border-gray-200 rounded-lg">
                <h3 className="font-bold text-amazon-blue mb-4">اطلب دعم كهربائي مسبق للشارقة</h3>
                <BookingForm />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
