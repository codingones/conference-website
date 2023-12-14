export type HomeTranslation = {
  hero: {
    title: string;
    nextEditionDate: string;
    description: string;
    callToAction: string;
  };
  header: {
    brand: string;
    about: string;
    program: string;
    speakers: string;
    tickets: string;
    sponsors: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    learnMore: string;
  };
  talks: {
    title: string;
    subtitle: string;
    description: string;
    callToAction: string;
    slots: Record<string, { title: string; description: string }>;
  };
};
