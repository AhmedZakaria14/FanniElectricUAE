"use client";
import { Search } from '@/components/icons';


import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';

// Mock data for search
const searchData = [
  { id: 1, title: 'إصلاح أعطال كهربائية طارئة | الموقع متاح للإيجار', href: '/services/emergency-repair', category: 'خدمات الطوارئ' },
  { id: 2, title: 'تمديدات كهربائية وتأسيس | الموقع متاح للإيجار', href: '/services/wiring', category: 'التركيبات' },
  { id: 3, title: 'صيانة دورية للمباني | الموقع متاح للإيجار', href: '/services/maintenance', category: 'الصيانة' },
  { id: 4, title: 'فني كهرباء في دبي | الموقع متاح للإيجار', href: '/services/emergency-repair', category: 'المناطق' },
  { id: 5, title: 'فني كهرباء في الشارقة | الموقع متاح للإيجار', href: '/services/emergency-repair', category: 'المناطق' },
  { id: 6, title: 'فني كهرباء في عجمان | الموقع متاح للإيجار', href: '/services/emergency-repair', category: 'المناطق' },
  { id: 7, title: 'تصليح شورت كهربائي | الموقع متاح للإيجار', href: '/services/emergency-repair', category: 'خدمات الطوارئ' },
  { id: 8, title: 'كهربائي منازل | الموقع متاح للإيجار', href: '/services/wiring', category: 'التركيبات' },
  { id: 9, title: 'فحص حراري للوحات الكهرباء | الموقع متاح للإيجار', href: '/services/maintenance', category: 'الصيانة' }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query.trim().length > 0 ? searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const showResults = isOpen && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className="relative flex flex-1 flex-row mx-0 md:mx-4 w-full items-center">
      <div className="flex h-11 md:h-10 w-full rounded-md overflow-hidden bg-white focus-within:ring-[3px] focus-within:ring-amazon-orange focus-within:ring-offset-0 transition-all">
        <input 
          type="text" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim().length > 0) setIsOpen(true);
          }}
          onFocus={() => { if (query.trim().length > 0) setIsOpen(true) }}
          placeholder="ابحث عن خدمات، فني كهرباء، إصلاح..." 
          className="w-full h-full text-black bg-transparent px-3 outline-none appearance-none text-base md:text-sm placeholder:text-gray-500 rounded-r-md"
        />
        <button className="bg-[#febd69] hover:bg-[#f3a847] w-12 flex-shrink-0 h-full flex items-center justify-center transition-colors rounded-l-md">
          <Search className="w-[1.125rem] h-[1.125rem] text-gray-900" />
        </button>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-black max-h-80 overflow-y-auto">
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                <Link 
                  href={result.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-50 last:border-0"
                >
                  <div className="font-bold text-sm text-amazon-blue">{result.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{result.category}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {showResults && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-black p-4 text-center text-sm text-gray-500">
          لا توجد نتائج لـ &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
