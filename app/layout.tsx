import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Expenses App',
  description: 'Developed by IZERTIS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <div className='flex h-screen w-full'>
          <Sidebar />
          <div className='ml-64 flex h-full w-full flex-col p-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
