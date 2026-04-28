'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    color: 'Rose Gold',
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send to our API route
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      setIsSuccess(true);

      // Redirect to WhatsApp
      const businessNumber = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP_NUMBER || '2348103796277';
      const message = `Hello, I am interested in buying a Richard Millie Ferrari (${formData.color}) at the promo price of ₦85,000.\n\n*Order Details:*\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nPlease confirm my order.`;
      const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

      // Delay slightly to show success message before redirecting
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1500);

    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
};

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-900/50 dark:bg-green-900/20">
        <h3 className="mb-2 text-xl font-bold text-green-800 dark:text-green-400">Order Received!</h3>
        <p className="text-green-700 dark:text-green-300">
          Redirecting you to WhatsApp to confirm your order...
        </p>
      </div>
    );
}

  return (
    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="mb-1 block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-white dark:focus:ring-white"
          placeholder="e.g. Emeka Johnson"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone / WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-white dark:focus:ring-white"
          placeholder="e.g. 08012345678"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address <span className="text-gray-400">(Optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-white dark:focus:ring-white"
          placeholder="e.g. emeka@example.com"
        />
      </div>

      <div>
        <label htmlFor="color" className="mb-1 block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Watch Color <span className="text-red-500">*</span>
        </label>
        <select
          id="color"
          name="color"
          required
          value={formData.color}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-white dark:focus:ring-white"
        >
          <option value="Rose Gold">Rose Gold</option>
          <option value="Silver">Silver</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
        </select>
      </div>

      <div>
        <label htmlFor="address" className="mb-1 block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          Full Delivery Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-white dark:focus:ring-white"
          placeholder="House number, Street name, City, State"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 sm:py-4 text-center text-base sm:text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          'CLAIM MY ₦13,000 DISCOUNT'
        )}
      </button>

      <p
        className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
        🔒 Safe & Secure Checkout. Pay on Delivery available in select locations.
      </p>
    </form>
);
}
