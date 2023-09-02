import '../styles/styles.scss';
import type { Metadata } from 'next';
import { ReactElement, ReactNode } from 'react';

export const metadata: Metadata = {
  title: `Your Conference 2023 | Share Knowledge & Innovation`,
  description:
    'Join us at Your Conference 2023 to explore the latest tech advancements, connect with experts, and foster innovation. Get your tickets now!'
};

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
