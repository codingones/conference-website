'use client';

import { useTranslation } from '@/app/_translation';
import { asset } from '@/app/_utils';
import Image from 'next/image';
import { ReactElement } from 'react';
import { HomeTranslation } from '../homeTranslation';

export const Spaces = (): ReactElement => {
  const { about: i18n }: HomeTranslation = useTranslation();

  return (
    <>
      <h2 className='mb-4'>
        <small>{i18n.spaces.subtitle}</small> {i18n.spaces.title}
      </h2>
      {i18n.spaces.items.map((item, index) => (
        <div key={item.name} className='d-flex align-items-center mb-4'>
          {index % 2 === 0 && (
            <div className='flex-grow-1 me-4'>
              <div className='h4'>{item.name}</div>
              {item.description}
            </div>
          )}
          <Image src={asset(`images/${item.image}`)} alt='' width={150} height={120}></Image>
          {index % 2 !== 0 && (
            <div className='flex-grow-1 text-end ms-4'>
              <div className='h4'>{item.name}</div>
              {item.description}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
