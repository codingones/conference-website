import Link from 'next/link';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { Talk, talksFromJSON } from '@/app/talks/[slug]/talk';
import talksJson from '@/data/talks.json';

export const metadata: Metadata = {
  title: 'Explore Talks | Your Conference 2023',
  description:
    'Browse the comprehensive list of talks at Your Conference 2023. Discover diverse topics presented by experts in various fields'
};

const talks: Talk[] = talksFromJSON(talksJson);

const TalksPage = (): ReactElement => (
  <main>
    <h1>Talks</h1>
    <ul>
      {talks.map((talk: Talk) => (
        <li key={talk.slug}>
          <Link href={'talks/' + talk.slug}>{talk.title}</Link>
        </li>
      ))}
    </ul>
    <Link href={'/'}>Go back</Link>
  </main>
);

export default TalksPage;
