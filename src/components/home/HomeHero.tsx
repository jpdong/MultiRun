import type { HomeCopy } from '../../i18n/home/en';
import HomeTitle from '../motion/HomeMotion';
import ProductShowcase from '../motion/ProductShowcase';
import Reveal from '../motion/Reveal';

type HomeHeroProps = {
  copy: HomeCopy['hero'];
  featuresCopy: HomeCopy['features']['items'];
  downloadUrl: string;
  locale: string;
};

export default function HomeHero({
  copy,
  featuresCopy,
  downloadUrl,
  locale,
}: HomeHeroProps) {
  return (
    <section className="home-hero home-container">
      <div className="hero-copy">
        <HomeTitle text={copy.title} locale={locale} />
        <Reveal>
          <p>{copy.description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <a className="home-button" href={downloadUrl}>
            {copy.cta} <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
      <ProductShowcase
        featuresCopy={featuresCopy}
        showcaseCopy={copy.showcase}
      />
    </section>
  );
}
