'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Wrench, ShieldCheck, MapPin } from 'lucide-react';

const services = [
  { name: 'إصلاح طوارئ', href: '/services/emergency-repair', icon: Wrench },
  { name: 'تمديدات كهرباء', href: '/services/wiring', icon: Zap },
  { name: 'صيانة وقائية', href: '/services/maintenance', icon: ShieldCheck },
];

const areas = [
  { name: 'دبي', href: '/electrician-in-dubai' },
  { name: 'الشارقة', href: '/electrician-in-sharjah' },
  { name: 'عجمان', href: '/electrician-in-ajman' },
];

export default function ServiceNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-[116px] md:top-[68px] z-40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center h-12 gap-8 whitespace-nowrap">
        <div className="flex items-center gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = pathname === service.href;
            return (
              <Link 
                key={service.href} 
                href={service.href}
                className={`text-sm font-bold flex items-center gap-1.5 py-3 border-b-2 transition-colors ${
                  isActive 
                    ? 'border-amazon-orange text-amazon-orange' 
                    : 'border-transparent text-gray-600 hover:text-amazon-orange'
                }`}
              >
                <Icon className="w-4 h-4" />
                {service.name}
              </Link>
            );
          })}
        </div>
        
        <div className="h-6 w-px bg-gray-200" />
        
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-gray-400 uppercase flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            تغطية المناطق:
          </span>
          {areas.map((area) => {
            const isActive = pathname === area.href;
            return (
              <Link 
                key={area.href} 
                href={area.href}
                className={`text-sm font-bold py-3 border-b-2 transition-colors ${
                  isActive 
                    ? 'border-amazon-orange text-amazon-orange' 
                    : 'border-transparent text-gray-600 hover:text-amazon-orange'
                }`}
              >
                {area.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
