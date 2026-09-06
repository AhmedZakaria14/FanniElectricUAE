"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-amazon-blue text-white mt-auto pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <a href="#" className="text-sm hover:underline cursor-pointer">العودة إلى الأعلى</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 text-sm">
          <div>
            <h4 className="font-bold mb-4 text-lg">تعرف علينا</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/" className="hover:underline hover:text-amazon-orange transition-colors">عن فني كهرباء الامارات</Link></li>
              <li><Link href="/" className="hover:underline hover:text-amazon-orange transition-colors">لماذا تختارنا؟</Link></li>
              <li><Link href="/" className="hover:underline hover:text-amazon-orange transition-colors">بيان الخصوصية</Link></li>
              <li><Link href="/" className="hover:underline hover:text-amazon-orange transition-colors">شروط الاستخدام</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">خدماتنا الرئيسية</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/services/emergency-repair" className="hover:underline hover:text-amazon-orange transition-colors">تصليح أعطال الكهرباء الطارئة</Link></li>
              <li><Link href="/services/maintenance" className="hover:underline hover:text-amazon-orange transition-colors">صيانة كهرباء الفلل والمباني</Link></li>
              <li><Link href="/services/wiring" className="hover:underline hover:text-amazon-orange transition-colors">مقاول تمديدات كهربائية وتأسيس</Link></li>
              <li><Link href="/services/wiring" className="hover:underline hover:text-amazon-orange transition-colors">تأسيس أنظمة المنازل الذكية</Link></li>
              <li><Link href="/services/maintenance" className="hover:underline hover:text-amazon-orange transition-colors">فحص كفاءة الكهرباء السنوية</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">مناطق الخدمة 24 ساعة</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/electrician-in-dubai" className="hover:underline hover:text-amazon-orange transition-colors">كهربائي في دبي</Link></li>
              <li><Link href="/electrician-in-sharjah" className="hover:underline hover:text-amazon-orange transition-colors">كهربائي في الشارقة</Link></li>
              <li><Link href="/electrician-in-ajman" className="hover:underline hover:text-amazon-orange transition-colors">كهربائي في عجمان</Link></li>
              <li className="pt-2 text-white font-medium border-t border-gray-700 mt-2">أحياء دبي:</li>
              <li><Link href="/electrician-in-dubai#coverage" className="hover:underline hover:text-amazon-orange transition-colors">البرشاء، مارينا، جميرا</Link></li>
              <li><Link href="/electrician-in-dubai#coverage" className="hover:underline hover:text-amazon-orange transition-colors">مردف، الورقاء، الطوار</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">روابط سريعة</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li className="font-medium text-white">أحياء الشارقة:</li>
              <li><Link href="/electrician-in-sharjah#areas" className="hover:underline hover:text-amazon-orange transition-colors">المجاز، التعاون، الخان</Link></li>
              <li><Link href="/electrician-in-sharjah#areas" className="hover:underline hover:text-amazon-orange transition-colors">مويلح، النهدة، القرائن</Link></li>
              <li className="pt-2 text-white font-medium border-t border-gray-700 mt-2">أحياء عجمان:</li>
              <li><Link href="/electrician-in-ajman#areas" className="hover:underline hover:text-amazon-orange transition-colors">النعيمية، الروضة، المويهات</Link></li>
              <li><Link href="/electrician-in-ajman#areas" className="hover:underline hover:text-amazon-orange transition-colors">الجرف، الراشدية، الحميدية</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">الدعم والمساعدة</h4>
            <ul className="space-y-2.5 text-gray-300">
              <li><Link href="/blog" className="hover:underline hover:text-amazon-orange transition-colors">المدونة والنصائح</Link></li>
              <li><Link href="/#booking" className="hover:underline hover:text-amazon-orange transition-colors">احجز موعد الآن</Link></li>
              <li><Link href="tel:+971502067679" className="hover:underline hover:text-amazon-orange transition-colors">اتصل بالدعم الفني</Link></li>
              <li><Link href="https://wa.me/971502067679" target="_blank" className="hover:underline hover:text-amazon-orange transition-colors">تواصل واتساب مباشر</Link></li>
              <li><Link href="/" className="hover:underline hover:text-amazon-orange transition-colors">الأسئلة الشائعة</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#131A22] w-full pt-8 pb-12 mt-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <Image 
            src="/logo.svg" 
            alt="فني كهرباء الامارات" 
            width={32} 
            height={32} 
            className="object-contain"
          />
          <div className="text-xl font-bold text-white leading-none">فني كهرباء الامارات</div>
        </div>
        <div className="flex items-center justify-center gap-6 text-[11px] text-gray-300 mb-2">
          <Link href="/" className="hover:underline">شروط الاستخدام</Link>
          <Link href="/" className="hover:underline">إشعار الخصوصية</Link>
          <Link href="/" className="hover:underline">إعلانات مبنية على الاهتمامات</Link>
        </div>
        <div className="text-[11px] text-gray-400">© {new Date().getFullYear()} جميع الحقوق محفوظة لشركة فني كهرباء الامارات للخدمات الكهربائية الذكية</div>
        
        <div className="mt-8 flex justify-center items-center">
          <a 
            href="https://nasharhub.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-row-reverse items-center gap-1.5 bg-[#1a242f] hover:bg-[#232f3e] border border-gray-700 hover:border-gray-500 px-5 py-2.5 rounded-full transition-all duration-300"
          >
            <span className="text-sm font-bold bg-gradient-to-r from-amazon-orange to-[#FFD814] bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(255,153,0,0.5)] tracking-wide font-sans" dir="ltr">
              NasharHub.com
            </span>
            <span className="text-[11px] text-gray-400 group-hover:text-gray-200 transition-colors">
              تم التصميم والتطوير بواسطة
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
