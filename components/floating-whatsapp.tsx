"use client";
import { MessageCircle,Phone } from '@/components/icons';


export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a 
        href="tel:+20 10 10742430" 
        className="bg-amazon-blue hover:bg-gray-800 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-4 border-white animate-bounce-slow"
      >
        <Phone className="w-8 h-8" />
        <span className="sr-only">اتصل بنا الآن</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/+20 10 10742430" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-4 border-white"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="sr-only">تواصل معنا عبر واتساب</span>
      </a>
    </div>
  );
}
