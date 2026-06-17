'use client';

import { useState, useEffect } from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LiveCounter() {
  const [count, setCount] = useState(42); 
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    // Set initial count based on current time after mount to avoid hydration mismatch
    const hour = new Date().getHours();
    const liveCount = 10 + Math.floor(hour * 2.5);
    
    // Using setTimeout to avoid synchronous setState in effect warning
    const timeout = setTimeout(() => {
      setCount(liveCount);
    }, 0);

    const interval = setInterval(() => {
      // Small chance to increment to simulate real behavior
      if (Math.random() > 0.7) {
        setCount(prev => prev + 1);
        setShowPulse(true);
        setTimeout(() => setShowPulse(false), 2000);
      }
    }, 15000); // Check every 15 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center justify-between overflow-hidden relative group">
      <div className="flex items-center gap-3 z-10">
        <div className="bg-green-100 p-2.5 rounded-full relative">
          <Users className="w-5 h-5 text-green-600" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">تمت خدمتهم اليوم بنجاح</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-amazon-blue tabular-nums">
              {count}
            </span>
            <span className="text-xs text-green-600 font-bold flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />
              مباشر
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPulse && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100 flex items-center gap-1"
          >
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
            عميل جديد!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Users className="w-24 h-24" />
      </div>
    </div>
  );
}
