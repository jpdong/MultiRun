import { FaGooglePlay } from 'react-icons/fa';

import type { HomeCopy } from '../../i18n/home/en';
import Reveal from '../motion/Reveal';

export default function HomeDownload({
  copy,
  downloadUrl,
}: {
  copy: HomeCopy['download'];
  downloadUrl: string;
}) {
  return (
    <section className="home-download" id="download">
      <div className="home-container">
        <Reveal>
          <h2>{copy.heading}</h2>
          <p>{copy.description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={downloadUrl} className="home-button">
            <FaGooglePlay aria-hidden="true" />
            {copy.googlePlay}
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <div className="download-wordmark" aria-hidden="true">
          {copy.wordmark}
        </div>
      </div>
    </section>
  );
}
