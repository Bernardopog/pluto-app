import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import NavInPage from '@/layout/NavInPage';
import ActionMessage from '../components/ActionMessage';
import Modal from '../layout/Modal';
import Navbar from '../layout/Navbar';
import ThemeToggler from '../layout/ThemeToggler/ThemeToggler';

const dmSans = DM_Sans({
  weight: 'variable',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pluto',
  description: 'A personal finance app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get('theme')?.value;

  return (
    <html lang='pt-BR' className={`${theme ?? ''} scroll-smooth`}>
      <body
        className={`bg-star-dust-200 dark:bg-chetwode-blue-950 scrollbar-thumb-chetwode-blue-600 ${dmSans.className}`}
      >
        <ThemeToggler themeIsDark={theme === 'dark'} />
        <ActionMessage />
        <Modal />
        <Navbar />
        <NavInPage />
        {children}
      </body>
    </html>
  );
}
