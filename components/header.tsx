import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall } from 'lucide-react';
import SearchBar from '@/components/search-bar';

export default function Header() {
  return (
    <header className="bg-amazon-blue text-white sticky top-0 z-50 flex flex-col shadow-md">
      <div className="p-3 flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto w-full">
        {/* Top items & Logo row for mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
              <Image 
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png" 
                alt="فني كهرباء الامارات" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <div>فني كهرباء الامارات<br/><span className="text-[10px] text-white tracking-widest font-normal uppercase">FANNIELECTRICUAE</span></div>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
             <a href="tel:+971522815005" className="text-white hover:text-amazon-orange flex items-center gap-1">
               <PhoneCall className="h-5 w-5" />
             </a>
          </div>
        </div>

        {/* Search Bar - Client Component */}
        <SearchBar />

        {/* Desktop Phone */}
        <div className="hidden md:flex items-center gap-4 ml-2">
          <a href="tel:+971522815005" className="flex flex-col items-end border border-transparent hover:border-white p-1 cursor-pointer rounded">
            <span className="text-[10px] text-gray-300">دعم فوري</span>
            <span dir="ltr" className="text-sm font-bold flex items-center gap-1"><PhoneCall className="h-4 w-4" />+971 52 281 5005</span>
          </a>
        </div>
      </div>
      <nav className="bg-[#37475A] text-white text-sm px-4 py-2 flex items-center gap-6 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-6">
          <Link href="/#hero" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">الرئيسية</Link>
          <Link href="/services/emergency-repair" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">إصلاح أعطال</Link>
          <Link href="/services/wiring" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">تمديدات</Link>
          <Link href="/services/maintenance" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">صيانة</Link>
          <Link href="/blog" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">المدونة</Link>
          <Link href="/#booking" className="hover:border-white border border-transparent p-1 shadow-sm font-medium">احجز الحين</Link>
          <div className="mr-auto text-amazon-orange font-bold hidden md:block">فنيون كهرباء 24 ساعة</div>
        </div>
      </nav>
    </header>
  );
}
