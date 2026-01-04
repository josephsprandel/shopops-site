import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopOps | Enterprise Automotive Intelligence',
  description: 'AI-native shop management platform built for the modern automotive service industry. Enterprise-grade intelligence, real-time integrations, predictive maintenance.',
  openGraph: {
    title: 'ShopOps | Enterprise Automotive Intelligence',
    description: 'The future of shop management software',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
