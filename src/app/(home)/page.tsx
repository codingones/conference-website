import { LANGUAGE_SETTINGS } from '@/app/_language';
import { availableTranslations, Translate } from '@/app/_translation';
import * as slots from '@/data/slots.json';
import * as speakers from '@/data/speakers.json';
import * as sponsors from '@/data/sponsors.json';
import type { Metadata } from 'next';
import { ReactElement } from 'react';
import './home.scss';
import { About, Header, Hero, Program, Spaces, Speakers, Sponsors, Tickets } from './_components';
import { HomeTranslation } from './homeTranslation';

export const generateMetadata = async (): Promise<Metadata> =>
  (await availableTranslations<HomeTranslation>('home')[LANGUAGE_SETTINGS.defaultLanguage]!()).metadata;

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className='h-100 w-100 position-absolute bg-welcome' />
      <Header />
      <section id='hero' className='container flex-grow-1 d-flex align-items-center pb-5 text-center' style={{ zIndex: 1 }}>
        <Hero />
      </section>
    </div>
    <main className='overflow-hidden'>
      <section id='about' className='py-6'>
        <About>
          <Spaces />
        </About>
      </section>
      <section id='program' className='bg-light-subtle py-6'>
        <Program serializedSlots={JSON.stringify(slots)} />
      </section>
      <section id='speakers' className='text-bg-secondary py-6'>
        <Speakers serializedSpeakers={JSON.stringify(speakers)} />
      </section>
      <section id='tickets' className='bg-light py-6'>
        <Tickets
          ticketsConfiguration={[
            { variant: 'primary-subtle' },
            { variant: 'warning', highlight: true },
            { variant: 'info-subtle' }
          ]}
        />
      </section>
      <section id='sponsors' className='bg-light pb-6'>
        <Sponsors serializedSponsors={JSON.stringify(sponsors)} />
      </section>
    </main>
  </>
);

export default Translate(Home, 'home');
