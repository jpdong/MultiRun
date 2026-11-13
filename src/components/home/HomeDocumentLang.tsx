'use client';

import { useEffect } from 'react';

export default function HomeDocumentLang({
  lang,
  dir,
}: {
  lang: string;
  dir: 'ltr' | 'rtl';
}) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    return () => {
      html.lang = 'en';
      html.dir = 'ltr';
    };
  }, [lang, dir]);

  return null;
}
