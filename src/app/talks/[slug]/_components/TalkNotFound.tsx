'use client';

import Link from 'next/link';
import { ReactElement } from 'react';
import { useTranslation } from '@/app/_translation';
import { TalkTranslation } from '../talkTranslation';

export const TalkNotFound = (): ReactElement => {
  const { notFound: i18n }: TalkTranslation = useTranslation();

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>
        {i18n.message} <Link href={'/talks'}>{i18n.link}</Link>
      </p>
      <Link href={'/talks'}>{i18n.back}</Link>
    </>
  );
};
