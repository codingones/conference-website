'use client';

import { useTranslation } from '@/app/_translation';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Badge } from 'react-bootstrap';
import Markdown from 'react-markdown';
import { HomeTranslation } from '../homeTranslation';

type TicketsProps = {
  ticketsConfiguration: { variant: 'primary-subtle' | 'warning' | 'info-subtle'; highlight?: boolean }[];
};

export const Tickets = ({ ticketsConfiguration }: TicketsProps): ReactElement => {
  const { tickets: i18n }: HomeTranslation = useTranslation();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-12'>
          <h2>
            <small>{i18n.subtitle}</small> {i18n.title}
          </h2>
          <Markdown className='lead my-4'>{i18n.description}</Markdown>
        </div>
      </div>
      <div className='row mt-0 gx-xl-6 gy-6 my-5'>
        {i18n.ticketTypes.map((ticket, index) => {
          return (
            <div key={ticket.name} className='col-lg-4 col-md-8 col-12 mx-auto'>
              <div className={`bg-white rounded-5 ${ticketsConfiguration[index]?.highlight && 'bg-info-subtle text-white'}`}>
                <div className='p-2 border-10 border-light border-bottom border-dotted'>
                  <div
                    className={`text-center rounded-5 p-4 ${ticketsConfiguration[index]?.highlight ? 'bg-info' : 'bg-light'}`}>
                    <Badge
                      pill
                      bg={ticketsConfiguration[index]?.variant ?? 'primary-subtle'}
                      className={`mb-3 ${ticketsConfiguration[index]?.variant === 'primary-subtle' ? 'text-primary' : 'text-light'}`}>
                      {ticket.name}
                    </Badge>
                    <br />
                    <b className='display-3 fw-bolder'>{ticket.price}</b>
                  </div>
                </div>
                <div className='p-4'>
                  <Markdown>{ticket.description}</Markdown>
                  <div className='text-center my-4'>
                    <Link
                      className={`btn btn-primary ${ticket.link == null && 'disabled'}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      href={ticket.link ?? '#'}>
                      {i18n.callToAction}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
