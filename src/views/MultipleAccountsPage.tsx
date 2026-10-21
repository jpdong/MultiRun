import Link from 'next/link';
import React from 'react';
import {
  FaGooglePlay,
  FaInstagram,
  FaFacebookF,
  FaSpotify,
  FaSeedling,
} from 'react-icons/fa';
import { FaXTwitter, FaBluesky } from 'react-icons/fa6';

import Footer from '../components/elements/Footer';
import NavBar from '../components/elements/NavBar';
import FeatureExplorer from '../components/motion/FeatureExplorer';
import HomeTitle from '../components/motion/HomeMotion';
import ProductShowcase from '../components/motion/ProductShowcase';
import Reveal from '../components/motion/Reveal';
import { faqs, testimonials } from '../data/home-content';
import type { BlogPost } from '../lib/types';
import './home.css';

const download =
  'https://play.google.com/store/apps/details?id=com.dong.multirun';
const apps = [
  { name: 'Instagram', href: '/hot-apps/instagram', icon: <FaInstagram /> },
  { name: 'Facebook', href: '/hot-apps/facebook', icon: <FaFacebookF /> },
  { name: 'Twitter (X)', href: '/hot-apps/twitter', icon: <FaXTwitter /> },
  { name: 'Spotify', href: '/hot-apps/spotify', icon: <FaSpotify /> },
  { name: 'BlueSky', href: '/hot-apps/bluesky', icon: <FaBluesky /> },
];

export default function MultipleAccountsPage({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  return (
    <div className="home-page">
      <NavBar />
      <main>
        <section className="home-hero home-container">
          <div className="hero-copy">
            <HomeTitle text="Run Multiple Accounts on One Device with Multi Run App" />
            <Reveal>
              <p>
                Keep your personal and professional lives separate with our
                secure app clone solution. No more switching between multiple
                accounts - run them all simultaneously!
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a className="home-button" href={download}>
                Get Started <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
          <ProductShowcase />
        </section>

        <section className="home-features" id="features">
          <div className="home-container">
            <Reveal>
              <h2>Powerful Features of Multi Run</h2>
            </Reveal>
            <FeatureExplorer />
          </div>
        </section>

        <section className="home-popular home-container" id="hot-content">
          <div className="popular-intro">
            <Reveal>
              <h2>Popular Apps &amp; Games</h2>
            </Reveal>
            <Reveal delay={0.07}>
              <p>
                Discover the most popular applications and games that work
                seamlessly with Multi Run
              </p>
            </Reveal>
            <img
              className="popular-product"
              src="/multi_title_image.webp"
              alt="Multi Run with Multiple Accounts"
              width="1024"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="popular-directory">
            <Reveal>
              <h3>Popular Apps</h3>
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
              <h3>Popular Games</h3>
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
                  Explore All Apps <span aria-hidden="true">↗</span>
                </h4>
                <p>Browse our complete collection of supported applications</p>
              </Link>
              <Link href="/hot-games">
                <h4>
                  Explore All Games <span aria-hidden="true">↗</span>
                </h4>
                <p>Discover games that work perfectly with multiple accounts</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="home-testimonials" id="testimonials">
          <div className="home-container">
            <Reveal>
              <h2>What Users Say About Multi Run</h2>
            </Reveal>
            <div className="testimonial-composition">
              {testimonials.map((item, index) => (
                <Reveal
                  key={item.name}
                  className={`home-quote quote-${index}`}
                  delay={index * 0.07}
                >
                  <figure>
                    <blockquote>{item.text}</blockquote>
                    <figcaption>
                      <img
                        src={item.avatar}
                        alt=""
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                      <span>{item.name}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="home-faq home-container" id="faq">
          <Reveal>
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <div className="faq-stack">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05}>
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

        {blogPosts.length > 0 && (
          <section className="home-blog home-container">
            <div className="blog-heading">
              <Reveal>
                <h2>Latest Articles</h2>
                <p>Discover the latest insights and tips</p>
              </Reveal>
              <Link href="/blog" className="home-text-link">
                View All <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="home-articles">
              {blogPosts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.07}>
                  <article>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="home-article-meta">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            timeZone: 'UTC',
                          })}
                        </time>
                        <span>{post.readingTime} min read</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>
                        {post.description.length > 120
                          ? post.description.slice(0, 120).trim() + '...'
                          : post.description}
                      </p>
                      <div className="home-article-tags">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <span className="home-text-link">
                        Read More <span aria-hidden="true">↗</span>
                      </span>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="home-download" id="download">
          <div className="home-container">
            <Reveal>
              <h2>Download Multi Run</h2>
              <p>Available on all major platforms. Get started today!</p>
            </Reveal>
            <Reveal delay={0.1}>
              <a href={download} className="home-button">
                <FaGooglePlay aria-hidden="true" />
                Google Play<span aria-hidden="true">↗</span>
              </a>
            </Reveal>
            <div className="download-wordmark" aria-hidden="true">
              Multi Run
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
