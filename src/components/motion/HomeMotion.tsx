'use client';

import { gsap } from 'gsap';
import { Fragment, useEffect, useRef } from 'react';

function splitTitleTokens(text: string, locale?: string): string[] {
  if (
    locale &&
    (locale === 'ja' || locale === 'th') &&
    typeof Intl !== 'undefined' &&
    'Segmenter' in Intl
  ) {
    const segmenter = new Intl.Segmenter(locale, { granularity: 'word' });
    return Array.from(segmenter.segment(text), (part) => part.segment);
  }
  return text.split(/(\s+)/).filter(Boolean);
}

export default function HomeTitle({
  text,
  locale,
}: {
  text: string;
  locale?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const tokens = splitTitleTokens(text, locale);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.title-word',
          { yPercent: 105 },
          { yPercent: 0, stagger: 0.035, duration: 0.7, ease: 'power3.out' }
        );
      }, ref);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, [text]);

  return (
    <h1 ref={ref}>
      {tokens.map((token, index) => {
        if (/^\s+$/.test(token)) {
          return <Fragment key={index}>{token}</Fragment>;
        }
        return (
          <span className="title-word-mask" key={index}>
            <span className="title-word">{token}</span>
          </span>
        );
      })}
    </h1>
  );
}
