import { bySlug } from '@/common';
import { Dictionary, dictionaryFor } from '@/dictionaries';
import { Talk, talksFromJSON } from './talk';

export const generateStaticParams = (): Talk[] => talksFromJSON();

const TalkPage = async ({ params }: { params: Talk }): Promise<JSX.Element> => {
  const dict: Dictionary = await dictionaryFor('en');
  const talk: Talk | undefined = talksFromJSON().find(bySlug(params.slug));
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
              <a href={talk.slidesLink} target={'_blank'} rel={'noreferrer'}>
                Slides
              </a>
            </li>
          )}
          {talk.videoLink && (
            <li>
              <a href={talk.videoLink} target={'_blank'} rel={'noreferrer'}>
                Video
              </a>
            </li>
          )}
        </ul>
      )}
    </>
  ) : (
    <></>
  );
};

export default TalkPage;
