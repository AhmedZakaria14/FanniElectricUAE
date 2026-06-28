'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export default function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="bg-[#F8F9FA] border border-gray-200 rounded-lg p-5 mb-8">
      <h3 className="font-bold text-lg text-amazon-blue flex items-center gap-2 mb-4 border-b pb-2">
        <List className="w-5 h-5 text-amazon-orange" /> جدول المحتويات
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`text-sm md:text-base hover:text-amazon-orange transition-colors flex items-center gap-2 ${
                activeId === item.id ? 'text-amazon-orange font-bold' : 'text-gray-700'
              }`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(item.id);
                }
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amazon-orange/50 flex-shrink-0" />
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
