'use client';

import { Organizer } from '@/app/_schemas';
import { useTranslation } from '@/app/_translation';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { HomeTranslation } from '../homeTranslation';

export const Organizers = ({ serializedOrganizers }: { serializedOrganizers: string }): ReactElement => {
  const organizers: Organizer[] = Array.from(JSON.parse(serializedOrganizers));
  const { organizers: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center mb-5'>
        <h2>
          <small>{i18n.title}</small> {i18n.subtitle}
        </h2>
      </div>
      <div className='row gap-5 justify-content-center'>
        {organizers.map((organizer: Organizer) => (
          <div key={organizer.name} className='col-auto text-center'>
            <Link href={organizer.url} target='_blank' rel='noopener noreferrer'>
              <Image
                src={organizer.logo}
                alt={`Visit ${organizer.name} website (opens in new tab)`}
                width={200}
                height={200}
                title={organizer.name}
              />
              {organizer.displayName && <div className='h5 p-3 bg-dark'>{organizer.name}</div>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
