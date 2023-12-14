import { Context, useContext } from 'react';
import { TranslationContext } from './TranslationContext';

export const useTranslation = <T extends object>() => useContext(TranslationContext as Context<T>);
