'use client';

import { useState } from 'react';

import { featureImages } from '../../data/home-content';
import { homeCopy, type HomeCopy } from '../../i18n/home/en';

import Reveal from './Reveal';

type FeatureExplorerProps = {
  copy?: HomeCopy['features'];
};

export default function FeatureExplorer({
  copy = homeCopy.features,
}: FeatureExplorerProps) {
  const [active, setActive] = useState(0);
  const items = copy.items.map((item, index) => ({
    ...item,
    img: featureImages[index],
  }));

  return (
    <div className="feature-explorer">
      <div
        className="feature-index"
        role="tablist"
        aria-orientation="vertical"
        aria-label={copy.tablistAriaLabel}
      >
        {items.map((feature, index) => (
          <Reveal key={feature.img} delay={index * 0.06}>
            <button
              type="button"
              role="tab"
              id={`feature-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`feature-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              className={`feature-choice ${active === index ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
                  next = (index + 1) % items.length;
                else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
                  next = (index + items.length - 1) % items.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = items.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                document.getElementById(`feature-tab-${next}`)?.focus();
              }}
            >
              <span className="feature-choice-title">
                {feature.title}
                <span aria-hidden="true">↗</span>
              </span>
              <span className="feature-choice-description">{feature.desc}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <div className="feature-stage">
        {items.map((feature, index) => (
          <div
            key={feature.img}
            id={`feature-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`feature-tab-${index}`}
            hidden={active !== index}
            className={`feature-panel feature-panel-${index}`}
          >
            <img
              src={feature.img}
              alt={feature.alt}
              width="1142"
              height="2030"
              loading="lazy"
            />
          </div>
        ))}
        <span className="feature-stage-word" aria-hidden="true">
          {copy.stageWordmark}
        </span>
      </div>
    </div>
  );
}
