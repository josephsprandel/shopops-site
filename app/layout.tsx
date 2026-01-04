import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopOps | AI-Powered Shop Management',
  description: 'Replace legacy shop management systems with AI automation. Photo intake, service recommendations, and intelligent workflows.',
  openGraph: {
    title: 'ShopOps | AI-Powered Shop Management',
    description: 'Open source shop management with AI automation',
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
