'use client';

import { ReactNode, useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const Language = ({ defaultLanguage, children }: { defaultLanguage: string; children: ReactNode }): ReactNode => (
  <LanguageContext.Provider value={useState(defaultLanguage)}>{children}</LanguageContext.Provider>
);
