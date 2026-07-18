import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PhoneCall, Wrench, Zap, Clock, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import CoverageSection from '@/components/coverage-section';
import LiveCounter from '@/components/live-counter';

import electricianHero from '@/src/assets/images/electrician_hero_1781704550729.jpg';
import electricalRepair from '@/src/assets/images/electrical_repair_1781704567775.jpg';
import wiringInstallation from '@/src/assets/images/wiring_installation_1781704581135.jpg';
import maintenanceElectrician from '@/src/assets/images/maintenance_electrician_1781704595136.jpg';

export const metadata: Metadata = {
  title: "فني كهرباء الامارات | أفضل فني كهرباء في دبي، الشارقة وعجمان",
  description: "أفضل خدمات الكهرباء المنزلية والتجارية في دبي، عجمان، والشارقة. طوارئ 24 ساعة، إصلاح التماسات، تمديدات، وصيانة دورية مع نموذج حجز سريع.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section id="hero" className="p-4 max-w-7xl mx-auto w-full mt-4">
        <div className="relative h-64 md:h-80 bg-gradient-to-l from-amazon-orange to-[#FFD814] rounded-lg p-6 overflow-hidden shadow-sm flex items-center">
          <div className="absolute left-0 bottom-0 top-0 w-1/2 md:w-2/3 bg-cover flex justify-end overflow-hidden mix-blend-multiply opacity-30">
            <Image
              src={electricianHero}
              alt="فني كهرباء محترف في الإمارات"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-lg space-y-4 text-amazon-blue">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              أفضل فني كهرباء في بيتك خلال 30 دقيقة
            </h1>
            <p className="text-base md:text-lg font-medium text-amazon-blue/80">
              أفضل وأسرع خدمات الكهرباء المنزلية والتجارية في دبي، عجمان، والشارقة. فنيين خبراء وشغل يبيض الوجه!
            </p>
            <div className="flex gap-2 pt-2">
              <a href="#booking" className="bg-amazon-blue text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-800 transition-colors text-sm flex items-center justify-center">
                احجز الخدمة الحين
              </a>
              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="bg-white text-amazon-blue px-4 py-2 rounded-full font-bold border border-gray-300 shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-sm">
                <MessageCircle className="h-4 w-4 text-green-500 fill-current" />
                واتساب فوري
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-4 max-w-7xl mx-auto w-full">
        <div className="bg-white p-4 shadow-sm border border-gray-200">
          <h2 className="font-bold text-lg mb-3">ليش نحن خيارك الأول؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-3 items-start border-b md:border-b-0 md:border-l border-gray-100 pb-4 md:pb-0 md:pl-4 last:border-0 pl-0">
              <Clock className="w-8 h-8 text-amazon-orange flex-shrink-0" />
              <div>
                <h3 className="font-bold text-base mb-1 text-[#007185]">سرعة استجابة خيالية</h3>
                <p className="text-sm text-gray-700 leading-relaxed">نوصلك في أسرع وقت في دبي، عجمان، والشارقة، لأننا نعرف زين إن أعطال الكهربا ما تتأجل.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start border-b md:border-b-0 md:border-l border-gray-100 pb-4 md:pb-0 md:pl-4 last:border-0 pl-0">
              <ShieldCheck className="w-8 h-8 text-amazon-orange flex-shrink-0" />
              <div>
                <h3 className="font-bold text-base mb-1 text-[#007185]">شغل مضمون وموثوق</h3>
                <p className="text-sm text-gray-700 leading-relaxed">فريقنا مكون من فنيين معتمدين عندهم خبرة ميدانية طويلة. نضمن لك جودة القطع والتركيب.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start pb-4 md:pb-0">
              <CheckCircle2 className="w-8 h-8 text-amazon-orange flex-shrink-0" />
              <div>
                <h3 className="font-bold text-base mb-1 text-[#007185]">أسعار واضحة ومناسبة</h3>
                <p className="text-sm text-gray-700 leading-relaxed">نعطيك تسعيرة واضحة قبل لا نبدأ أي تصليح، وبأسعار تنافسية جداً تناسب ميزانيتك، بدون أي مفاجآت.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-4 max-w-7xl mx-auto w-full">
        <h2 className="font-bold text-lg mb-3 text-amazon-blue">خدماتنا الموصى بها لك</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Service 1 */}
          <Link href="/services/emergency-repair" className="bg-white p-3 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-1 group-hover:text-amazon-orange transition-colors"><Wrench className="w-4 h-4 text-gray-500" /> إصلاح أعطال طارئة</h3>
            <div className="relative h-32 bg-gray-100 mb-2 rounded overflow-hidden">
              <Image
                src={electricalRepair}
                alt="إصلاح أعطال طارئة"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-600 mb-2 flex-grow">تصليح فوري للأعطال الطارئة في أي وقت لضمان سلامة بيتك.</p>
            <span className="text-sm text-[#007185] font-bold group-hover:text-amazon-orange group-hover:underline mt-auto">احجز الخدمة الحين &larr;</span>
          </Link>

          {/* Service 2 */}
          <Link href="/services/wiring" className="bg-white p-3 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-1 group-hover:text-amazon-orange transition-colors"><Zap className="w-4 h-4 text-gray-500" /> تمديدات منزلية وتجارية</h3>
            <div className="relative h-32 bg-gray-100 mb-2 rounded overflow-hidden">
              <Image
                src={wiringInstallation}
                alt="تمديدات كهربائية حديثة"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-600 mb-2 flex-grow">تأسيس وتركيب تمديدات كهربائية للبيوت والمحلات التجارية.</p>
            <span className="text-sm text-[#007185] font-bold group-hover:text-amazon-orange group-hover:underline mt-auto">عرض خيارات التمديد &larr;</span>
          </Link>

          {/* Service 3 */}
          <Link href="/services/maintenance" className="bg-white p-3 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-1 group-hover:text-amazon-orange transition-colors"><ShieldCheck className="w-4 h-4 text-gray-500" /> صيانة دورية ووقائية</h3>
            <div className="relative h-32 bg-gray-100 mb-2 rounded overflow-hidden">
              <Image
                src={maintenanceElectrician}
                alt="صيانة دورية للكهرباء"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-600 mb-2 flex-grow">تشييك شامل للمجمعات واستبدال القطع قبل لا تخرب.</p>
            <span className="text-sm text-[#007185] font-bold group-hover:text-amazon-orange group-hover:underline mt-auto">تفاصيل باقات الصيانة &larr;</span>
          </Link>
        </div>
      </section>

      <section id="latest-posts" className="px-4 pb-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg text-amazon-blue">آخر المقالات والنصائح</h2>
          <Link href="/blog" className="text-sm text-[#007185] hover:text-amazon-orange hover:underline font-bold">عرض كل المقالات &larr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Post 1 */}
          <Link href="/blog/electrical-short-circuit" className="bg-white p-4 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 group-hover:text-amazon-orange transition-colors">التماس كهربائي: أسبابه ومخاطره وكيفية التعامل معه</h3>
            <p className="text-sm text-gray-600 mb-2 flex-grow line-clamp-2">يحدث التماس كهربائي عند تلامس الأسلاك بشكل خاطئ، مما يسبب شررًا أو حرارة عالية وقد يؤدي إلى تلف الأجهزة أو نشوب حرائق خطيرة.</p>
            <span className="text-xs text-[#007185] font-bold mt-auto">اقرأ المزيد &rarr;</span>
          </Link>
          
          {/* Post 2 */}
          <Link href="/blog/electrical-maintenance-company" className="bg-white p-4 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 group-hover:text-amazon-orange transition-colors">شركة صيانة كهرباء احترافية في الإمارات</h3>
            <p className="text-sm text-gray-600 mb-2 flex-grow line-clamp-2">شركة صيانة كهرباء معتمدة في دبي والشارقة وعجمان توفر لكم كهربائي منازل متاح 24 ساعة لإصلاح الأعطال والتمديدات الكهربائية.</p>
            <span className="text-xs text-[#007185] font-bold mt-auto">اقرأ المزيد &rarr;</span>
          </Link>
          
          {/* Post 3 */}
          <Link href="/blog/power-outage-reasons" className="bg-white p-4 shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow group">
            <h3 className="font-bold text-sm mb-2 group-hover:text-amazon-orange transition-colors">سبب انقطاع الكهرباء في المنزل</h3>
            <p className="text-sm text-gray-600 mb-2 flex-grow line-clamp-2">تعرف على سبب انقطاع الكهرباء في المنزل وأبرز الأعطال الكهربائية الشائعة، مع حلول فنية سريعة.</p>
            <span className="text-xs text-[#007185] font-bold mt-auto">اقرأ المزيد &rarr;</span>
          </Link>
        </div>
      </section>

      {/* Coverage Section */}
      <CoverageSection />

      {/* Booking Section */}
      <section id="booking" className="px-4 pb-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8">
            <BookingForm />
          </div>
          <div className="lg:col-span-4 space-y-4">
            <LiveCounter />
            <div className="bg-white p-4 shadow-sm border border-gray-200 max-h-min">
              <h3 className="font-bold text-lg mb-3 text-amazon-blue">عن خدمتـنا السريعة</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                سواء كنت في دبي، الشارقة، أو عجمان، اختار الخدمة والوقت اللي يناسبك عبر النموذج. فريقنا بيتواصل معاك مباشرة لتأكيد الموعد بأسرع وقت.
              </p>
              <div className="bg-[#FFF9E6] border border-[#FF9900] p-3 rounded text-sm leading-relaxed text-black">
                متوفر فني كهرباء قريب منك الآن <br/> وقت الوصول المتوقع: <strong>في غضون 30 دقيقة</strong>
              </div>
            </div>

            <div className="bg-white p-4 shadow-sm border border-gray-200 text-center">
              <h3 className="font-bold text-sm mb-2">في حالة الطوارئ؟ متاحون 24/7</h3>
              <div className="flex items-center justify-center gap-1 text-[#007185] font-bold text-sm mb-3">
                <PhoneCall className="w-4 h-4" /> +971 50 206 7679
              </div>
              <a href="https://wa.me/971502067679" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-white hover:bg-gray-50 text-amazon-blue px-4 py-2 rounded font-bold transition-colors text-sm shadow-sm border border-gray-300">
                <MessageCircle className="w-4 h-4 text-green-500 fill-current" />
                راسلنا واتساب الآن
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
