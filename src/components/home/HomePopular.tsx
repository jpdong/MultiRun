import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaSeedling,
  FaSpotify,
} from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from 'react-icons/fa6';

import type { HomeCopy } from '../../i18n/home/en';
import Reveal from '../motion/Reveal';

const apps = [
  { name: 'Instagram', href: '/hot-apps/instagram', icon: <FaInstagram /> },
  { name: 'Facebook', href: '/hot-apps/facebook', icon: <FaFacebookF /> },
  { name: 'Twitter (X)', href: '/hot-apps/twitter', icon: <FaXTwitter /> },
  { name: 'Spotify', href: '/hot-apps/spotify', icon: <FaSpotify /> },
  { name: 'BlueSky', href: '/hot-apps/bluesky', icon: <FaBluesky /> },
];

export default function HomePopular({ copy }: { copy: HomeCopy['popular'] }) {
  return (
    <section className="home-popular home-container" id="hot-content">
      <div className="popular-intro">
        <Reveal>
          <h2>{copy.heading}</h2>
        </Reveal>
        <Reveal delay={0.07}>
          <p>{copy.description}</p>
        </Reveal>
        <img
          className="popular-product"
          src="/multi_title_image.webp"
          alt={copy.imageAlt}
          width="1024"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="popular-directory">
        <Reveal>
          <h3>{copy.appsHeading}</h3>
        </Reveal>
        <div className="popular-apps">
          {apps.map((app, index) => (
            <Reveal delay={index * 0.04} key={app.name}>
              <Link href={app.href} className="popular-app">
                <span className="popular-app-icon" aria-hidden="true">
                  {app.icon}
                </span>
                <span>{app.name}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <h3>{copy.gamesHeading}</h3>
        </Reveal>
        <div className="popular-games">
          <Link href="/hot-games/roblox">
            <span className="roblox-mark" aria-hidden="true">
              ◇
            </span>
            Roblox <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/hot-games/growagarden">
            <span className="garden-mark" aria-hidden="true">
              <FaSeedling />
            </span>
            Grow a Garden <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="explore-links">
          <Link href="/hot-apps">
            <h4>
              {copy.exploreApps.title} <span aria-hidden="true">↗</span>
            </h4>
            <p>{copy.exploreApps.description}</p>
          </Link>
          <Link href="/hot-games">
            <h4>
              {copy.exploreGames.title} <span aria-hidden="true">↗</span>
            </h4>
            <p>{copy.exploreGames.description}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
