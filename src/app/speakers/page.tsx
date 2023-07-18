import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Our Distinguished Speakers | Your Conference 2023',
  description:
    'Get inspired by our diverse lineup of esteemed speakers at Your Conference 2023. Discover their expertise and contributions to their respective fields.'
};

const SpeakersPage = (): JSX.Element => (
  <main>
    <h1>Speakers</h1>
    <Link href={'/'}>Go back</Link>
  </main>
);

export default SpeakersPage;
