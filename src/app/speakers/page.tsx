import { Metadata } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Meet Our Distinguished Speakers | Freelances Journey 2024',
  description:
    'Get inspired by our diverse lineup of esteemed speakers at Your Conference 2023. Discover their expertise and contributions to their respective fields.'
};

const SpeakersPage = (): ReactElement => (
  <main>
    <h1>Speakers</h1>
    <Link href={'/'}>Go back</Link>
  </main>
);

export default SpeakersPage;
