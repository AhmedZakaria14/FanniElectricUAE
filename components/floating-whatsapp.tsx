import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a href="https://wa.me/971522815005" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-4 border-white">
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="sr-only">تواصل معنا عبر واتساب</span>
      </a>
    </div>
  );
}
