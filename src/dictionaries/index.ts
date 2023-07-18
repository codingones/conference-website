type Lang = 'en' | 'fr';
export type Dictionary = { talks: { by: string } };

const index: Record<Lang, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module: { default: Dictionary }) => module.default),
  fr: () => import('./fr.json').then((module: { default: Dictionary }) => module.default)
};

export const dictionaryFor = async (locale: Lang): Promise<Dictionary> => index[locale]();
