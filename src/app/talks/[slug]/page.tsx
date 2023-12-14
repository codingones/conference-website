import talksJson from '@/data/talks.json';
import { ReactElement } from 'react';
import { Translate } from '@/app/_translation';
import { bySlug } from '@/app/_utils';
import { TalkDetails, TalkNotFound } from './_components';
import { Talk, talksFromJSON } from './talk';

export const generateStaticParams = (): Talk[] => talksFromJSON(talksJson);

const TalkPage = ({ params }: { params: Talk }): ReactElement => {
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(params.slug));

  return talk ? <TalkDetails talk={talk}></TalkDetails> : <TalkNotFound></TalkNotFound>;
};

export default Translate(TalkPage, 'talks');
