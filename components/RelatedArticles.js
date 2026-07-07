import { getRelatedArticles } from "../lib/articlesData";

export function RelatedArticles({ currentPath }) {
  const related = getRelatedArticles(currentPath, 2);

  return (
    <section className="related-articles reveal" aria-labelledby="related-articles-title">
      <div className="related-articles-head">
        <p className="eyebrow">Related Articles</p>
        <h2 id="related-articles-title">Continue planning your acoustic lighting project.</h2>
      </div>
      <div className="related-article-grid">
        {related.map((article) => (
          <article className="related-article-card" key={article.href}>
            <a className="related-article-image" href={article.href} aria-label={article.title}>
              <img src={article.image} alt={article.title} loading="lazy" />
            </a>
            <div className="related-article-copy">
              <div className="related-article-meta">
                <span>{article.label}</span>
                <span>{article.date}</span>
              </div>
              <h3>
                <a href={article.href}>{article.title}</a>
              </h3>
              <p>{article.excerpt}</p>
              <a className="related-article-link" href={article.href}>
                Read article
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
