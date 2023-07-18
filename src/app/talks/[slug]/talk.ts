import talksJson from '@/data/talks.json';

type TalkBase = {
  slug: string;
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

export type Talk = TalkBase & { date: Date };

const toTalk = (talk: TalkJson): Talk => ({ ...talk, date: new Date(talk.date) });

export const talksFromJSON = (): Talk[] => talksJson.map(toTalk);
