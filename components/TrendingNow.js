"use client";

import { useRef } from "react";
import { getLatestArticles } from "../lib/articlesData";

const trendingArticles = getLatestArticles(4);

function ChevronIcon({ direction }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path
        d={direction === "next" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      <path
        d="M3 17l6.2-6.2 4 4L21 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M16 7h5v5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function TrendingNow() {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction * Math.min(track.clientWidth, 520),
      behavior: "smooth"
    });
  };

  if (!trendingArticles.length) {
    return null;
  }

  return (
    <section className="trending-now" aria-labelledby="trending-now-title">
      <div className="wrap trending-now-shell">
        <div className="trending-now-head">
          <div className="trending-now-heading">
            <h2 id="trending-now-title">Trending now</h2>
            <span aria-hidden="true">
              <TrendIcon />
            </span>
          </div>
          <div className="trending-now-controls" aria-label="Trending article controls">
            <button type="button" onClick={() => scrollTrack(-1)} aria-label="Scroll trending articles left">
              <ChevronIcon direction="prev" />
            </button>
            <button type="button" onClick={() => scrollTrack(1)} aria-label="Scroll trending articles right">
              <ChevronIcon direction="next" />
            </button>
          </div>
        </div>

        <div className="trending-now-track" ref={trackRef}>
          {trendingArticles.map((article) => (
            <article className="trending-now-card" key={article.href}>
              <a className="trending-now-image" href={article.href} aria-label={article.title}>
                <img src={article.image} alt={article.title} loading="lazy" />
              </a>
              <div className="trending-now-copy">
                <div className="trending-now-meta">
                  <span>{article.label}</span>
                  <span>{article.date}</span>
                </div>
                <h3>
                  <a href={article.href}>{article.title}</a>
                </h3>
                <p>{article.excerpt}</p>
                <a className="trending-now-read" href={article.href}>
                  Read article
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
