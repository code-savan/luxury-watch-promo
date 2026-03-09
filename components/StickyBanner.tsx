'use client';

import { useState, useEffect } from 'react';

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-center bg-red-600 px-2 py-1.5 sm:px-4 sm:py-2 text-center text-[10px] sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider text-white shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <span className="animate-pulse whitespace-nowrap">🔥 FLASH SALE – ₦13,000 DISCOUNT ENDS SOON 🔥</span>
    </div>
  );
}
