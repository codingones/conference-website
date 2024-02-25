import { Translate } from '@/app/_translation';
import talksJson from '@/data/talks.json';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { Talk, talksFromJSON } from './[slug]/talk';
import { TalksList } from './_components';

export const metadata: Metadata = {
  title: 'Explore Talks | Freelances Journey 2024',
  description:
    'Browse the comprehensive list of talks at Your Conference 2023. Discover diverse topics presented by experts in various fields'
};

const talks: Talk[] = talksFromJSON(talksJson);

const TalksPage = (): ReactElement => {
  return (
    <main>
      <TalksList talks={talks}></TalksList>
    </main>
  );
};

export default Translate(TalksPage, 'talks');
