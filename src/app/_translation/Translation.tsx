'use client';

import { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGE_SETTINGS, LanguageContext } from '@/app/_language';
import { availableTranslations } from './AvailableTranslations';
import { TranslationContext } from './TranslationContext';

const updateTranslation =
  (page: string, language: string) =>
  <T extends object>(onUpdate: (translation: T) => void): void => {
    (async (): Promise<T> => await availableTranslations<T>(page)[language]!())().then(onUpdate);
  };

export const Translation = <T extends object>({
  translation,
  page,
  children
}: {
  translation: T;
  page: string;
  children: ReactNode;
}): ReactNode => {
  const [language]: LanguageContext = useContext(LanguageContext);
  const [localTranslation, setTranslation]: [T, Dispatch<SetStateAction<T>>] = useState<T>(translation);
  const translationsMap: Map<string, T> = useMemo(
    () => new Map<string, T>([[LANGUAGE_SETTINGS.defaultLanguage, translation]]),
    [translation]
  );

  useEffect(
    (): void =>
      translationsMap.has(language)
        ? setTranslation(translationsMap.get(language) as T)
        : updateTranslation(
            page,
            language
          )((availableTranslation: T): void => {
            translationsMap.set(language, availableTranslation);
            setTranslation(availableTranslation);
          }),
    [translationsMap, language, page]
  );

  return <TranslationContext.Provider value={localTranslation}>{children}</TranslationContext.Provider>;
};
