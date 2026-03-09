'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const names = ['Emeka', 'Chinedu', 'Tunde', 'Ibrahim', 'Oluwaseun', 'Musa', 'Kelechi', 'Ade', 'Nnamdi', 'Suleiman'];
const locations = ['Abuja', 'Lagos', 'Port Harcourt', 'Kano', 'Ibadan', 'Enugu', 'Kaduna', 'Benin City', 'Asaba'];

export default function PurchaseNotification() {
  const [notification, setNotification] = useState<{ name: string; location: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      setNotification({ name: randomName, location: randomLocation });

      // Hide notification after 4 seconds
      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }, 10000); // Show every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-24 left-4 z-50 flex justify-start sm:bottom-8 sm:left-8">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex items-center space-x-2 sm:space-x-3 rounded-lg border border-gray-200 bg-white p-2 sm:p-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                <span className="font-bold">{notification.name}</span> from {notification.location}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                just ordered this watch
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
