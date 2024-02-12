export type Talk = {
  title: string;
  speaker: string;
  description: string;
  duration: number;
  room: string;
  track: string;
  language: string;
  date: Date;
  slidesLink?: string;
  videoLink?: string;
  tags?: string[];
};

export type Talks = Talk[];
