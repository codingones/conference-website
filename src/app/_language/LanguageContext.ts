'use client';

import { Context, createContext, Dispatch, SetStateAction } from 'react';

export type LanguageContext = [string, Dispatch<SetStateAction<string>>];

export const LanguageContext: Context<LanguageContext> = createContext<LanguageContext>([] as unknown as LanguageContext);
