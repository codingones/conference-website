export type TalkTranslation = {
  talks: {
    title: string;
    back: string;
  };
  talkDetails: {
    by: string;
    durationUnit: string;
    slides: string;
    video: string;
    back: string;
  };
  notFound: {
    title: string;
    message: string;
    link: string;
    back: string;
  };
};
