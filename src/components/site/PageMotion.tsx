'use client';

import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';

export default function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const targets = element.querySelectorAll<HTMLElement>(
          'h1, h2, [data-motion], .legal-section, .blog-card, .related-post-card'
        );
        const observer = new IntersectionObserver(entries => {
          entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            gsap.fromTo(entry.target, { opacity: 0.4, y: 24 }, {
              opacity: 1, y: 0, duration: 0.75, delay: Math.min(index, 4) * 0.055,
              ease: 'power3.out', clearProps: 'opacity,transform',
            });
            observer.unobserve(entry.target);
          });
        }, { threshold: 0.06 });
        targets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
      }, element);
      return () => context.revert();
    });
    return () => media.revert();
  }, [pathname]);
  return <main className="subpage-main" ref={root}>{children}</main>;
}
