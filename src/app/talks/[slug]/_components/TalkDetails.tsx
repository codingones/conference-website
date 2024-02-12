'use client';

import Link from 'next/link';
import { ReactElement } from 'react';
import { useTranslation } from '@/app/_translation';
import { Talk } from '../talk';
import { TalkTranslation } from '../talkTranslation';

export const TalkDetails = ({ talk }: { talk: Talk }): ReactElement => {
  const { talkDetails: i18n }: TalkTranslation = useTranslation();

  return (
    <>
      <h1>{talk.title}</h1>
      <p>({talk.language})</p>
      <small>
        {i18n.by} {talk.speaker} - {talk.date.toLocaleString()} ({talk.duration} {i18n.durationUnit}) - {talk.room}
      </small>
      <br />
      <p>
        <i>{talk.track}</i>
      </p>
      <p>{talk.description}</p>
      {talk.tags?.map((tag: string) => <small key={tag}>#{tag}&nbsp;</small>)}
      {(talk.slidesLink || talk.videoLink) && (
        <ul>
          {talk.slidesLink && (
            <li>
              <a href={talk.slidesLink} target='_blank' rel='noopener noreferrer'>
                {i18n.slides}
              </a>
            </li>
          )}
          {talk.videoLink && (
            <li>
              <a href={talk.videoLink} target='_blank' rel='noopener noreferrer'>
                {i18n.video}
              </a>
            </li>
          )}
        </ul>
      )}
      <Link href={'/talks'}>{i18n.back}</Link>
    </>
  );
};
