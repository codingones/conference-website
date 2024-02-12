import * as languageSettingsJSON from '@/settings/language.json';

export type LanguageSettings = {
  availableLanguages: string[];
  defaultLanguage: string;
};

export const LANGUAGE_SETTINGS: LanguageSettings = languageSettingsJSON;
