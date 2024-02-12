import { slugify } from '@/app/_utils';

type TalkBase = {
  title: string;
  speaker: string;
  description: string;
  duration: number;
  room: string;
  track: string;
  language: string;
  slidesLink?: string;
  videoLink?: string;
  tags?: string[];
};

export type TalkJson = TalkBase & { date: string };

export type Talk = TalkBase & { date: Date; slug: string };

export const toTalk = (talk: TalkJson): Talk => ({
  ...talk,
  date: new Date(talk.date),
  slug: slugify(talk.title)
});

export const talksFromJSON = (talksJson: TalkJson[]): Talk[] => talksJson.map(toTalk);
