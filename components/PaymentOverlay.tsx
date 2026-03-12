'use client';

import { useEffect } from 'react';
import { X, Lock, CreditCard } from 'lucide-react';

interface PaymentOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function PaymentOverlay({ isVisible, onClose }: PaymentOverlayProps) {
  useEffect(() => {
    // Prevent body scroll when overlay is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative mx-4 max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900 sm:mx-auto sm:p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
            <Lock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
            Payment Required
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            This website is awaiting full payment completion
          </p>
        </div>

        {/* Payment Info */}
        <div className="mb-6 rounded-lg bg-gray-50 p-4 dark:bg-zinc-800">
          <div className="flex items-start space-x-3">
            <CreditCard className="mt-1 h-5 w-5 text-gray-400" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Outstanding Balance
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Please contact the developer to complete payment and unlock full functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          This message will remain until payment is completed.
        </p>
      </div>
    </div>
  );
}
