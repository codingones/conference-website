import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Talks | Your Conference 2023',
  description:
    'Browse the comprehensive list of talks at Your Conference 2023. Discover diverse topics presented by experts in various fields'
};

const TalksPage = (): JSX.Element => (
  <main>
    <h1>Talks</h1>
    <Link href={'/'}>Go back</Link>
  </main>
);

export default TalksPage;
