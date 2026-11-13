import type { HomeCopy } from '../../i18n/home/en';
import Reveal from '../motion/Reveal';

export default function HomeFaq({ copy }: { copy: HomeCopy['faq'] }) {
  return (
    <section className="home-faq home-container" id="faq">
      <Reveal>
        <h2>{copy.heading}</h2>
      </Reveal>
      <div className="faq-stack">
        {copy.items.map((item, index) => (
          <Reveal key={index} delay={index * 0.05}>
            <details
              className="home-faq-item"
              name="home-faq"
              open={index === 0}
            >
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
