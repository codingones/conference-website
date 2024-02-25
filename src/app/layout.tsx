import { ReactElement, ReactNode } from 'react';
import { Language, LANGUAGE_SETTINGS } from '@/app/_language';
import '../styles/styles.scss';

const RootLayout = async ({ children }: { children: ReactNode }): Promise<ReactElement> => (
  <html lang={LANGUAGE_SETTINGS.defaultLanguage}>
    <body>
      <Language defaultLanguage={LANGUAGE_SETTINGS.defaultLanguage}>{children}</Language>
    </body>
  </html>
);

export default RootLayout;
