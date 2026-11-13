import { homeBadges } from '../../data/home-content';

export default function HomeBadges() {
  return (
    <div className="home-badges home-container">
      {homeBadges.map((badge) => (
        <a
          key={badge.name}
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={badge.src}
            width={badge.width}
            height={badge.height}
            alt={badge.alt}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
