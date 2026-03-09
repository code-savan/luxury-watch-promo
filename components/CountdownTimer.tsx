'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  label?: string;
}

export default function CountdownTimer({ label = 'FLASH PROMO ENDS IN' }: CountdownTimerProps) {
  // Set a default countdown of 2 hours, 15 minutes, 30 seconds for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
        {label}
      </p>
      <div className="flex space-x-2">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-black text-lg sm:text-xl font-bold text-white shadow-md dark:bg-zinc-800">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <span className="mt-1 text-[10px] sm:text-xs font-medium text-gray-500">HRS</span>
        </div>
        <span className="text-xl sm:text-2xl font-bold text-black dark:text-white">:</span>
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-black text-lg sm:text-xl font-bold text-white shadow-md dark:bg-zinc-800">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span className="mt-1 text-[10px] sm:text-xs font-medium text-gray-500">MIN</span>
        </div>
        <span className="text-xl sm:text-2xl font-bold text-black dark:text-white">:</span>
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md bg-red-600 text-lg sm:text-xl font-bold text-white shadow-md">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <span className="mt-1 text-[10px] sm:text-xs font-medium text-gray-500">SEC</span>
        </div>
      </div>
    </div>
  );
}
