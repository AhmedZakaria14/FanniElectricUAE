'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, ShieldCheck, Hammer } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    name: 'تصليح أعطال وطوارئ',
    href: '/services/emergency-repair',
    icon: Zap,
  },
  {
    name: 'تمديدات وتأسيس كهرباء',
    href: '/services/wiring',
    icon: Hammer,
  },
  {
    name: 'صيانة وفحص دوري',
    href: '/services/maintenance',
    icon: ShieldCheck,
  },
];

export default function ServiceNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b sticky top-[120px] md:top-[94px] z-30 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-start md:justify-center gap-2 py-2 overflow-x-auto no-scrollbar scroll-smooth">
          {services.map((service) => {
            const isActive = pathname === service.href;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full transition-all text-[13px] font-bold border whitespace-nowrap",
                  isActive
                    ? "bg-[#232F3E] text-white border-[#232F3E] shadow-sm"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-amazon-blue"
                )}
              >
                <service.icon className={cn("w-4 h-4", isActive ? "text-amazon-orange" : "text-amazon-orange")} />
                {service.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
