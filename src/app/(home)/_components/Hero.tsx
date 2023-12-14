'use client';

import { ReactElement } from 'react';
import Markdown from 'react-markdown';
import { useTranslation } from '@/app/_translation';
import { HomeTranslation } from '../homeTranslation';

export const Hero = (): ReactElement => {
  const { hero: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='text-white col-xxl-7 col-lg-6'>
      <h1 className='display-4'>
        <small>{i18n.nextEditionDate}</small>
        {i18n.title}
      </h1>
      <Markdown className='lead my-5'>{i18n.description}</Markdown>
      <div className='d-sm-block d-grid'>
        <a className='btn btn-primary btn-lg' href='#tickets'>
          {i18n.callToAction}
        </a>
      </div>
    </div>
  );
};
