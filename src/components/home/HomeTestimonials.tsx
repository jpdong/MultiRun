import { testimonialProfiles } from '../../data/home-content';
import type { HomeCopy } from '../../i18n/home/en';
import Reveal from '../motion/Reveal';

export default function HomeTestimonials({
  copy,
}: {
  copy: HomeCopy['testimonials'];
}) {
  return (
    <section className="home-testimonials" id="testimonials">
      <div className="home-container">
        <Reveal>
          <h2>{copy.heading}</h2>
        </Reveal>
        <div className="testimonial-composition">
          {testimonialProfiles.map((profile, index) => (
            <Reveal
              key={profile.name}
              className={`home-quote quote-${index}`}
              delay={index * 0.07}
            >
              <figure>
                <blockquote>{copy.items[index]?.text}</blockquote>
                <figcaption>
                  <img
                    src={profile.avatar}
                    alt=""
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                  <span>{profile.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
