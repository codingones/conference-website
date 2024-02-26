'use client';

import { Sponsor } from '@/app/_schemas';
import { useTranslation } from '@/app/_translation';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import Markdown from 'react-markdown';
import { HomeTranslation } from '../homeTranslation';

export const Sponsors = ({ serializedSponsors }: { serializedSponsors: string }): ReactElement => {
  const sponsors: Sponsor[] = Array.from(JSON.parse(serializedSponsors));
  const { sponsors: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='col-xl-7 col-lg-9 col-12 mx-auto text-center'>
        <h2>
          <small>{i18n.title}</small> {i18n.subtitle}
        </h2>
        <Markdown className='lead my-5'>{i18n.description}</Markdown>
      </div>
      <div className='row gap-5 justify-content-center'>
        {sponsors.map((sponsor: Sponsor) => (
          <Link className='col-auto' key={sponsor.name} href={sponsor.url} target='_blank' rel='noopener noreferrer'>
            <Image
              src={sponsor.logo}
              alt={`Visit ${sponsor.name} website (opens in new tab)`}
              width={250}
              height={125}
              title={sponsor.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
