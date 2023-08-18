import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/context/Providers';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcin Pałubiński',
  description: 'Marcin Pałubiński - Web Developer UI/UX React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={cn(font.className, 'bg-background text-foreground')}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
