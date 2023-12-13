'use client';

import { ReactElement } from 'react';
import { useTranslation } from '@/app/_translation';
import { HomeTranslation } from '../homeTranslation';

export const About = (): ReactElement => {
  const { about }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-12'></div>
        <div className='col-lg-6 col-12'>
          <h2>
            <small>{about.subtitle}</small> {about.title}
          </h2>
          <p className='lead my-4'>{about.description}</p>
          <div className='d-sm-block d-grid'>
            <button className='btn btn-outline-primary btn-lg' disabled>
              {about.learnMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
