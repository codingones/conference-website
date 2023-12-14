import { LANGUAGE_SETTINGS } from '@/app/_language';

type AvailableTranslations<T> = Record<(typeof LANGUAGE_SETTINGS.availableLanguages)[number], () => Promise<T>>;

export const availableTranslations = <T extends object>(page: string) =>
  LANGUAGE_SETTINGS.availableLanguages.reduce(
    (translations: AvailableTranslations<T>, language: string): AvailableTranslations<T> => ({
      ...translations,
      [language]: () => import(`@/translations/${page}/${language}.json`).then((module: { default: T }) => module.default)
    }),
    {}
  );
