import type { HomeCopy } from '../../i18n/home/en';
import FeatureExplorer from '../motion/FeatureExplorer';
import Reveal from '../motion/Reveal';

export default function HomeFeatures({ copy }: { copy: HomeCopy['features'] }) {
  return (
    <section className="home-features" id="features">
      <div className="home-container">
        <Reveal>
          <h2>{copy.heading}</h2>
        </Reveal>
        <FeatureExplorer copy={copy} />
      </div>
    </section>
  );
}
