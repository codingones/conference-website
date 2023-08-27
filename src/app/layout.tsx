import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ReactElement, ReactNode } from 'react';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Your Conference 2023 | Share Knowledge & Innovation`,
  description:
    'Join us at Your Conference 2023 to explore the latest tech advancements, connect with experts, and foster innovation. Get your tickets now!'
};

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => (
  <html lang='en'>
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
