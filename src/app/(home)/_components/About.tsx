'use client';

import { useTranslation } from '@/app/_translation';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import Markdown from 'react-markdown';
import { HomeTranslation } from '../homeTranslation';

export const About = ({ href, children }: { href?: string; children?: ReactNode }): ReactElement => {
  const { about: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='row g-6'>
        <div className='col-lg-6 col-12'>
          <h2>
            <small>{i18n.subtitle}</small> {i18n.title}
          </h2>
          <Markdown className='lead my-4'>{i18n.description}</Markdown>
          {href && (
            <div className='d-sm-block d-grid'>
              <Link href={href} className='btn btn-outline-primary btn-lg'>
                {i18n.learnMore}
              </Link>
            </div>
          )}
        </div>
        <div className='col-lg-6 col-12'>{children}</div>
      </div>
    </div>
  );
};
