import { createContext, useContext } from 'react';
import type { Dictionary } from './types';
import { en } from './en';
import { ar } from './ar';

export type Lang = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

export const SUPPORTED_LANGS: Lang[] = ['en', 'ar'];
export const DEFAULT_LANG: Lang = 'en';
export const LANG_STORAGE_KEY = 'amf-lang';

export const dictionaries: Record<Lang, Dictionary> = { en, ar };

export function isLang(value: string | undefined | null): value is Lang {
  return value === 'en' || value === 'ar';
}

export function getDir(lang: Lang): Direction {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export interface LanguageContextValue {
  lang: Lang;
  dir: Direction;
  t: Dictionary;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang() must be used within a LanguageContext.Provider');
  }
  return ctx;
}

export type { Dictionary };
