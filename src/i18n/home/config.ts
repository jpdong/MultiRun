import type { Metadata } from 'next';

import { homeCopy, type HomeCopy } from './en';
import ar from './locales/ar.json';
import bn from './locales/bn.json';
import de from './locales/de.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import id from './locales/id.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import th from './locales/th.json';
import ur from './locales/ur.json';
import vi from './locales/vi.json';

export const defaultHomeLocale = 'en' as const;
const SITE_ORIGIN = 'https://multirun.space';

export type HomeLocaleEntry = {
  label: string;
  htmlLang: string;
  openGraphLocale: string;
  direction: 'ltr' | 'rtl';
  dictionary: HomeCopy;
};

export const homeLocaleConfig = {
  en: {
    label: 'English',
    htmlLang: 'en',
    openGraphLocale: 'en_US',
    direction: 'ltr',
    dictionary: homeCopy,
  },
  ja: {
    label: '日本語',
    htmlLang: 'ja',
    openGraphLocale: 'ja_JP',
    direction: 'ltr',
    dictionary: ja,
  },
  de: {
    label: 'Deutsch',
    htmlLang: 'de',
    openGraphLocale: 'de_DE',
    direction: 'ltr',
    dictionary: de,
  },
  fr: {
    label: 'Français',
    htmlLang: 'fr',
    openGraphLocale: 'fr_FR',
    direction: 'ltr',
    dictionary: fr,
  },
  es: {
    label: 'Español',
    htmlLang: 'es',
    openGraphLocale: 'es_ES',
    direction: 'ltr',
    dictionary: es,
  },
  pt: {
    label: 'Português',
    htmlLang: 'pt-BR',
    openGraphLocale: 'pt_BR',
    direction: 'ltr',
    dictionary: pt,
  },
  it: {
    label: 'Italiano',
    htmlLang: 'it',
    openGraphLocale: 'it_IT',
    direction: 'ltr',
    dictionary: it,
  },
  id: {
    label: 'Bahasa Indonesia',
    htmlLang: 'id',
    openGraphLocale: 'id_ID',
    direction: 'ltr',
    dictionary: id,
  },
  ko: {
    label: '한국어',
    htmlLang: 'ko',
    openGraphLocale: 'ko_KR',
    direction: 'ltr',
    dictionary: ko,
  },
  vi: {
    label: 'Tiếng Việt',
    htmlLang: 'vi',
    openGraphLocale: 'vi_VN',
    direction: 'ltr',
    dictionary: vi,
  },
  th: {
    label: 'ไทย',
    htmlLang: 'th',
    openGraphLocale: 'th_TH',
    direction: 'ltr',
    dictionary: th,
  },
  ru: {
    label: 'Русский',
    htmlLang: 'ru',
    openGraphLocale: 'ru_RU',
    direction: 'ltr',
    dictionary: ru,
  },
  bn: {
    label: 'বাংলা',
    htmlLang: 'bn',
    openGraphLocale: 'bn_BD',
    direction: 'ltr',
    dictionary: bn,
  },
  ur: {
    label: 'اردو',
    htmlLang: 'ur',
    openGraphLocale: 'ur_PK',
    direction: 'rtl',
    dictionary: ur,
  },
  ar: {
    label: 'العربية',
    htmlLang: 'ar',
    openGraphLocale: 'ar_SA',
    direction: 'rtl',
    dictionary: ar,
  },
} satisfies Record<string, HomeLocaleEntry>;

export type HomeLocale = keyof typeof homeLocaleConfig;

export function getHomeLocale(locale: string): HomeLocaleEntry | undefined {
  return Object.prototype.hasOwnProperty.call(homeLocaleConfig, locale)
    ? homeLocaleConfig[locale as HomeLocale]
    : undefined;
}

export function homeLocalePath(locale: string): string {
  return locale === defaultHomeLocale ? '/' : `/${locale}`;
}

export function homeCanonicalUrl(locale: string): string {
  return locale === defaultHomeLocale
    ? `${SITE_ORIGIN}/`
    : `${SITE_ORIGIN}/${locale}`;
}

export function homeLanguageAlternates(): Record<string, string> {
  return {
    ...Object.fromEntries(
      Object.entries(homeLocaleConfig).map(([locale, config]) => [
        config.htmlLang,
        homeCanonicalUrl(locale),
      ])
    ),
    'x-default': `${SITE_ORIGIN}/`,
  };
}

export function buildHomeMetadata(locale: HomeLocale): Metadata {
  const entry = homeLocaleConfig[locale];
  const canonical = homeCanonicalUrl(locale);
  return {
    title: entry.dictionary.seo.title,
    description: entry.dictionary.seo.description,
    alternates: {
      canonical,
      languages: homeLanguageAlternates(),
    },
    openGraph: {
      title: entry.dictionary.seo.title,
      description: entry.dictionary.seo.description,
      type: 'website',
      url: canonical,
      locale: entry.openGraphLocale,
      alternateLocale: Object.values(homeLocaleConfig)
        .filter((item) => item.htmlLang !== entry.htmlLang)
        .map((item) => item.openGraphLocale),
    },
  };
}
