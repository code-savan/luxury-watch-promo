'use client';

import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.querySelector('form#checkout-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 sm:p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-900 sm:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <button
        onClick={scrollToForm}
        className="w-full rounded-lg bg-red-600 py-3 sm:py-4 text-center text-base sm:text-lg font-bold uppercase tracking-wider text-white shadow-lg hover:bg-red-700 active:scale-95 transition-all"
      >
        Order now to claim discount
      </button>
    </div>
  );
}
