import { Banner } from '@/components/Banner';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hooks',
  description: 'Simple and easy example to explain how to use a hook in React.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx('bg-zinc-900 text-white', inter.className)}>
        <Banner />
        <main className='w-3/6 m-auto pb-6'>{children}</main>
      </body>
    </html>
  );
}
