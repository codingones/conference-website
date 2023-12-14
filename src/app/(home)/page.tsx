import { ReactElement } from 'react';
import { asset } from '@/app/_utils';
import { Translate } from '@/app/_translation';
import * as slots from '@/data/slots.json';
import * as speakers from '@/data/speakers.json';
import * as sponsors from '@/data/sponsors.json';
import './home.scss';
import { Header, About, Hero } from './_components';
import { Program } from './_components/Program';
import { Speakers } from './_components/Speakers';
import { Sponsors } from './_components/Sponsors';
import { Tickets } from './_components/Tickets';

const Home = (): ReactElement => (
  <>
    <div className='min-vh-100 d-flex flex-column overflow-hidden position-relative'>
      <div className='h-100 w-100 position-absolute bg-conference'></div>
      <Header />
      <section className='container flex-grow-1 d-flex align-items-center pb-5' style={{ zIndex: 1 }}>
        <Hero />
      </section>
      <div className='mb-5 bg-speaker home-illustration-container'>
        <img className='img-gray-scale home-illustration' src={asset('images/home/speaker.webp')} alt='' />
      </div>
    </div>
    <main className='overflow-hidden'>
      <section id='about' className='py-6'>
        <About />
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
