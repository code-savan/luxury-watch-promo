'use client';


import { motion } from 'motion/react';
import Image from 'next/image';
import { Shield, Watch, CheckCircle2, Package, Star, Clock, ArrowRight, Truck } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import PurchaseNotification from '@/components/PurchaseNotification';
import OrderForm from '@/components/OrderForm';
import StickyBanner from '@/components/StickyBanner';
import StickyCTA from '@/components/StickyCTA';

export default function LandingPage() {
  const scrollToForm = () => {
    const formElement = document.querySelector('form#checkout-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans dark:bg-zinc-950">
      <StickyBanner />
      <StickyCTA />
      <PurchaseNotification />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-red-600"></span>
                LIMITED TIME OFFER
              </div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                The Watch That Instantly Upgrades Your Presence
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg lg:mx-0">
                When a Man Walks Into a Room… People Notice His Watch. Your watch silently communicates success, confidence, and taste.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center space-y-4 lg:items-start">
                <div className="flex items-end space-x-4">
                  <span className="text-3xl font-black text-red-600 dark:text-red-500 sm:text-4xl font-bold">₦85,000</span>
                  <span className="text-lg text-gray-400 line-through dark:text-gray-500 sm:text-xl">₦98,000</span>
                </div>
                <p className="font-bold text-green-600 dark:text-green-400">You Save ₦13,000 Instantly</p>
              </div>

              <div className="mt-8 rounded-xl border border-red-100 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-950/20 sm:p-6">
                <CountdownTimer label="FLASH PROMO ENDS IN" />
              </div>

              <div className="mt-8">
                <button
                  onClick={scrollToForm}
                  className="group flex w-full items-center justify-center rounded-lg bg-black px-6 py-3 text-base font-bold uppercase tracking-wide text-white transition-all hover:bg-gray-900 hover:shadow-xl active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-100 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  Order now to claim discount
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-3 text-sm text-gray-500">Only 17 units remaining today.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image src="/productimage1.jpeg" alt="Hero Product Shot" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COUNTDOWN PROMO BANNER (Inline) */}
      <section className="bg-black py-4 text-white dark:bg-zinc-900 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-yellow-500 sm:text-xl">
            Once the timer ends, the price returns to ₦98,000.
          </p>
        </div>
      </section>

      {/* 3. IMAGE/VIDEO GALLERY */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Bold Square Design. Precision Detailing. Unmistakable Presence.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              This Luxury Sports Watch was designed for men who want a powerful, modern, high-status look without spending hundreds of thousands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image src="/productimage2.jpeg" alt="Gallery Image 1" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image src="/productimage3.jpeg" alt="Gallery Image 2" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <video src="/productvideo1.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY THIS WATCH STANDS OUT */}
      <section className="bg-gray-50 py-16 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              ⚡ WHY THIS WATCH IS SELLING FAST
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="space-y-8 sm:space-y-10">
                <div className="flex">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black sm:h-12 sm:w-12">
                    <span className="font-display text-lg font-bold sm:text-xl">1</span>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-bold text-black dark:text-white sm:text-xl">Elite Luxury Design</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                      Inspired by some of the most expensive watches in the world, this bold square design immediately gives off a premium luxury look. People will assume it costs far more than it actually does.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black sm:h-12 sm:w-12">
                    <span className="font-display text-lg font-bold sm:text-xl">2</span>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-bold text-black dark:text-white sm:text-xl">Built for Style AND Comfort</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                      This watch isn't just stylish — it's built for daily wear. You get luxury appearance + everyday durability.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black sm:h-12 sm:w-12">
                    <span className="font-display text-lg font-bold sm:text-xl">3</span>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="text-lg font-bold text-black dark:text-white sm:text-xl">A Watch That Gets Noticed</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                      Many watches look ordinary. This one doesn't. The multi-dial design and bold structure make it instantly eye-catching. Don't be surprised when people ask: "Where did you get that watch?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image src="/productimage4.jpeg" alt="Detail Shot 1" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative mt-8 aspect-[3/4] w-full overflow-hidden rounded-xl sm:mt-12">
                <Image src="/productimage5.jpeg" alt="Detail Shot 2" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT BENEFITS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image src="/productimage6.jpeg" alt="Feature Shot 1" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative mt-8 aspect-[3/4] w-full overflow-hidden rounded-xl sm:mt-12">
                <Image src="/productimage7.jpeg" alt="Feature Shot 2" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Premium Features
              </h2>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                Every detail is crafted to perfection, ensuring you look your best while enjoying maximum comfort.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Luxury square dial design',
                  'Premium rubber strap',
                  'Stainless steel case',
                  'Scratch resistant glass',
                  'Multi dial display',
                  'Comfortable daily wear',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 sm:h-6 sm:w-6" />
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-200 sm:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                  onClick={scrollToForm}
                  className="w-full rounded-lg bg-red-600 py-3 text-center text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-red-700 active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  Order now to claim discount
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIFESTYLE SECTION */}
      <section className="bg-black py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
              💼 PERFECT FOR EVERY OCCASION
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
              One watch that elevates every outfit.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] w-full min-h-[400px] overflow-hidden rounded-xl border-zinc-800 bg-zinc-900 lg:aspect-auto lg:h-full">
                <video src="/productvideo2.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border-zinc-800 bg-zinc-900">
                <Image src="/productimage8.jpeg" alt="Lifestyle Image" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <ul className="space-y-3">
                  {['Business meetings', 'Parties & events', 'Casual luxury outfits', 'Special occasions', 'Everyday wear'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle2 className="mr-3 h-5 w-5 text-yellow-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT YOU RECEIVE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                📦 WHAT YOU RECEIVE
              </h2>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                Every order comes with everything you need. Perfect for personal use or gifting.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-6">
                <div className="flex items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-4">
                  <Watch className="h-6 w-6 text-black dark:text-white sm:h-8 sm:w-8" />
                  <span className="ml-4 text-base font-bold text-gray-900 dark:text-white sm:text-lg">Luxury Sports Watch</span>
                </div>
                <div className="flex items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-4">
                  <Package className="h-6 w-6 text-black dark:text-white sm:h-8 sm:w-8" />
                  <span className="ml-4 text-base font-bold text-gray-900 dark:text-white sm:text-lg">Premium Watch Box</span>
                </div>
                <div className="flex items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-4">
                  <Shield className="h-6 w-6 text-black dark:text-white sm:h-8 sm:w-8" />
                  <span className="ml-4 text-base font-bold text-gray-900 dark:text-white sm:text-lg">Protective Packaging</span>
                </div>
              </div>
            </div>

            <div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image src="/productimage9.jpeg" alt="Packaging Shot" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF */}
      <section className="bg-gray-50 py-16 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              ⭐ WHY CUSTOMERS LOVE THIS WATCH
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
              This watch is one of the fastest-selling luxury accessories right now.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-4 sm:gap-6">
              {[
                "Looks far more expensive than it costs",
                "Extremely stylish and unique",
                "Comfortable to wear all day",
                "Instantly upgrades your outfit"
              ].map((review, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                    ))}
                  </div>
                  <p className="mt-3 text-base font-medium text-gray-900 dark:text-gray-200 sm:mt-4 sm:text-lg">"{review}"</p>
                  <p className="mt-2 text-xs text-gray-500 sm:text-sm">Verified Buyer</p>
                </div>
              ))}
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full min-h-[400px] overflow-hidden rounded-xl lg:aspect-auto lg:h-full">
                <Image src="/productimage10.jpeg" alt="Customer Review Shot" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 PROMOTION SECTION */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            ⏳ FLASH PROMO HAPPENING RIGHT NOW
          </h2>
          <p className="mt-4 text-lg font-medium text-red-600 dark:text-red-500 sm:text-xl">LIMITED TIME DISCOUNT</p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl border-2 border-red-100 bg-white p-6 shadow-2xl dark:border-red-900/30 dark:bg-zinc-900 sm:p-8">
            <p className="text-base font-bold text-gray-500 line-through sm:text-xl">Normal Price: ₦98,000</p>
            <p className="mt-2 text-4xl font-black text-black dark:text-white sm:text-5xl">Today Only:</p>
            <p className="mt-4 text-5xl font-black text-red-600 dark:text-red-500 sm:text-6xl">🔥 ₦85,000</p>
            <p className="mt-4 text-sm font-bold text-green-600 dark:text-green-400 sm:text-base">You Save ₦13,000 Instantly</p>

            <div className="mt-6 border-t border-gray-100 pt-6 dark:border-zinc-800 sm:mt-8 sm:pt-8">
              <CountdownTimer label="FLASH PROMO ENDS IN" />
            </div>

            <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:text-sm">Once the timer ends, the price returns to ₦98,000.</p>
          </div>
        </div>
      </section>

      {/* 9. SCARCITY SECTION */}
      <section className="bg-red-600 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                ⚠ HIGH DEMAND ALERT
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
                ONLY A FEW UNITS LEFT
              </h2>
              <p className="mt-4 text-lg font-medium text-red-100 sm:text-xl">
                Due to the ₦13,000 promo discount, orders are coming in quickly. We currently have very limited units remaining.
              </p>

              <div className="mt-8 rounded-xl bg-white p-6 text-center text-black shadow-xl">
                <p className="text-base font-bold uppercase text-red-600 sm:text-lg">⚠ Stock Remaining Today</p>
                <p className="mt-2 font-display text-5xl font-black sm:text-6xl">17</p>
                <p className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-widest sm:text-sm">Watches Left</p>
              </div>

              <div className="mt-8 space-y-4 text-base font-medium text-red-100 sm:text-lg">
                <p>If stock runs out:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-800 text-sm font-bold">X</span>
                    Promo price disappears
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-800 text-sm font-bold">X</span>
                    Price returns to ₦98,000
                  </li>
                </ul>
                <p className="mt-4 italic">Once these sell out, the next restock may take weeks.</p>
              </div>
            </div>

            <div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border-red-400 bg-red-700/50">
                <Image src="/productimage11.jpeg" alt="Scarcity Shot" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              ❓ FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
            {[
              {
                q: "Is the watch durable?",
                a: "Yes. It is built with a strong stainless steel case and scratch-resistant glass designed for daily use."
              },
              {
                q: "Is the strap comfortable?",
                a: "Yes. The premium rubber strap is flexible, breathable, and comfortable for long wear."
              },
              {
                q: "Does it come with a box?",
                a: "Yes. Every order comes with a premium watch box and protective packaging."
              },
              {
                q: "How long does delivery take?",
                a: "Delivery typically takes 2–5 business days depending on your location."
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">{faq.q}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. FINAL URGENCY & CHECKOUT */}
      <section id="checkout-form" className="bg-gray-50 py-16 dark:bg-zinc-900/50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                ⏳ LAST CALL
              </h2>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-xl">
                The ₦85,000 promo price will not last. Don't miss the opportunity to own this bold luxury watch at the discounted price.
              </p>

              <div className="mt-8 rounded-xl border border-red-200 bg-white p-6 text-center shadow-xl dark:border-red-900/30 dark:bg-zinc-900 sm:p-8">
                <p className="text-base font-bold text-gray-500 line-through sm:text-lg">Normal Price: ₦98,000</p>
                <p className="mt-2 text-3xl font-black text-red-600 dark:text-red-500 sm:text-4xl">Today: ₦85,000</p>
                <div className="mt-6 border-t border-gray-100 pt-6 dark:border-zinc-800">
                  <CountdownTimer label="FLASH PROMO ENDS IN" />
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Shield className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 sm:h-6 sm:w-6" />
                  <span className="font-medium">Secure checkout</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Truck className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 sm:h-6 sm:w-6" />
                  <span className="font-medium">Fast nationwide delivery</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Package className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 sm:h-6 sm:w-6" />
                  <span className="font-medium">Carefully packaged product</span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black dark:text-white sm:text-2xl">🔘 CLAIM YOUR DISCOUNT NOW</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">Upgrade your wrist today. Fill the form below to secure your order.</p>
              </div>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>


      {/* Spacer for mobile sticky CTA */}
      <div className="h-24 sm:h-0"></div>
    </div>
  );
}
