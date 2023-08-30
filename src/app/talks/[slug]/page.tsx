import talksJson from '@/data/talks.json';
import { Dictionary, dictionaryFor } from '@/dictionaries';
import Link from 'next/link';
import { ReactElement } from 'react';
import { bySlug } from '../../common';
import { Talk, talksFromJSON } from './talk';

export const generateStaticParams = (): Talk[] => talksFromJSON(talksJson);

const TalkPage = async ({ params }: { params: Talk }): Promise<ReactElement> => {
  const dict: Dictionary = await dictionaryFor('en');
  const talk: Talk | undefined = talksFromJSON(talksJson).find(bySlug(params.slug));
  return talk ? (
    <>
      <h1>{talk.title}</h1>
      <p>({talk.language})</p>
      <small>
        {dict.talks.by} {talk.speaker} - {talk.date.toLocaleString()} ({talk.duration} min) - {talk.room}
      </small>
      <br />
      <p>
        <i>{talk.track}</i>
      </p>
      <p>{talk.description}</p>
      {talk.tags?.map((tag: string) => <small key={tag}>#{tag}&nbsp;</small>)}
      {(talk.slidesLink || talk.videoLink) && (
        <ul>
          {talk.slidesLink && (
            <li>
              <a href={talk.slidesLink} target='_blank' rel='noopener noreferrer'>
                Slides
              </a>
            </li>
          )}
          {talk.videoLink && (
            <li>
              <a href={talk.videoLink} target='_blank' rel='noopener noreferrer'>
                Video
              </a>
            </li>
          )}
        </ul>
      )}
      <Link href={'/talks'}>Back to talks</Link>
    </>
  ) : (
    <>
      <h1>This talk does not exist</h1>
      <p>
        There is no talk for this url, select another talk form the <Link href={'/talks'}>list of talks</Link>
      </p>
      <Link href={'/talks'}>Back to talks</Link>
    </>
  );
};

export default TalkPage;
