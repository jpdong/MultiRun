'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { features } from '../../data/home-content';

/** Account layers inspired by React Bits Card Swap; native buttons keep every
 * state accessible on touch and keyboard, without relying on drag gestures. */
export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || interacting || reduced.matches) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % 3),
      4800
    );
    const onChange = () => {
      if (reduced.matches) window.clearInterval(timer);
    };
    reduced.addEventListener('change', onChange);
    return () => {
      window.clearInterval(timer);
      reduced.removeEventListener('change', onChange);
    };
  }, [paused, interacting]);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.account-layer', {
          y: 40,
          rotate: 0,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }, root);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);
  return (
    <div
      className="product-showcase"
      ref={root}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setInteracting(false);
      }}
    >
      <div className="account-deck" aria-label="Multi Run app features">
        {features.slice(0, 3).map((feature, index) => {
          const position = (index - active + 3) % 3;
          return (
            <div
              className={`account-layer account-layer-${index} layer-position-${position}`}
              key={feature.title}
              aria-hidden={position !== 0}
            >
              <div className="account-tab">
                <span className="account-dot" />
                {feature.title}
              </div>
              <div className="account-preview">
                <img
                  src={feature.img}
                  alt={feature.alt}
                  width="1142"
                  height="2030"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="deck-controls">
        {features.slice(0, 3).map((feature, index) => (
          <button
            key={feature.title}
            type="button"
            aria-label={`Show ${feature.title}`}
            aria-pressed={active === index}
            onClick={() => {
              setActive(index);
              setPaused(true);
            }}
          >
            <span />
          </button>
        ))}
        <button
          className="deck-pause"
          type="button"
          aria-label={
            paused ? 'Play feature animation' : 'Pause feature animation'
          }
          onClick={() => setPaused(!paused)}
        >
          {paused ? '▷' : 'Ⅱ'}
        </button>
      </div>
    </div>
  );
}
