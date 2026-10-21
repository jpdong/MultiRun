'use client';

import { gsap } from 'gsap';
import { Fragment, useEffect, useRef } from 'react';

export default function HomeTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
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
  }, []);
  return (
    <h1 ref={ref}>
      {text.split(' ').map((word, index) => (
        <Fragment key={index}>
          <span className="title-word-mask">
            <span className="title-word">{word}</span>
          </span>
          {index < text.split(' ').length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </h1>
  );
}
