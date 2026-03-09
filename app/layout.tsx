import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Luxury Sports Watch | Flash Promo',
  description: 'The Watch That Instantly Upgrades Your Presence. Claim your ₦13,000 discount today.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans text-gray-900 antialiased dark:bg-zinc-950 dark:text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
