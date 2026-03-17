import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Frank | Building Digital Systems',
  description: 'Futuristic high-tech portfolio of a software developer.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body suppressHydrationWarning className="bg-[#050505] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
