import '../styles/styles.scss';
import type { Metadata } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Language, LANGUAGE_SETTINGS } from '@/app/_language';

export const metadata: Metadata = {
  title: `Freelances Journey 2024`,
  description:
    'Join us at Your Conference 2023 to explore the latest tech advancements, connect with experts, and foster innovation. Get your tickets now!'
};

const RootLayout = async ({ children }: { children: ReactNode }): Promise<ReactElement> => (
  <html lang={LANGUAGE_SETTINGS.defaultLanguage}>
    <body>
      <Language defaultLanguage={LANGUAGE_SETTINGS.defaultLanguage}>{children}</Language>
    </body>
  </html>
);

export default RootLayout;
