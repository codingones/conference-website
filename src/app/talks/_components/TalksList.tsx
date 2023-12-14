'use client';

import Link from 'next/link';
import { ReactElement } from 'react';
import { useTranslation } from '@/app/_translation';
import { Talk } from '../[slug]/talk';
import { TalkTranslation } from '../[slug]/talkTranslation';

export const TalksList = ({ talks }: { talks: Talk[] }): ReactElement => {
  const { talks: i18n }: TalkTranslation = useTranslation();

  return (
    <>
      <h1>{i18n.title}</h1>
      <ul>
        {talks.map((talk: Talk) => (
          <li key={talk.slug}>
            <Link href={'talks/' + talk.slug}>{talk.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={'/'}>{i18n.back}</Link>
    </>
  );
};
