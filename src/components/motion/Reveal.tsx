'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, type ReactNode } from 'react';

/** Lightweight adaptation of React Bits Animated Content (MIT).
 * https://reactbits.dev/animations/animated-content
 * Animate only when visible; server-rendered content stays readable without JS.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = gsap.matchMedia();
    let observer: IntersectionObserver | undefined;
    media.add('(prefers-reduced-motion: no-preference)', () => {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          gsap.fromTo(
            el,
            { y: 28, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay,
              ease: 'power3.out',
              clearProps: 'all',
            }
          );
          observer?.disconnect();
        },
        { threshold: 0.08 }
      );
      observer.observe(el);
      return () => {
        observer?.disconnect();
        gsap.killTweensOf(el);
      };
    });
    return () => {
      observer?.disconnect();
      media.revert();
    };
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
